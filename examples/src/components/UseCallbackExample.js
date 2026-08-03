import React, { useState, useEffect, useCallback } from 'react';

/**
 * WHAT IS useCallback?
 * --------------------
 * useCallback is a React Hook used for PERFORMANCE OPTIMIZATION.
 * While `useMemo` caches the RESULT of a calculation, `useCallback` caches the 
 * FUNCTION DEFINITION (memory reference) itself between re-renders.
 *
 * WHY IS IT NEEDED?
 * -----------------
 * In JavaScript, functions are objects. Every time a component re-renders,
 * inline functions are re-created with brand NEW memory references.
 *
 * If you pass an un-memoized function as a prop to a child component wrapped in `React.memo`,
 * the child will think its props changed and RE-RENDER anyway!
 * `useCallback` preserves the same function reference across renders.
 */

// Child component wrapped in React.memo
// It only re-renders if its props change!
const UserRow = React.memo(function UserRow({ user, onDelete }) {
  console.log(`⚡ [React.memo Child] UserRow rendered for: ${user.name}`);

  return (
    <div style={{
      display: 'flex',
      justify: 'space-between',
      alignItems: 'center',
      padding: '10px 14px',
      margin: '6px 0',
      border: '1px solid #cbd5e1',
      borderRadius: '6px',
      backgroundColor: '#f8fafc'
    }}>
      <div>
        <strong>{user.name}</strong> <span style={{ color: '#64748b' }}>({user.email})</span>
      </div>

      <button
        onClick={() => onDelete(user.id)}
        style={{
          backgroundColor: '#ef4444',
          color: 'white',
          border: 'none',
          padding: '6px 12px',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Delete User
      </button>
    </div>
  );
});

export default function UseCallbackExample() {
  // 1. Users list state fetched from API
  const [users, setUsers] = useState([]);

  // 2. Unrelated Parent state (clicking this forces Parent to re-render)
  const [parentCounter, setParentCounter] = useState(0);

  // Fetch users from API on mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  /**
   * =========================================================================
   * DEMO: useCallback
   * =========================================================================
   * WITHOUT useCallback:
   * Constantly creates a NEW handleDelete function reference on every re-render of Parent.
   * Passing it to <UserRow onDelete={handleDelete} /> forces ALL UserRows to re-render 
   * even when UserRow is wrapped in React.memo!
   *
   * WITH useCallback:
   * Keeps the EXACT same function reference in memory across re-renders!
   * Now clicking "Increment Parent Counter" will NOT cause UserRow components to re-render!
   */
  const handleDelete = useCallback((userIdToDelete) => {
    console.log(`🗑️ Deleting user with ID: ${userIdToDelete}`);
    setUsers((prevUsers) => prevUsers.filter((u) => u.id !== userIdToDelete));
  }, []); // Empty dependency array: function reference NEVER changes

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>3. useCallback Hook Example</h2>

      {/* Explanation Note */}
      <p style={{ background: '#f0fdf4', borderLeft: '4px solid #10b981', padding: '12px', borderRadius: '4px' }}>
        <strong>How to test useCallback:</strong>
        <br />
        1. Open your browser console.
        <br />
        2. Click <em>"Increment Parent Counter"</em> to force a Parent re-render.
        <br />
        3. Notice that <code>UserRow</code> child components do <strong>NOT</strong> re-render because <code>handleDelete</code> function reference is cached using <code>useCallback</code>!
      </p>

      {/* Unrelated State Control */}
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={() => setParentCounter(parentCounter + 1)}
          style={{
            padding: '10px 18px',
            fontSize: '15px',
            fontWeight: 'bold',
            cursor: 'pointer',
            background: '#8b5cf6',
            color: 'white',
            border: 'none',
            borderRadius: '6px'
          }}
        >
          Increment Parent Counter ({parentCounter})
        </button>
      </div>

      {/* Display List of Users */}
      <h3>User List ({users.length} remaining):</h3>
      {users.length === 0 ? (
        <p>No users remaining.</p>
      ) : (
        users.map((user) => (
          // Passing memoized handleDelete callback as prop to React.memo child
          <UserRow key={user.id} user={user} onDelete={handleDelete} />
        ))
      )}
    </div>
  );
}

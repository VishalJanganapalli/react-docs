import React, { useState, useEffect, useMemo } from 'react';

/**
 * WHAT IS useMemo?
 * ---------------
 * useMemo is a React Hook used for PERFORMANCE OPTIMIZATION.
 * It caches (remembers) the RESULT of an expensive calculation or filtering logic
 * between re-renders so React doesn't re-calculate it needlessly.
 *
 * SYNTAX:
 * -------
 * const cachedResult = useMemo(() => {
 *    return heavyCalculation(a, b);
 * }, [a, b]); // Only recalculates when 'a' or 'b' changes
 */

export default function UseMemoExample() {

  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const filteredUsers = useMemo(() => {
    console.log('🔄 [useMemo] Filtering users list...');

    return users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]); // Dependency array: run only when users or searchTerm changes

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>1. useMemo Hook Example</h2>

      {/* Explanation Note */}
      <p style={{ background: '#e0f2fe', padding: '10px', borderRadius: '5px' }}>
        <strong>How it works:</strong> Type in the search box to trigger <code>useMemo</code>.
        Then click <em>"Increment Counter"</em>. Open your browser console — notice that
        <strong>"Filtering users list..."</strong> does NOT get logged when clicking the counter button!
      </p>

      {/* Unrelated State Control */}
      <div style={{ marginBottom: '15px' }}>
        <button
          onClick={() => setCount(count + 1)}
          style={{ padding: '8px 16px', cursor: 'pointer', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          Unrelated Counter: {count}
        </button>
      </div>

      {/* Filter Control */}
      <div style={{ marginBottom: '15px' }}>
        <input
          type="text"
          placeholder="Search user by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '8px', width: '250px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>

      {/* Display Filtered Users List */}
      <h3>Matching Users ({filteredUsers.length}):</h3>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.email}) - <em>{user.address.city}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';

/**
 * PARENT COMPONENT FOR React.memo DEMO
 * ------------------------------------
 * Demonstrates how React.memo prevents Child components (UserCard) 
 * from re-rendering when Parent state changes.
 */

export default function ReactMemoExample() {
  const [users, setUsers] = useState([]);

  const [parentCount, setParentCount] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>2. React.memo HOC Example</h2>

      {/* Explanation Note */}
      <p style={{ background: '#fef3c7', padding: '10px', borderRadius: '5px' }}>
        <strong>How it works:</strong> Click the button below to re-render this Parent component.
        Check your browser console — the <code>UserCard</code> child components will
        <strong>NOT</strong> re-render because their <code>user</code> props didn't change!
      </p>

      {/* Button to re-render Parent */}
      <div style={{ marginBottom: '15px' }}>
        <button
          onClick={() => setParentCount(parentCount + 1)}
          style={{ padding: '8px 16px', cursor: 'pointer', background: '#f59e0b', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          Re-render Parent Component (Count: {parentCount})
        </button>
      </div>

      {/* Render list of UserCards (wrapped in React.memo) */}
      <h3>User Cards List:</h3>
      <div>
        {users.map((user) => (
          // Passing user object as prop to Memoized Child Component
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

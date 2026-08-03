import React from 'react';


const UserCard = React.memo(function UserCard({ user }) {
  console.log(`⚡ [React.memo] Child UserCard rendered for: ${user.name}`);

  return (
    <div style={{
      border: '2px solid #10b981',
      borderRadius: '8px',
      padding: '12px',
      margin: '8px 0',
      backgroundColor: '#f0fdf4'
    }}>
      <span style={{ fontSize: '12px', background: '#10b981', color: 'white', padding: '2px 6px', borderRadius: '4px' }}>
        React.memo Child Component
      </span>
      <h4 style={{ margin: '8px 0 4px 0' }}>{user.name}</h4>
      <p style={{ margin: '2px 0', fontSize: '14px' }}><strong>Username:</strong> @{user.username}</p>
      <p style={{ margin: '2px 0', fontSize: '14px' }}><strong>Email:</strong> {user.email}</p>
      <p style={{ margin: '2px 0', fontSize: '14px' }}><strong>Company:</strong> {user.company.name}</p>
    </div>
  );
});

export default UserCard;

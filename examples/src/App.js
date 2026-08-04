import React, { useState } from 'react';
import './App.css';
import UseMemoExample from './components/UseMemoExample';
import ReactMemoExample from './components/ReactMemoExample';
import UseCallbackExample from './components/UseCallbackExample';

function App() {
  const [activeTab, setActiveTab] = useState('useMemo');

  return (
    <div className="App" style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ color: '#1e293b' }}>React Performance Optimization Examples</h1>
        <p style={{ color: '#64748b' }}>Data fetched from <code>https://jsonplaceholder.typicode.com/users</code></p>

        {/* Navigation Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '15px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveTab('useMemo')}
            style={{
              padding: '10px 18px',
              fontSize: '15px',
              fontWeight: 'bold',
              cursor: 'pointer',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: activeTab === 'useMemo' ? '#3b82f6' : '#e2e8f0',
              color: activeTab === 'useMemo' ? 'white' : '#334155',
            }}
          >
            1. useMemo Example (Hook)
          </button>

          <button
            onClick={() => setActiveTab('ReactMemo')}
            style={{
              padding: '10px 18px',
              fontSize: '15px',
              fontWeight: 'bold',
              cursor: 'pointer',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: activeTab === 'ReactMemo' ? '#10b981' : '#e2e8f0',
              color: activeTab === 'ReactMemo' ? 'white' : '#334155',
            }}
          >
            2. React.memo Example (HOC)
          </button>

          <button
            onClick={() => setActiveTab('useCallback')}
            style={{
              padding: '10px 18px',
              fontSize: '15px',
              fontWeight: 'bold',
              cursor: 'pointer',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: activeTab === 'useCallback' ? '#8b5cf6' : '#e2e8f0',
              color: activeTab === 'useCallback' ? 'white' : '#334155',
            }}
          >
            3. useCallback Example (Hook)
          </button>
        </div>
      </header>

      {/* Render selected component */}
      <main style={{ background: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '20px' }}>
        {activeTab === 'useMemo' && <UseMemoExample />}
        {activeTab === 'ReactMemo' && <ReactMemoExample />}
        {activeTab === 'useCallback' && <UseCallbackExample />}
      </main>

     
    </div>
  );
}

export default App;

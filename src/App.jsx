import React from 'react';
import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';

function App() {
  return (
    <Desktop>
      <div style={{ 
        height: '100vh',
        width: '100vw',
        position: 'relative'
      }}>
        <div style={{ 
          height: 'calc(100vh - 37px)',
          overflow: 'auto'
        }}>
          {/* Desktop content will go here */}
        </div>
        <Taskbar />
      </div>
    </Desktop>
  );
}

export default App;

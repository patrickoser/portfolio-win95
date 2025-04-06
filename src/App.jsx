import React, { useState } from 'react';
import Taskbar from './components/Taskbar';
import ContentArea from './components/ContentArea';

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [minimizedWindows, setMinimizedWindows] = useState([]);

  const handleWindowMinimize = (section) => {
    setMinimizedWindows(prev => [...prev, section]);
  };

  const handleWindowRestore = (section) => {
    setMinimizedWindows(prev => prev.filter(s => s !== section));
  };

  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      background: '#008080',
      position: 'relative'
    }}>
      <div style={{ flex: 1, position: 'relative' }}>
        <ContentArea 
          activeSection={activeSection} 
          onMinimize={handleWindowMinimize}
          onRestore={handleWindowRestore}
        />
      </div>
      <Taskbar 
        onSectionChange={setActiveSection} 
        minimizedWindows={minimizedWindows}
        onRestoreWindow={handleWindowRestore}
      />
    </div>
  );
}

export default App;

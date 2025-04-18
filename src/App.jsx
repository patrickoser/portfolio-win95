import React, { useState } from 'react';
import Taskbar from './components/Taskbar';
import ContentArea from './components/ContentArea';
import StartupScreen from './components/StartupScreen';

function App() {
  const [isStarting, setIsStarting] = useState(true);
  const [activeSection, setActiveSection] = useState(null);
  const [openWindows, setOpenWindows] = useState([]);

  const handleStartupComplete = () => {
    setIsStarting(false);
  };

  const handleWindowOpen = (section) => {
    setActiveSection(section);
    if (!openWindows.includes(section)) {
      setOpenWindows(prev => [...prev, section]);
    }
  };

  const handleWindowMinimize = (section) => {
    setActiveSection(null);
  };

  const handleWindowClose = (section) => {
    setActiveSection(null);
    setOpenWindows(prev => prev.filter(s => s !== section));
  };

  const handleWindowRestore = (section) => {
    setActiveSection(section);
  };

  if (isStarting) {
    return <StartupScreen onComplete={handleStartupComplete} />;
  }

  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      background: '#008080',
      position: 'relative'
    }}>
      <div style={{ flex: 1, position: 'relative' }}>
        {openWindows.map((window) => (
          <ContentArea 
            key={window}
            activeSection={window === activeSection ? window : null}
            onMinimize={handleWindowMinimize}
            onClose={handleWindowClose}
            onRestore={handleWindowRestore}
          />
        ))}
      </div>
      <Taskbar 
        onSectionChange={handleWindowOpen} 
        openWindows={openWindows}
        activeWindow={activeSection}
        onRestoreWindow={handleWindowRestore}
      />
    </div>
  );
}

export default App;

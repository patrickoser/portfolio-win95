import React, { useState } from 'react';
import Taskbar from './components/Taskbar';
import ContentArea from './components/ContentArea';

function App() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ContentArea activeSection={activeSection} />
      <Taskbar onSectionChange={setActiveSection} />
    </div>
  );
}

export default App;

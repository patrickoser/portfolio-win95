import React from 'react';
import { Window, WindowHeader, WindowContent, Button } from 'react95';

const ContentArea = ({ activeSection }) => {
  const getContent = () => {
    switch (activeSection) {
      case 'about':
        return (
          <div style={{ padding: '20px' }}>
            <h2>About Me</h2>
            <p>Welcome to my Windows 95 portfolio! I'm a developer passionate about creating unique web experiences.</p>
          </div>
        );
      case 'projects':
        return (
          <div style={{ padding: '20px' }}>
            <h2>My Projects</h2>
            <p>Check out my latest work and contributions.</p>
          </div>
        );
      case 'experience':
        return (
          <div style={{ padding: '20px' }}>
            <h2>Experience</h2>
            <p>My professional journey and skills.</p>
          </div>
        );
      case 'skills':
        return (
          <div style={{ padding: '20px' }}>
            <h2>Skills</h2>
            <p>Technologies and tools I work with.</p>
          </div>
        );
      case 'contact':
        return (
          <div style={{ padding: '20px' }}>
            <h2>Contact</h2>
            <p>Get in touch with me!</p>
          </div>
        );
      default:
        return (
          <div style={{ 
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%'
          }}>
            <h2>Welcome to My Portfolio</h2>
            <p>Click the Start button to begin exploring!</p>
          </div>
        );
    }
  };

  return (
    <Window style={{ 
      width: '100%',
      height: 'calc(100vh - 37px)', // Account for taskbar height
      position: 'fixed',
      top: 0,
      left: 0
    }}>
      <WindowHeader style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ flex: 1 }}>
          {activeSection ? activeSection.charAt(0).toUpperCase() + activeSection.slice(1) : 'Welcome'}
        </span>
        <Button style={{ marginRight: '6px' }}>🗕</Button>
        <Button style={{ marginRight: '6px' }}>🗖</Button>
        <Button>🗙</Button>
      </WindowHeader>
      <WindowContent>
        {getContent()}
      </WindowContent>
    </Window>
  );
};

export default ContentArea; 
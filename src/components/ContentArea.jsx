import React, { useState } from 'react';
import { Window, WindowHeader, WindowContent, Button } from 'react95';
import styled from 'styled-components';

const StyledWindow = styled(Window)`
  background: #c0c0c0;
  border: 2px solid #000000;
  box-shadow: 2px 2px 0px #808080, -2px -2px 0px #ffffff;
`;

const StyledWindowHeader = styled(WindowHeader)`
  background: #000080;
  color: white;
  display: flex;
  align-items: center;
  padding: 4px 6px;
  border-bottom: 2px solid #000000;
`;

const WindowControls = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const ContentArea = ({ activeSection, onMinimize, onRestore }) => {
  const [isMaximized, setIsMaximized] = useState(false);

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

  if (!activeSection) {
    return null;
  }

  return (
    <StyledWindow
      style={{ 
        width: isMaximized ? '100%' : '80%',
        height: isMaximized ? '100%' : '80%',
        position: 'fixed',
        top: isMaximized ? '0' : '10%',
        left: isMaximized ? '0' : '10%',
        transition: 'all 0.3s ease',
        zIndex: 1
      }}
    >
      <StyledWindowHeader>
        <span style={{ flex: 1 }}>
          {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
        </span>
        <WindowControls>
          <Button 
            style={{ marginRight: '6px' }}
            onClick={() => onMinimize(activeSection)}
          >
            🗕
          </Button>
          <Button 
            style={{ marginRight: '6px' }}
            onClick={() => setIsMaximized(!isMaximized)}
          >
            {isMaximized ? '🗗' : '🗖'}
          </Button>
          <Button 
            onClick={() => {
              onMinimize(activeSection);
              setIsMaximized(false);
            }}
          >
            🗙
          </Button>
        </WindowControls>
      </StyledWindowHeader>
      <WindowContent style={{ background: '#c0c0c0' }}>
        {getContent()}
      </WindowContent>
    </StyledWindow>
  );
};

export default ContentArea; 
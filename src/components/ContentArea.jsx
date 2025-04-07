import React, { useState, useRef, useEffect } from 'react';
import { Window, WindowHeader, WindowContent, Button } from 'react95';
import styled from 'styled-components';
import Draggable from 'react-draggable';

const StyledWindow = styled(Window)`
  background: #c0c0c0;
  border: 2px solid #000000;
  box-shadow: 2px 2px 0px #808080, -2px -2px 0px #ffffff;
  width: 600px;
  height: 400px;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s ease;
  z-index: 1;
  display: flex;
  flex-direction: column;

  &.maximized {
    width: 100%;
    height: calc(100vh - 37px);
    top: 0;
    left: 0;
    position: fixed;
  }
`;

const StyledWindowHeader = styled(WindowHeader)`
  background: #000080;
  color: white;
  display: flex;
  align-items: center;
  padding: 4px 6px;
  border-bottom: 2px solid #000000;
  cursor: move;
  flex-shrink: 0;
  height: 30px;
`;

const WindowControls = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const WindowContentWrapper = styled(WindowContent)`
  background: #c0c0c0;
  flex: 1;
  overflow: auto;
  padding: 20px;
  min-height: 0;
  height: calc(100% - 30px);
  box-sizing: border-box;
`;

const DraggableContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 37px;
  pointer-events: none;
  
  & > * {
    pointer-events: auto;
  }
`;

const ContentArea = ({ activeSection, onMinimize, onClose, onRestore }) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const nodeRef = useRef(null);
  const isFirstRender = useRef(true);
  const lastPosition = useRef({ x: 0, y: 0 });

  // Calculate initial position
  useEffect(() => {
    if (activeSection && isFirstRender.current) {
      isFirstRender.current = false;
      const container = nodeRef.current.parentElement;
      const windowWidth = 600;
      const windowHeight = 400;
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      
      const centerX = (containerWidth - windowWidth) / 2;
      const centerY = (containerHeight - windowHeight) / 2;
      
      setPosition({ x: centerX, y: centerY });
      lastPosition.current = { x: centerX, y: centerY };
    }
  }, [activeSection]);

  const handleMaximize = () => {
    if (!isMaximized) {
      // Store current position before maximizing
      lastPosition.current = position;
      setPosition({ x: 0, y: 0 });
    } else {
      // Restore to last position when unmaximizing
      setPosition(lastPosition.current);
    }
    setIsMaximized(!isMaximized);
  };

  const handleDragStop = (e, data) => {
    if (!isMaximized) {
      const container = nodeRef.current.parentElement;
      const windowWidth = 600;
      const windowHeight = 400;
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      
      // Ensure position is within bounds
      const boundedX = Math.max(0, Math.min(data.x, containerWidth - windowWidth));
      const boundedY = Math.max(0, Math.min(data.y, containerHeight - windowHeight));
      
      const newPosition = { x: boundedX, y: boundedY };
      setPosition(newPosition);
      lastPosition.current = newPosition;
    }
  };

  const getContent = () => {
    switch (activeSection) {
      case 'about':
        return (
          <div>
            <h2>About Me</h2>
            <p>Welcome to my Windows 95 portfolio! I'm a developer passionate about creating unique web experiences.</p>
          </div>
        );
      case 'projects':
        return (
          <div>
            <h2>My Projects</h2>
            <p>Check out my latest work and contributions.</p>
          </div>
        );
      case 'experience':
        return (
          <div>
            <h2>Experience</h2>
            <p>My professional journey and skills.</p>
          </div>
        );
      case 'skills':
        return (
          <div>
            <h2>Skills</h2>
            <p>Technologies and tools I work with.</p>
          </div>
        );
      case 'contact':
        return (
          <div>
            <h2>Contact</h2>
            <p>Get in touch with me!</p>
          </div>
        );
      default:
        return (
          <div style={{ 
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

  const windowContent = (
    <StyledWindow className={isMaximized ? 'maximized' : ''}>
      <StyledWindowHeader className="window-header">
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
            onClick={handleMaximize}
          >
            {isMaximized ? '🗗' : '🗖'}
          </Button>
          <Button 
            onClick={() => onClose(activeSection)}
          >
            🗙
          </Button>
        </WindowControls>
      </StyledWindowHeader>
      <WindowContentWrapper>
        {getContent()}
      </WindowContentWrapper>
    </StyledWindow>
  );

  return (
    <DraggableContainer>
      {isMaximized ? (
        <div ref={nodeRef}>
          {windowContent}
        </div>
      ) : (
        <Draggable
          nodeRef={nodeRef}
          handle=".window-header"
          position={position}
          onStop={handleDragStop}
          bounds="parent"
          defaultPosition={{ x: 0, y: 0 }}
          grid={[1, 1]}
          cancel=".window-controls"
        >
          <div ref={nodeRef} style={{ position: 'absolute' }}>
            {windowContent}
          </div>
        </Draggable>
      )}
    </DraggableContainer>
  );
};

export default ContentArea; 
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FullScreenOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  color: white;
  font-family: 'ms_sans_serif';
`;

const Logo = styled.div`
  font-size: 48px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LoadingBar = styled.div`
  width: 300px;
  height: 20px;
  background: #c0c0c0;
  border: 2px solid #000000;
  position: relative;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  background: #000080;
  width: ${props => props.$progress}%;
  transition: width 0.5s ease;
`;

const StartupScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 300);

    // Text blinking effect
    const blinkTimer = setInterval(() => {
      setShowText(prev => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(blinkTimer);
    };
  }, [onComplete]);

  return (
    <FullScreenOverlay>
      <Logo>
        <span>Windows</span>
        <span style={{ fontSize: '40px' }}>95</span>
      </Logo>
      {showText && (
        <div style={{ marginBottom: '20px' }}>
          Starting Windows 95...
        </div>
      )}
      <LoadingBar>
        <Progress $progress={progress} />
      </LoadingBar>
    </FullScreenOverlay>
  );
};

export default StartupScreen; 
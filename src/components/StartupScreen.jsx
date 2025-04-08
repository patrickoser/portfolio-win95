import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import windowsLogo from '../assets/windows95-logo.png';

const FullScreenOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, #87CEEB, #1E90FF);
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  color: white;
  font-family: 'ms_sans_serif';
  overflow: hidden;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.8) 0%, transparent 50%),
      radial-gradient(circle at 80% 30%, rgba(255, 255, 255, 0.7) 0%, transparent 50%),
      radial-gradient(circle at 40% 60%, rgba(255, 255, 255, 0.6) 0%, transparent 50%);
    opacity: 0.7;
    pointer-events: none;
    z-index: 1;
    animation: cloudMove 60s linear infinite;
  }

  @keyframes cloudMove {
    0% {
      background-position: 0 0, 0 0, 0 0;
    }
    100% {
      background-position: 200px 0, -200px 0, 100px 0;
    }
  }
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  position: relative;
  z-index: 2;
`;

const WindowsLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  position: relative;
  z-index: 2;
`;

const LogoImage = styled.img`
  width: 400px;
  height: auto;
  margin-bottom: 20px;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  position: relative;
  z-index: 2;
`;

const Copyright = styled.div`
  font-size: 12px;
  color: #808080;
  margin-top: 5px;
`;

const LoadingBar = styled.div`
  width: 300px;
  height: 20px;
  background: #c0c0c0;
  border: 2px solid #000000;
  position: relative;
  overflow: hidden;
  margin-top: 20px;
`;

const Progress = styled.div`
  height: 100%;
  background: #000080;
  width: ${props => props.$progress}%;
  transition: width 0.5s ease;
`;

const BootMessage = styled.div`
  font-size: 14px;
  margin: 10px 0;
  color: #c0c0c0;
  text-align: center;
  min-height: 20px;
`;

const StartupScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showText, setShowText] = useState(true);
  const [bootMessage, setBootMessage] = useState('Starting Windows 95...');

  const bootMessages = [
    'Starting Windows 95...',
    'Loading system files...',
    'Initializing drivers...',
    'Preparing desktop...',
    'Almost ready...'
  ];

  useEffect(() => {
    let messageIndex = 0;
    const messageTimer = setInterval(() => {
      messageIndex = (messageIndex + 1) % bootMessages.length;
      setBootMessage(bootMessages[messageIndex]);
    }, 1000);

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          clearInterval(messageTimer);
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
      clearInterval(progressTimer);
      clearInterval(messageTimer);
      clearInterval(blinkTimer);
    };
  }, [onComplete]);

  return (
    <FullScreenOverlay>
      <Logo>
        <WindowsLogo>
          <LogoImage 
            src={windowsLogo}
            alt="Windows 95 Logo"
          />
          <span style={{ fontSize: '40px' }}>Windows 95</span>
        </WindowsLogo>
        <Copyright>
          Copyright © 1981-1995 Microsoft Corp.
        </Copyright>
      </Logo>
      <BootMessage>
        {showText && bootMessage}
      </BootMessage>
      <LoadingBar>
        <Progress $progress={progress} />
      </LoadingBar>
    </FullScreenOverlay>
  );
};

export default StartupScreen; 
import React, { useState } from 'react';
import { Button, Tooltip, MenuList, MenuItem } from 'react95';
import { Computer } from '@react95/icons';

const Taskbar = ({ onSectionChange }) => {
  const [showStartMenu, setShowStartMenu] = useState(false);

  const handleMenuItemClick = (section) => {
    setShowStartMenu(false);
    onSectionChange(section);
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      height: '37px',
      backgroundColor: '#c0c0c0',
      borderTop: '2px solid #ffffff',
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px',
      zIndex: 1000
    }}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <Button 
          onClick={() => setShowStartMenu(!showStartMenu)} 
          active={showStartMenu}
          variant="menu"
        >
          <Computer style={{ marginRight: 4 }} />
          Start
        </Button>
        {showStartMenu && (
          <div style={{
            position: 'absolute',
            bottom: '38px',
            left: 0,
            backgroundColor: '#c0c0c0',
            padding: '2px',
            border: '2px solid #000000',
            borderRadius: '1px'
          }}>
            <MenuList>
              <MenuItem onClick={() => handleMenuItemClick('about')}>
                <span role="img" aria-label="👨‍💻" style={{ marginRight: 8 }}>👨‍💻</span>
                About Me
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('projects')}>
                <span role="img" aria-label="🚀" style={{ marginRight: 8 }}>🚀</span>
                Projects
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('experience')}>
                <span role="img" aria-label="💼" style={{ marginRight: 8 }}>💼</span>
                Experience
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('skills')}>
                <span role="img" aria-label="🎓" style={{ marginRight: 8 }}>🎓</span>
                Skills
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('contact')}>
                <span role="img" aria-label="📧" style={{ marginRight: 8 }}>📧</span>
                Contact
              </MenuItem>
            </MenuList>
          </div>
        )}
      </div>
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
        <Tooltip text="Current time">
          <div style={{ padding: '0 8px' }}>
            {new Date().toLocaleTimeString()}
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default Taskbar; 
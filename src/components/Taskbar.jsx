import React, { useState } from 'react';
import { Button, Tooltip } from 'react95';
import { MenuList } from 'react95/dist/MenuList/MenuList';
import { MenuListItem } from 'react95/dist/MenuList/MenuListItem';
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
            borderRadius: '1px',
            boxShadow: '2px 2px 0px #808080, -2px -2px 0px #ffffff',
            minWidth: '200px'
          }}>
            <MenuList style={{ 
              border: 'none',
              padding: '2px 0'
            }}>
              <MenuListItem 
                onClick={() => handleMenuItemClick('about')}
                style={{ 
                  padding: '4px 8px',
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                <span role="img" aria-label="👨‍💻" style={{ marginRight: 8 }}>👨‍💻</span>
                About Me
              </MenuListItem>
              <MenuListItem 
                onClick={() => handleMenuItemClick('projects')}
                style={{ 
                  padding: '4px 8px',
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                <span role="img" aria-label="🚀" style={{ marginRight: 8 }}>🚀</span>
                Projects
              </MenuListItem>
              <MenuListItem 
                onClick={() => handleMenuItemClick('experience')}
                style={{ 
                  padding: '4px 8px',
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                <span role="img" aria-label="💼" style={{ marginRight: 8 }}>💼</span>
                Experience
              </MenuListItem>
              <MenuListItem 
                onClick={() => handleMenuItemClick('skills')}
                style={{ 
                  padding: '4px 8px',
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                <span role="img" aria-label="🎓" style={{ marginRight: 8 }}>🎓</span>
                Skills
              </MenuListItem>
              <MenuListItem 
                onClick={() => handleMenuItemClick('contact')}
                style={{ 
                  padding: '4px 8px',
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                <span role="img" aria-label="📧" style={{ marginRight: 8 }}>📧</span>
                Contact
              </MenuListItem>
            </MenuList>
          </div>
        )}
      </div>
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
        <Tooltip text="Current time">
          <div style={{ 
            padding: '0 8px',
            backgroundColor: '#c0c0c0',
            border: '1px solid #808080',
            borderTopColor: '#ffffff',
            borderLeftColor: '#ffffff',
            marginRight: '4px'
          }}>
            {new Date().toLocaleTimeString()}
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default Taskbar; 
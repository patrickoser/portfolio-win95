import React from 'react';
import { Button, Tooltip } from 'react95';
import { Computer } from '@react95/icons';

const Taskbar = () => {
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
      padding: '0 4px'
    }}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <Button variant="menu">
          <Computer style={{ marginRight: 4 }} />
          Start
        </Button>
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
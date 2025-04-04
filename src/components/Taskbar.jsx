import React from 'react';
import { AppBar, Toolbar, Button, Tooltip } from 'react95';
import { Computer } from '@react95/icons';

const Taskbar = () => {
  return (
    <AppBar style={{ top: 'auto', bottom: 0 }}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <Button>
            <Computer style={{ marginRight: 4 }} />
            Start
          </Button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Tooltip text="Current time" enterDelay={100} leaveDelay={500}>
            <div style={{ padding: '0 8px' }}>
              {new Date().toLocaleTimeString()}
            </div>
          </Tooltip>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Taskbar; 
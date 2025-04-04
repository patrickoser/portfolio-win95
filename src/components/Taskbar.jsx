import React from 'react';
import { AppBar, Toolbar, Button, Tooltip } from 'react95';
import { Computer } from '@react95/icons';

const Taskbar = () => {
  return (
    <AppBar style={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      <Toolbar style={{ justifyContent: 'space-between', padding: '0 4px' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <Button variant="menu">
            <Computer style={{ marginRight: 4 }} />
            Start
          </Button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Tooltip text="Current time">
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
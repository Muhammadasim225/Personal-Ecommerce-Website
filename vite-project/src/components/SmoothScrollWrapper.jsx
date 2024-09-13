// SmoothScrollWrapper.jsx
import React from 'react';
import Scrollbar from 'react-smooth-scrollbar';

const SmoothScrollWrapper = ({ children }) => {
  return (
    <Scrollbar damping={0.8} continuousScrolling={true} style={{ height: '100vh', overflow: 'hidden' }}>
      {children}
    </Scrollbar>
  );
};

export default SmoothScrollWrapper;

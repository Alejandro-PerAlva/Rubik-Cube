import React from 'react';

const Controls = ({ onMove }) => {
  const faces = ['F', 'B', 'U', 'D', 'L', 'R'];
  return (
    <div className="controls">
      {faces.map(face => (
        <button key={face} onClick={() => onMove(face)}>
          {face}
        </button>
      ))}
    </div>
  );
};

export default Controls;

import React, { useState } from 'react';

function App() {
  const [colorRed, setColor1] = useState('red');
  const [colorBlue, setColor2] = useState('blue');

  const swapColors = () => {
    setColor1(colorBlue);
    setColor2(colorRed);
  };

  return (
    <div>
      <div
        style={{ backgroundColor: colorRed, width: '100px', height: '100px' }}
        onClick={swapColors}
      ></div>
      <div
        style={{ backgroundColor: colorBlue, width: '100px', height: '100px' }}
        onClick={swapColors}
      ></div>
    </div>
  );
}

export default App;
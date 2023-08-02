import React, { useState } from 'react';

const ColorChanger = () => {
  const colors = ['red','orange','blue','gray','brown','purple'];
  const [CurrentColor, setCurrentColor] = useState(0);

  const ButtonClick = () => {
    let nextColor;
    if (CurrentColor === colors.length - 1) {
      //  when we reach the last color in the array, loop back to the first color
      nextColor = 0;
    } else {
      nextColor = CurrentColor + 1;
    }
    setCurrentColor(nextColor);
  };

  const BackgroundColor = colors[CurrentColor];
  const ButtonColor = colors[(CurrentColor + 3) % colors.length]; 

  return (
    <div style={{ BackgroundColor: BackgroundColor, padding: '20px' }}>
      <h2>Click the button to change colors</h2>
      <button style={{ BackgroundColor:ButtonColor , color: 'white', padding: '20px', cursor: 'pointer' }} onClick={ButtonClick}>
        Change Colors
      </button>
    </div>
  );
};

export default ColorChanger;

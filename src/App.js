import React, { useState } from 'react';
import './ColorPicker.css';

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [buttonActivated, setButtonActivated] = useState(false);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setButtonActivated(true);
  };

  const handlePickButtonClick = () => {
    if (buttonActivated) {
      // Handle the pick button click action here
      // You can perform any action you want when the button is activated
    }
  };

  return (
    <div className="color-picker">
      <h1>Color Picker</h1>
      <div className="layer-x" style={{ backgroundColor: selectedColor }}>
        <div className="color-bar">
          {['red', 'green', 'blue', 'yellow', 'purple', 'pink', 'orange', 'brown', 'cyan', 'teal', 'gray', 'black'].map((color, index) => (
            <div key={index} className="color-option" style={{ backgroundColor: color }} onClick={() => handleColorClick(color)}></div>
          ))}
        </div>
        <button className={`pick-button ${buttonActivated ? 'activated' : ''}`} onClick={handlePickButtonClick}>Pick a color</button>
      </div>
    </div>
  );
};

export default ColorPicker;

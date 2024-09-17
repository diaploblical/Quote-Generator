import React, { useState, useEffect, createContext } from 'react';
import './App.css';
import './bootstrap/css/bootstrap.min.css';
import { colorSetter } from './components/functions';
import { hexToRgb } from './components/functions';
import QuoteBox from './components/QuoteBox'

export const ColorContext = createContext();

const App = () => {
  const [color, setColor] = useState("white");
  const hex = colorSetter();
  const rgbArray = hexToRgb(hex);
  useEffect(() => {
    if (rgbArray[0]*0.299 + rgbArray[1]*0.587 + rgbArray[2]*0.114 > 186) {
      document.documentElement.style.setProperty('--quote-box-bg-color', "black");
      document.documentElement.style.setProperty('--button-text-color', "black");
      setColor("black");
    } else {
      document.documentElement.style.setProperty('--quote-box-bg-color', "white");
      document.documentElement.style.setProperty('--button-text-color', "white");
      setColor("white");
    }
  }, [color])

  return(
    <div className="container">
      <ColorContext.Provider value={color}>
        <QuoteBox />
      </ColorContext.Provider>
    </div>
  );
}

export default App;
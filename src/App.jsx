import React, { useState, useEffect, createContext } from 'react';
import './App.css';
import './bootstrap/css/bootstrap.min.css';
import { colorSetter } from './functions';
import { hexToRgb } from './functions';
import QuoteBox from './components/QuoteBox'

export const ColorContext = createContext();

const App = () => {
  const [color, setColor] = useState("white");
  const hex = colorSetter();
  const rgbArray = hexToRgb(hex);
  useEffect(() => {
    if ((rgbArray[0]*0.2126)/255 + (rgbArray[1]*0.7152)/255 + (rgbArray[2]*0.722)/255 > 0.5) {
      document.documentElement.style.setProperty('--quote-box-bg-color', "black");
      document.documentElement.style.setProperty('--quote-box-text-color', "white");
      setColor("black");
    } else {
      document.documentElement.style.setProperty('--quote-box-bg-color', "white");
      document.documentElement.style.setProperty('--quote-box-text-color', "black");
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
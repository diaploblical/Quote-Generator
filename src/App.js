import React, {useLayoutEffect, useState} from 'react';
import './App.css';
import './bootstrap/css/bootstrap.min.css'
import QuoteBox from './components/QuoteBox'

const App = () => {
  const [colour, setColour] = useState("") 
  useLayoutEffect(() => {
    const colourArray = ["darkgray", "goldenrod", "dodgerblue", "lightslategray", "olivedrab", "teal"]
    const colourSelector = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const setBackgroundColour = () => {
      const docBody = document.querySelector("body")
      const quoteBoxDiv = document.getElementById("quote-box")
      docBody.style.backgroundColor = colour
      quoteBoxDiv.querySelectorAll("#quote-box > h1 h2")
      quoteBoxDiv.style.color = colour
    }
    setColour(colourArray[colourSelector(0, colourArray.length - 1)])
    setBackgroundColour()
  }, [colour])

  return(
    <div className="container">
      <QuoteBox colour={colour} />
    </div>
  );
}

export default App;

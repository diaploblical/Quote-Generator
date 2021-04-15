import React, {Component} from 'react';
import './App.css';
import './bootstrap/css/bootstrap.min.css'
import QuoteBox from './components/QuoteBox'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: ['darkgray', 'goldenrod', 'dodgerblue', 'lightslategray', 'olivedrab', 'teal']
    }
  }
  componentDidMount() {
    function colorSelector(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let stateColorArrayId = colorSelector(0, (this.state.colors.length - 1))
    const docBody = document.querySelector('body')
    const quoteBoxDiv = document.getElementById("quote-box")
    docBody.style.backgroundColor = this.state.colors[stateColorArrayId]
    quoteBoxDiv.querySelectorAll("#quote-box > h1 h2")
    quoteBoxDiv.style.color = this.state.colors[stateColorArrayId]
  }
  render() {
    return(
      <div className="container">
        <QuoteBox />
      </div>
    );
  } 
}

export default App;

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
    const quoteBoxDiv = document.getElementById("centered-box")
    quoteBoxDiv.querySelectorAll("#centered-box > h1 h2")
    document.querySelector('body').style.backgroundColor = this.state.colors[stateColorArrayId]
    quoteBoxDiv.style.color = this.state.colors[stateColorArrayId]
  }
  render() {
    return(
      <div className="container">
        <QuoteBox/>
      </div>
    );
  } 
}

export default App;

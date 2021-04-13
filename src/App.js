import React, {Component} from 'react';
import './App.css';
import './bootstrap/css/bootstrap.min.css'
import Quote from './components/Quote'

class App extends Component {
  render() {
    return(
      <div className="container">
        <Quote />
      </div>
    );
  } 
}

export default App;

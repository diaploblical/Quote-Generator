import React, {Component} from 'react'
import twitterLogo from '../assets/images/twitter-logo.svg'

class Buttons extends Component {
  componentDidUpdate() {
    let color = document.querySelector("body").style.backgroundColor
    const buttons = document.querySelectorAll(".custom-btn")
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = color
    }
  }
  render() {
    return(
      <div className="row">
        <div className="col-md-1">
          <a href={this.props.url} className="custom-btn" >
            <img id="twitter-logo" src={twitterLogo} width="20px" alt="Twitter Logo" />
          </a>
        </div>
        <div className="col-md-11">
          <button onClick={this.props.fetch} className="custom-btn float-end" id="test">New Quote</button>
        </div>
      </div>
    )
  }
}

export default Buttons
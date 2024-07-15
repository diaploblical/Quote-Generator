import React, {useLayoutEffect} from 'react'
import twitterLogo from '../assets/images/twitter-logo.svg'

const Buttons = (props) => {
  useLayoutEffect(() => {
    let colour = document.querySelector("body").style.backgroundColor
    const buttons = document.querySelectorAll(".custom-btn")
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = colour
    }
  })
  return(
    <div className="row">
      <div className="col-md-1">
        <a href={props.url} className="custom-btn" >
          <img id="twitter-logo" src={twitterLogo} width="20px" alt="Twitter Logo" />
        </a>
      </div>
      <div className="col-md-11">
        <button onClick={() => props.fetcher()} className="custom-btn float-end" id="test">New Quote</button>
      </div>
    </div>
  )
}

export default Buttons
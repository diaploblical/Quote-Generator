import React, { useContext } from 'react'
import { ColorContext } from '../App'
import twitterLogo from '../assets/images/twitter-logo.svg'
import twitterLogoBlack from '../assets/images/twitter-logo-black.svg'

const Buttons = (props) => {
  const color = useContext(ColorContext);
  return(
    <div className="row">
      <div className="col-md-1">
        <a href={props.url} className="custom-btn" >
          <img id="twitter-logo" src={color == "white" ? twitterLogo : twitterLogoBlack} width="20px" alt="Twitter Logo" />
        </a>
      </div>
      <div className="col-md-11">
        <button onClick={() => props.fetcher()} className="custom-btn float-end" id="test">New Quote</button>
      </div>
    </div>
  )
}

export default Buttons
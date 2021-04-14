import React, {Component} from 'react'
import QuoteText from './QuoteText'
import Buttons from './Buttons'

class QuoteBox extends Component {
  render() {
    return(
      <div className="container" id="centred-box">
        <div className="row">
          <div>
            <QuoteText />
          </div>
        </div>
        <div className="row">
          <div>
            <QuoteText />
          </div>
        </div>
        <div>
          <Buttons />
        </div>
      </div>
    )
  }
}

export default QuoteBox
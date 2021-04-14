import React, {Component} from 'react'
import QuoteText from './QuoteText'
import Buttons from './Buttons'

class QuoteBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: undefined,
      quoteAuthor: undefined
    }
  }
  async componentDidMount() {
    const api_call = await fetch('http://quotes.stormconsultancy.co.uk/random.json')
    const response = await api_call.json()
    console.log(response)
    this.setState({
      quote: response.quote,
      quoteAuthor: response.author
    })
  }
  render() {
    return(
      <div className="container" id="centred-box">
        <div className="row">
          <div>
            <QuoteText quote={this.state.quote}/>
          </div>
        </div>
        <div className="row">
          <div className="text-end">
            <QuoteText  quote={this.state.quoteAuthor}/>
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
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
  quoteFetch = async () => {
    const api_call = await fetch('http://quotes.stormconsultancy.co.uk/random.json')
    const response = await api_call.json()
    this.setState({
      quote: response.quote,
      quoteAuthor: response.author
    })
  }
  componentDidMount() {
    this.quoteFetch()
  }
  render() {
    return(
      <div className="container" id="quote-box">
        <div className="row">
          <div className="text-center">
            <QuoteText quote={this.state.quote}/>
          </div>
        </div>
        <div className="row">
          <div className="text-end">
            <QuoteText  quote={this.state.quoteAuthor}/>
          </div>
        </div>
        <div className="button-box">
          <Buttons click={this.quoteFetch}/>
        </div>
      </div>
    )
  }
}

export default QuoteBox
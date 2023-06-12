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
    const api_call = await fetch('https://api.api-ninjas.com/v1/quotes?category=computers')
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
            <QuoteText quote={this.state.quoteAuthor}/>
          </div>
        </div>
        <div className="button-box">
          <Buttons fetch={this.quoteFetch} url={"https://twitter.com/intent/tweet?text=\"" + this.state.quote + "\" - " + this.state.quoteAuthor} />
        </div>
      </div>
    )
  }
}

export default QuoteBox
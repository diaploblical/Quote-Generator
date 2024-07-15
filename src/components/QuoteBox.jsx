import React, {useEffect, useState} from 'react'
import Buttons from './Buttons'

const QuoteBox = (props) => {
  const [quote, setQuote] = useState("")
  const [quoteAuthor, setQuoteAuthor] = useState("")

  const apiUrl = "https://api.quotable.io/quotes/random"

  useEffect (() => {  
    quoteFetcher(apiUrl)
    console.log(quoteAuthor)
  }, [])

  const quoteFetcher = async (apiUrl) => {
    const apiCall = await fetch(apiUrl)
    const response = await apiCall.json()
    setQuote(response[0].content)
    setQuoteAuthor(response[0].author)
    
  }


  return(
    <div className="container" id="quote-box">
      <div className="row">
        <div className="text-center">
          <h1>{quote}</h1>
        </div>
      </div>
      <div className="row">
        <div className="text-end">
          <h1>{quoteAuthor}</h1>
        </div>
      </div>
      <div className="button-box">
        <Buttons fetcher={() => quoteFetcher(apiUrl)} url={"https://twitter.com/intent/tweet?text=\"" + quote + "\" - " + quoteAuthor} colour={props.colour} />
      </div>
    </div>
  )
}

export default QuoteBox
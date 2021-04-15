import twitterLogo from '../assets/images/twitter-logo.svg'

const Buttons = (props) => {
  return(
    <div className="row">
      <div className="col-md-1">
        <button className="btn btn-primary">
          <img id="twitter-logo" src={twitterLogo} width="20px" alt="Twitter Logo" />
        </button>
        
      </div>
      <div className="col-md-11">
        <button onClick={props.click} className="btn btn-primary float-end">New Quote</button>
      </div>
    </div>
  )
}

export default Buttons
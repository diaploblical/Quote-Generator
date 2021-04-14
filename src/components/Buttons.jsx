import React, {Component} from 'react'

class Buttons extends Component {
  render() {
    return(
      <div className="row">
        <div className="col-md-1">
          <button className="btn btn-primary">tee</button>
        </div>
        <div className="col-md-1">
          <button className="btn btn-primary">ttt</button>
        </div>
        <div className="col-md-10">
          <button className="btn btn-primary float-end">dfsfs</button>
        </div>
      </div>
    )
  }
}

export default Buttons
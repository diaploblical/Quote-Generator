import React, {Component} from 'react'

class Quote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      colors: ['red', 'blue', 'yellow', 'green', 'cyan', 'purple']
    }
  }
  componentDidMount() {
    function colorSelector(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let stateColorArrayId = colorSelector(0, (this.state.colors.length - 1))
    document.querySelector('body').style.backgroundColor = this.state.colors[stateColorArrayId]
  }

  render() {
    return(
      <div id="centered-box">
        <div className="row">
          <div className="col-md-5">
            <h1>Column 1</h1>
          </div>
          <div className="col-md-7">
            <h1>Column 2</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Quote
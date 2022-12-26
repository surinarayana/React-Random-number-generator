// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onClickGenerateRandomNumber = () => {
    this.setState({randomNumber: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading"> Random Number </h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <div>
            <button
              className="button"
              type="button"
              onClick={this.onClickGenerateRandomNumber}
            >
              Generate
            </button>
          </div>

          <p className="random-number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator

// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isTimeRunning: false, timeElapsedinseconds: 0}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }
  resettimer = () => {
    clearInterval(this.timerId)
    this.setState({isTimeRunning: false, timeElapsedinseconds: 0})
  }

  stoptimer = () => {
    clearInterval(this.timerId)
    this.setState({isTimeRunning: false})
  }
  updatetime = () => {
    this.setState(prevState => ({
      timeElapsedinseconds: prevState.timeElapsedinseconds + 1,
    }))
  }

  starttimer = () => {
    this.timerId = setInterval(this.updatetime, 1000)
    this.setState({isTimeRunning: true})
  }

  renderSeconds = () => {
    const {timeElapsedinseconds} = this.state
    const seconds = Math.floor(timeElapsedinseconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeElapsedinseconds} = this.state
    const minutes = Math.floor(timeElapsedinseconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimeRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="div">
        <h1>Stopwatch</h1>
        <div className="card">
          <div className="heading">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="watch"
            />
            <p>Timer</p>
          </div>
          <div>
            <h1 className="time">{time}</h1>
          </div>
          <div className="buttons">
            <button
              className="start"
              disabled={isTimeRunning}
              onClick={this.starttimer}
            >
              Start
            </button>
            <button className="stop" onClick={this.stoptimer}>
              Stop
            </button>
            <button className="reset" onClick={this.resettimer}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch

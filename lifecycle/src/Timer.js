import React, { Component } from 'react'

class Timer extends Component {
  constructor () {
    console.log('constructor timer')
    super()
    this.state = {
      time: 0
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps', this.props, nextProps)
  }

  // shouldComponentUpdate (nextProps, nextState) {
  //   console.log('shouldComponentUpdate', this.state, nextState)
  //   return true
  // }

  componentWillUpdate (nextProps, nextState) {
    console.log('componentWillUpdate', this.state, nextState)
    return true
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate', this.props, prevProps)
  }

  componentDidMount () {
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      })
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    console.log('render timer')
    return <div>Timer: {this.state.time}</div>
  }
}

Timer.defaultProps = {
  time: 0
}


export default Timer;
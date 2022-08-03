import { Component } from 'react'
import './Greeting.css'

class Greeting extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isGreeting: true
    }
  }
  greetingToggle = () => {
    this.setState({
      isGreeting: !this.state.isGreeting
    })
  }
  render () {
    const { name } = this.props
    const { isGreeting } = this.state
    return (
      <>
        <h1>
          {isGreeting ? 'Hello' : 'GoodBye'}, {name}!
        </h1>
        <button onClick={this.greetingToggle}>Toggle</button>
      </>
    )
  }
}
export default Greeting

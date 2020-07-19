import React, {Component} from 'react';

const App = () => (<Counter></Counter>)
// const DEFAULT_COUNT = 0
class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1})
  }

  handleMinusButton() {
    if (this.state.count === 0) {
      return
    }

    this.setState({count: this.state.count - 1})
  }

  render() {
    return (
      <>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={() => this.handleMinusButton()}>-1</button>
      </>
    )
  }
}

export default App;

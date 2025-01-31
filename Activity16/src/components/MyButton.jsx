import React, { Component } from 'react'

class MyButton extends Component {

  alertMessage(ev) {
    alert('Hello world!');
  }

  render() {
    return (
      <button type="button" onClick={this.alertMessage}>Click Me!</button>
    )
  }
}

class Block01 extends Component {

  render () {
    return (
      <div>
        <MyButton />
      </div>
    );
  }
}

export default Block01;
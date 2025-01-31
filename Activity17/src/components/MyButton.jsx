import React, { Component } from 'react'

class ShowTitle extends Component {

  alertMessage(ev) {
    alert('Hello world!');
  }

  render() {
    return (
      <button type="button" onClick={this.alertMessage}>{this.props.title}</button>
    )
  }
}

class Block01 extends Component {

  render () {
    return (
      <div>
        <ShowTitle title="Click me!" />
        <ShowTitle title="Click here!" />
        <ShowTitle title="Click there!" />
      </div>
    );
  }
}

export default Block01;
import React, { Component } from 'react'

class MyButton extends Component {
  render() {
    return (
      <button type="button">Click Me!</button>
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

// export default class MyButton extends Component {
//   render() {
//     return (
//       <button type="button">Click Me!</button>
//     )
//   }
// }

import React, { Component } from 'react'

export default class Todo extends Component {
  constructor(props) {
    super();
  }
  
  render() {
    const { complete, text } = this.props;

    const icon = complete ? "\u2714" : "\u2716"

    // if (edit) {
    //   return (
    //     <li>
    //       <input value={text} focus="focused"/>
    //     </li>
    //   );
    // }

    return (
      <li>
        <span>{text}</span>
        <span>{icon}</span>
      </li>
    );
  }
}

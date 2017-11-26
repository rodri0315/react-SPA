import React from "react";
import { Link } from 'react-router'


export default class Layout extends React.Component {
  navigate() {
    console.log(this.props);
    this.props.history.pushState(null,"/");
  }

  render() {
    return (
      <div>
        <h1>Killer News</h1>
        {this.props.children}
        <Link to="archives" class="btn btn-danger">Archives</Link>
        <Link to="settings"><button class="btn btn-success">Settings</button></Link>
        <button onClick={this.navigate.bind(this)}>Featured</button>
      </div>
    );
  }
}

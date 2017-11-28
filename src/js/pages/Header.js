import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header className="intro">
        {/*<!-- Intro Header -->*/}
        <div className="intro-body">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <h1 className="brand-heading">Grayscale</h1>
                <p className="intro-text">
                  A free, responsive, one page Bootstrap theme.
                  <br />Created by Start Bootstrap.
                </p>
                <a href="#about" className="btn btn-circle page-scroll">
                  <i className="fa fa-angle-double-down animated" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

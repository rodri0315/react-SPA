import React from "react";
import { Link } from "react-router";

import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import Header from "../pages/Header";

export default class Layout extends React.Component {
  navigate() {
    console.log(this.props);
    this.props.history.pushState(null, "/");
  }

  render() {
    const { history } = this.props;
    console.log(history.isActive("archives"));
    const { location } = this.props;
    const containerStyle = {
      marginTop: "160px"
    };
    return (
      <div>
        <Nav location={location} />
        <div id="about" className="container text-center">
            <div className="container" style={containerStyle}>
              <div className="row">
                <div className="col-lg-12">
                  <h1>KillerNews.net</h1>
                  {this.props.children}
                </div>
              </div>
            </div>
        </div>

        <Footer />
      </div>
    );
  }
}

import React, { Component } from 'react';
import {IndexLink, Link} from 'react-router';

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true,
      isTop: true,
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };
    
  handleScroll() {
    let isTop = window.scrollY < 100;
    if (isTop !== this.state.isTop) {
      this.setState({isTop})
    }

  };

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {

    const {location} = this.props;
    const {collapsed} = this.state;
    const featuredClass = location.pathname === "/" ? "active" : "";
    const favoritesClass = location.pathname.match(/^\/archives/) ? "active" : "";
    const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";
    const {isTop} = this.state;
    const scrollClass = isTop ? "" : "top-nav-collapse";

    
    return (
      <nav className={"navbar navbar-custom navbar-fixed-top " + scrollClass} role="navigation" id="navbar">
      {/* Navigation */}
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this)} data-target=".navbar-main-collapse">
                    Menu <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand page-scroll" href="#page-top">
                    <i className="fa fa-play-circle"></i> <span className="light">Start</span> Bootstrap
                </a>
            </div>

            {/* Collect the nav links, forms, and other content for toggling */}
            <div className={"navbar-collapse navbar-right navbar-main-collapse " + navClass}>
                <ul className="nav navbar-nav">
                    {/* Hidden li included to remove active class from about link when scrolled up past about section */}
                    <li className={featuredClass}>
                      <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Todos</IndexLink>
                    </li>
                    <li className={favoritesClass}>
                      <Link to="favorites" onClick={this.toggleCollapse.bind(this)}>Favorites</Link>
                    </li>
                    <li className={settingsClass}>
                      <Link to="settings" onClick={this.toggleCollapse.bind(this)}>Settings</Link>
                    </li>
                    <li className="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#about">About</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#download">Download</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            {/* /.navbar-collapse */}
        </div>
        {/* <!-- /.container --> */}
      </nav>
    );
  }
}

export default Nav;
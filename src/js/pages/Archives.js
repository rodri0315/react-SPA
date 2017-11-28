import React from "react";
import Article from '../components/Article';


export default class Archives extends React.Component {
  render() {
    // console.log(this.props);
    const {params}        = this.props;
    const {article}       = params;
    const {query}         = this.props.location;
    const {date, filter}  = query;
    
    const Articles = [
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Fake Article",
      "Partial Article",
      "American Article",
      "Mexican Article",
    ].map((title, i) => <Article key={i} title={title}/> );

    return (
    <div>
      <h2>Archives</h2>
      <h3>Article: {article} Date: {date}, Filter: {filter}</h3>
      <div className="row">{Articles}</div>
      
    
    </div>
    );
  }
}

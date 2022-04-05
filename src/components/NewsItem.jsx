import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageURL, linkToURL } = this.props;
    return (
      <div>
        <div className="card">
          <img src={imageURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{`${title}...`}</h5>
            <p className="card-text">{`${description}...`}</p>
            <a
              href={linkToURL}
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary btn-sm"
            >
              READ MORE
            </a>
          </div>
        </div>
      </div>
    );
  }
}

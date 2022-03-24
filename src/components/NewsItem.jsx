import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageURL, linkToURL } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={linkToURL}
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

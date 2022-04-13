import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class NewsItem extends Component {
  render() {
    let {
      title,
      description,
      author,
      publishTime,
      imageURL,
      linkToURL,
      source,
    } = this.props;
    return (
      <div>
        <div className="card">
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-warning"
            style={{ left: "90%", zindex: "1" }}
          >
            {source}
          </span>
          <img src={imageURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{`${title}...`}</h5>
            <p className="card-text">
              {description ? `${description}...` : "Description Not Available"}
            </p>
            <p className="card-text">
              <small className="text-muted">
                by {author ? author : "Unknown"} on{" "}
                {publishTime
                  ? new Date(publishTime).toGMTString()
                  : "Unknown Time"}
              </small>
            </p>
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

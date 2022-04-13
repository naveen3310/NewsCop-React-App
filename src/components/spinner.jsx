import React, { Component } from "react";
import loading from "./loading-spinner.gif";
export class Spinner extends Component {
  render() {
    return (
      // <div className="text-center">
      //   <img src={loading} alt="" />
      // </div>
      <div className="text-center">
        <div className="spinner-border text-warning" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    );
  }
}

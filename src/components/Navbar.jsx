import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }

  searchHandle = (e) => {
    this.setState({ search: e.target.value });
    console.log(e.target.value);
  };

  addClass = (e) => {
    const activeEle = document.querySelector(".active");
    activeEle.classList.remove("active");
    e.target.classList.add("active");
  };

  render() {
    let { getSearch } = this.props;
    let searchResult = (e) => {
      e.preventDefault();
      console.log(this.state.search);
      getSearch(this.state.search);
    };
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand text-warning" to="/">
              <small>NEWS</small>
              <strong className="mx-1 rounded text-white bg-primary">
                COP
              </strong>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item" onClick={this.addClass}>
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item" onClick={this.addClass}>
                  <Link
                    className="nav-link "
                    aria-current="page"
                    to="/business"
                  >
                    Business
                  </Link>
                </li>
                <li className="nav-item" onClick={this.addClass}>
                  <Link
                    className="nav-link "
                    aria-current="page"
                    to="/entertainment"
                  >
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item" onClick={this.addClass}>
                  <Link className="nav-link " aria-current="page" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item" onClick={this.addClass}>
                  <Link className="nav-link " aria-current="page" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item" onClick={this.addClass}>
                  <Link className="nav-link " aria-current="page" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item" onClick={this.addClass}>
                  <Link
                    className="nav-link "
                    aria-current="page"
                    to="/technology"
                  >
                    Technology
                  </Link>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  onChange={this.searchHandle}
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  onClick={searchResult}
                  className="btn btn-outline-warning"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

import "./App.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route, BrowserRouter } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      searchResultValue: "",
    };
  }
  searchResultHandle = (handle) => {
    console.log("this search is from app");
    console.log("this is app and result is : " + handle);
    this.setState({ searchResultValue: handle });
  };
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar getSearch={this.searchResultHandle} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="general"
                  category="general"
                  searchThis={this.state.searchResultValue}
                  subTitle="Trending News"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  category="business"
                  searchThis={this.state.searchResultValue}
                  subTitle="Business News"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="enterainment"
                  category="entertainment"
                  searchThis={this.state.searchResultValue}
                  subTitle="Entertainment News"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  category="health"
                  searchThis={this.state.searchResultValue}
                  subTitle="Health News"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  category="science"
                  searchThis={this.state.searchResultValue}
                  subTitle="Science News"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  category="sports"
                  searchThis={this.state.searchResultValue}
                  subTitle="Sports News"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  category="technology"
                  searchThis={this.state.searchResultValue}
                  subTitle="Technology News"
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

import "./App.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route, BrowserRouter } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="general"
                  category="general"
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
                  subTitle="Entertainment News"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News key="health" category="health" subTitle="Health News" />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  category="science"
                  subTitle="Science News"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News key="sports" category="sports" subTitle="Sports News" />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  category="technology"
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

import React, { Component } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Navbar from "./components/Navbar";
import News from "./components/News";
export default class App extends Component {
  pageSize = 11;
  // apiKey = process.env.REACT_APP_NEWS_API_KEY;
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route
              exact
              path="/Newsy/"
              element={
                <News
                  setProgress={this.setProgress}
                  key="general"
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                />
              }
            />

            <Route
              exact
              path="/Newsy/science"
              element={
                <News
                  setProgress={this.setProgress}
                  key="science"
                  pageSize={this.pageSize}
                  country="in"
                  category="science"
                />
              }
            />

            <Route
              exact
              path="/Newsy/business"
              element={
                <News
                  setProgress={this.setProgress}
                  key="business"
                  pageSize={this.pageSize}
                  country="in"
                  category="business"
                />
              }
            />

            <Route
              exact
              path="/Newsy/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  key="movie"
                  pageSize={this.pageSize}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/Newsy/sport"
              element={
                <News
                  setProgress={this.setProgress}
                  key=""
                  pageSize={this.pageSize}
                  country="in"
                  category="sport"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

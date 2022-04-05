import React, { Component } from "react";
import ReactDOM from "react-dom";
import NewsItem from "./NewsItem";
import URLImage from "./defaultImageURL";
import { Spinner } from "./spinner";

class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    this.setState({ loading: true });
    let URL = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=2a8cd9e807b04f53b310e84a709a63ff&page=1&pageSize=12`;
    let data = await fetch(URL);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, loading: false });
  }
  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 12)) {
    } else {
      this.setState({ loading: true });
      let URL = `https://newsapi.org/v2/top-headlines?country=in&category=${
        this.props.category
      }&apiKey=2a8cd9e807b04f53b310e84a709a63ff&page=${
        this.state.page + 1
      }&pageSize=12`;
      let data = await fetch(URL);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        totalResults: parsedData.articles,
        loading: false,
      });
    }
  };
  handlePreviousClick = async () => {
    this.setState({ loading: true });
    let URL = `https://newsapi.org/v2/top-headlines?country=in&category=${
      this.props.category
    }&apiKey=2a8cd9e807b04f53b310e84a709a63ff&page=${
      this.state.page - 1
    }&pageSize=12`;
    let data = await fetch(URL);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      totalResults: parsedData.articles,
      loading: false,
    });
  };

  render() {
    return (
      <div>
        <div className="container my-4">
          <p className="text-center bg-warning rounded display-5">
            {this.props.subTitle}
          </p>
          {this.state.loading && <Spinner />}
          <div className="row my-4">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 50) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 90)
                          : ""
                      }
                      imageURL={
                        element.urlToImage ? element.urlToImage : URLImage.image
                      }
                      linkToURL={element.url}
                    />
                  </div>
                );
              })}
          </div>
          <div className="d-flex justify-content-evenly">
            <button
              onClick={this.handlePreviousClick}
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
            >
              Previous
            </button>
            <button
              onClick={this.handleNextClick}
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalResults / 12)
              }
              type="button"
              className="btn btn-dark"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;

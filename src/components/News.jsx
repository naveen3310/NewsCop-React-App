import React, { Component } from "react";
import ReactDOM from "react-dom";
import NewsItem from "./NewsItem";
import URLImage from "./defaultImageURL";
import { Spinner } from "./spinner";

class News extends Component {
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      parsedDataOfApi: 0,
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = this.capitalizeFirstLetter(this.props.category);
  }

  async componentDidMount() {
    this.setState({ loading: true });
    let URL = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=2a8cd9e807b04f53b310e84a709a63ff&${this.state.page}&pageSize=12`;
    let data = await fetch(URL);
    let parsedData = await data.json();
    this.setState({
      parsedDataOfApi: parsedData,
      articles: parsedData.articles,
      loading: false,
    });
    console.log(parsedData.totalResults);
  }
  handleNextClick = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.parsedDataOfApi.totalResults / 12)
    ) {
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
        loading: false,
      });
      console.log(this.state.page);
      console.log(this.state.totalResults);
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
                      author={element.author}
                      publishTime={element.publishedAt}
                      source={element.source.name}
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
                this.state.page + 1 >
                Math.ceil(this.state.parsedDataOfApi.totalResults / 12)
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

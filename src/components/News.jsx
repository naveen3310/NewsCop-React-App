import React, { Component } from "react";
import NewsItem from "./NewsItem";
import URLImage from "./defaultImageURL";

class News extends Component {
  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  async componentDidMount() {
    let URL =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=2a8cd9e807b04f53b310e84a709a63ff";
    let data = await fetch(URL);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div>
        <div className="container my-4">
          <p className="text-success display-5">Trending News</p>

          <div className="row my-4">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageURL={
                      element.urlToImage ? element.urlToImage : URLImage.image
                    }
                    linkToURL={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default News;

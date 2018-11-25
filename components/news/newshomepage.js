import React, { Component, Fragment } from "react";
import Parser from "rss-parser";

export class NewsHPComponent extends Component {
  state = {
    rssposts: []
  };

  componentDidMount() {
    //this one move it backend server, fetching the news part
    let parser = new Parser();
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
    (async () => {
      let feed = await parser.parseURL(
        CORS_PROXY +
          "https://news.google.com/news/rss/headlines/section/topic/BUSINESS?ned=in&hl=en&gl=IN"
      );
      //   feed.items.forEach(item => {
      //     console.log(item);
      //   });
      this.setState({ rssposts: feed.items });
    })();
  }

  render() {
    return (
      <div>
        <h1 class="text-left h2">News</h1>
        <p className="small font-weight-normal">powered by Google News</p>
        <div class="row">
          {/* <div class="col-md-6">
            <div class="card mb-3">
              <img
                class="card-img-top"
                src=".../100px180/"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted font-weight-normal">
                    By Times Of India{", "}
                  </small>
                  <small class="text-muted font-weight-normal">
                    updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div> */}
          <div class="col-md-12">
            {this.state.rssposts.map(item => {
              return (
                <div class="card mb-3">
                  <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <div
                      class="card-text"
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default NewsHPComponent;

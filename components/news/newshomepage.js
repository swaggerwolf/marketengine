import React, { Component, Fragment } from "react";
import Parser from "rss-parser";
import NewsCollapsibleCard from "./newsDropdownTile";
export class NewsHPComponent extends Component {
  state = {
    rssposts: [],
    featuredPost: null
  };

  componentDidMount() {
    //this one move it to backend server, fetching the news part and create a News Store
    let parser = new Parser({
      customFields: {
        item: [["media:content", "media"]]
      }
    });
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
    (async () => {
      let feed = await parser.parseURL(
        CORS_PROXY + ""
        //"https://news.google.com/news/rss/headlines/section/topic/BUSINESS?ned=in&hl=en&gl=IN"
      );
      console.log(feed);
      const featuredPost = feed.items
        .filter(item => {
          return item.media !== undefined && item.media.$.url !== undefined;
        })
        .slice(0, 1);
      const allOtherPosts = feed.items.filter(item => {
        return featuredPost[0].guid !== item.guid;
      });
      console.log(featuredPost, allOtherPosts);
      this.setState({ rssposts: allOtherPosts, featuredPost });
    })();
  }

  render() {
    const featuredPostDom =
      this.state.featuredPost &&
      this.state.featuredPost.map(item => {
        return (
          <div className="card mb-3 h-100">
            <img
              className="card-img-top"
              src={item.media.$.url.replace("w150-h150", "w400-h400")}
              alt="Featured Post banner Image"
            />
            <div className="card-body">
              <h5 className="card-title mt-2">{item.title}</h5>
              <p className="card-text">
                <small className="text-muted font-weight-normal">
                  {item.isoDate}
                </small>
              </p>
            </div>
          </div>
        );
      });

    const otherPostsDom =
      this.state.rssposts &&
      this.state.rssposts.slice(0, 4).map((item, index) => {
        return (
          <div className={"card" + (index !== 3 ? " mb-3" : "")}>
            <div className="card-body">
              <h5 className="card-title mb-0">{item.title}</h5>
              <p className="card-text">
                <small className="text-muted font-weight-normal">
                  {item.isoDate}
                </small>
              </p>
            </div>
          </div>
        );
      });
    return (
      <div className="row">
        <h2 className="text-left h1 font-weight-normal d-block w-100">News</h2>
        <p className="small font-weight-normal d-block ml-1 w-100">
          powered by Google News
        </p>
        <div className="row">
          <div className="col-md-6 pr-0">{featuredPostDom}</div>
          <div className="col-md-6">{otherPostsDom}</div>
        </div>
        <div className="row mt-2 w-100">
          <p className="w-100 text-right">Read More >></p>
        </div>
      </div>
    );
  }
}

export default NewsHPComponent;

import React, { Component, Fragment } from "react";
import MarketCard from "./marketCard";
export class MarketsHPComponent extends Component {
  state = {
    region: "in"
  };

  updateRegion = (region, event) => {
    event.preventDefault();
    this.setState({ region });
  };

  componentDidMount() {}

  render() {
    console.log(this.state.region);
    return (
      <div className="row mb-5">
        <div className="row w-100">
          <div className="col-md-5">
            <h2 className="text-left font-weight-normal h1">Markets</h2>
            <p className="small font-weight-normal ml-1 d-block w-100">
              Are you ready to move the markets Mr. Operator ?
            </p>
          </div>
          <div className="col-md-7">
            <ul
              className="nav nav-pills mb-3 mt-1"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className={
                    "btn font-weight-normal nav-link mr-2" +
                    (this.state.region === "in"
                      ? " active bg-dark"
                      : " btn-outline-secondary")
                  }
                  id="pills-home-tab"
                  data-toggle="pill"
                  href=""
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                  onClick={event => {
                    this.updateRegion("in", event);
                  }}
                >
                  India
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    "btn font-weight-normal nav-link mr-2" +
                    (this.state.region === "us"
                      ? " active bg-dark"
                      : " btn-outline-secondary")
                  }
                  id="pills-profile-tab"
                  data-toggle="pill"
                  href=""
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                  onClick={event => {
                    this.updateRegion("us", event);
                  }}
                >
                  US
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    "btn font-weight-normal nav-link mr-2" +
                    (this.state.region === "eu"
                      ? " active bg-dark"
                      : " btn-outline-secondary")
                  }
                  id="pills-contact-tab"
                  data-toggle="pill"
                  href=""
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                  onClick={event => {
                    this.updateRegion("eu", event);
                  }}
                >
                  Europe
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    "btn font-weight-normal nav-link mr-2" +
                    (this.state.region === "as"
                      ? " active bg-dark"
                      : " btn-outline-secondary")
                  }
                  id="pills-gaan-tab"
                  data-toggle="pill"
                  href=""
                  role="tab"
                  aria-controls="pills-gaan"
                  aria-selected="true"
                  onClick={event => {
                    this.updateRegion("as", event);
                  }}
                >
                  Other Asian Countries
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container">
          <div className="tab-content" id="pills-tabContent">
            <div
              className={
                "tab-pane fade" +
                (this.state.region === "in" ? " show active" : "")
              }
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="row">
                <div className="col-md-4">
                  <MarketCard
                    scrip="Nifty"
                    price="10500"
                    changeInt="+100"
                    changePercent="5"
                  />
                  <MarketCard
                    scrip="Nifty Bank"
                    price="26500"
                    changeInt="+300"
                    changePercent="2"
                  />
                  <MarketCard
                    scrip="Sensex"
                    price="35000"
                    changeInt="+400"
                    changePercent="8"
                  />
                  <MarketCard
                    scrip="Nifty IT"
                    price="1050"
                    changeInt="-100"
                    changePercent="2"
                  />
                </div>
                <div className="col-md-8" />
              </div>
            </div>
            <div
              className={
                "tab-pane fade" +
                (this.state.region === "us" ? " show active" : "")
              }
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              US Markets
            </div>
            <div
              className={
                "tab-pane fade" +
                (this.state.region === "eu" ? " show active" : "")
              }
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              European Markets
            </div>
            <div
              className={
                "tab-pane fade" +
                (this.state.region === "as" ? " show active" : "")
              }
              id="pills-gaan"
              role="tabpanel"
              aria-labelledby="pills-gaan-tab"
            >
              Other Asian Markets
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MarketsHPComponent;

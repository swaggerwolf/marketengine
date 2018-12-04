import React, { Component, Fragment } from "react";

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
      <div className="row">
        <div className="row w-100">
          <div className="col-md-5">
            <h1 className="text-left font-weight-normal h2">Markets</h1>
            <p className="small font-weight-normal d-block w-100">
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
                      ? " active bg-up"
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
                      ? " active bg-up"
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
                      ? " active bg-up"
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
                      ? " active bg-up"
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
                <div className="col-md-3">
                  <div class="card">
                    <div class="card-body mb-0">
                      <div className="row">
                        <div className="col-6">
                          <h5 className="mb-0">Nifty</h5>
                        </div>
                        <div className="col-6">
                          <p className="mb-0">12000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6" />
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

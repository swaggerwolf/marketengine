import React, { Component, Fragment } from "react";

export class NewsCollapsibleCard extends Component {
  state = {
    open: false
  };

  toggleCard = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <div className="card mb-3" onClick={this.toggleCard}>
        <div className="card-body">
          <div className="row">
            <div className="col-11">
              <h5 className="card-title mb-0">{this.props.title}</h5>
            </div>
            <div className="col-1 text-center">
              <i
                className={
                  "fa centerDivToParent " +
                  (this.state.open
                    ? " fa-chevron-circle-up"
                    : " fa-chevron-circle-down")
                }
                aria-hidden="true"
              />
            </div>
          </div>
          <div
            className={
              "card-text mt-2" +
              (this.state.open ? " collapse show" : " collapse")
            }
            dangerouslySetInnerHTML={{ __html: this.props.content }}
          />
        </div>
      </div>
    );
  }
}

export default NewsCollapsibleCard;

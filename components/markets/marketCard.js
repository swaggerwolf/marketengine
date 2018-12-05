import React from "react";

const MarketsCard = props => {
  return (
    <div class="card btn-outline-dark mb-3">
      <div class="card-body mb-0 p-3">
        <div className="row">
          <div className="col-5 pr-0 m-auto">
            <p className="mb-0 font-weight-bold d-inline">{props.scrip}</p>
          </div>
          <div className="col-1 p-0 text-right m-auto">
            <div className="text-down">
              <i
                class="fa fa-chevron-down directionArrow bounceAlpha1"
                aria-hidden="true"
              />
              <i
                class="fa fa-chevron-down directionArrow bounceAlpha2"
                style={{ transform: "translateY(-10px)" }}
                aria-hidden="true"
              />
            </div>
          </div>
          <div className="col-6 pl-0 text-center m-auto">
            <p className="mb-0 ml-1 d-inline font-weight-bold">{props.price}</p>
            <small className="ml-2 d-inline font-weight-bold">
              {props.changeInt}
            </small>
            <small className="ml-2 d-inline font-weight-bold">
              {props.changePercent + "%"}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketsCard;

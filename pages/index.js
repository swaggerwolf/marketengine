import Header from "../components/header/header";
import { Fragment } from "react";
import NewsComponent from "../components/news/newshomepage";
import MarketsComponent from "../components/markets/marketshomepage";
export default () => {
  return (
    <Fragment>
      <Header />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-8">
            <MarketsComponent />
            <NewsComponent />
          </div>
          <div className="col-md-2" />
        </div>
      </div>
    </Fragment>
  );
};

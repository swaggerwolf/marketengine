import Header from "../components/header/header";
import { Fragment } from "react";
import NewsComponent from "../components/news/newshomepage";
export default () => {
  return (
    <Fragment>
      <Header />

      <div class="container-fluid">
        <div class="row">
          <div class="col-md-2" />
          <div class="col-md-8">
            <NewsComponent />
          </div>
          <div class="col-md-2" />
        </div>
      </div>
    </Fragment>
  );
};

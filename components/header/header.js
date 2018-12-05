import Link from "next/link";
import Head from "next/head";
import Fragment from "react";

const Header = () => (
  <div>
    <Head>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="/static/css/shards.css" />
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
    </Head>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <img
          src="/static/images/demo/shards-logo.svg"
          alt="Example Navbar 1"
          className="mr-2"
          height="30"
        />
        <a className="navbar-brand" href="#">
          Raging Bull
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown-1"
          aria-controls="navbarNavDropdown-1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown-1">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Markets
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                News
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Scanner
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Calculator
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href=""
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Design
                </a>
                <a className="dropdown-item" href="#">
                  Development
                </a>
                <a className="dropdown-item" href="#">
                  Marketing
                </a>
              </div>
            </li>
          </ul>

          <ul className="navbar-nav text-white">
            <li className="nav-item">
              NIFTY{" "}
              <span className="bg-up rounded p-1">
                10500 <span className="small">0.5%</span>
              </span>
              &nbsp;&nbsp;
            </li>
            <li className="nav-item">
              SENSEX{" "}
              <span className="bg-down rounded p-1">
                35000 <span className="small">0.5%</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Header;

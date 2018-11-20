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
      <link rel="stylesheet" href="css/shards.min.css" />
    </Head>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <img
        src="images/demo/shards-logo.svg"
        alt="Example Navbar 1"
        className="mr-2"
        height="30"
      />
      <a className="navbar-brand" href="#">
        Shards
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
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="https://designrevision.com"
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

        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fa fa-twitter" />
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fa fa-facebook" />
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fa fa-linkedin" />
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fa fa-github" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Header;

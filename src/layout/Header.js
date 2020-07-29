import React from "react";

const Header = () => {
  return (
    <header className="main-head">
      <nav className="navbar navbar-b  navbar-expand-lg" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll" href="/">
            <img src="img/logo.png" alt="Logo" />
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
          <div className="navbar-collapse collapse  " id="navbarDefault">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link js-scroll " href="/how-it-work">
                  How it works
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link js-scroll" href="/about-us">
                  About us
                </a>
              </li>
              <li className="nav-item signin">
                <a className="nav-link js-scroll " href="/signin">
                  Sign in
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="# "
                  className="nav-link js-scroll"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  Apply now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

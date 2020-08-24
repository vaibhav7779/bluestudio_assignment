import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Classlist from "./Components/Classlist";

function App() {
  return (
    <div class="App">
      <div >
        <nav
          class="navbar bd-navbar navbar has-shadow is-spaced is-light is-fluid conatiner"
          role="navigation"
          aria-label="main navigation"
        >
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item" href="https://bulma.io">
                <img
                  src="https://dtsvkkjw40x57.cloudfront.net/198xnull/6550/uploads/b1cae72d-77bc-4299-ba87-77a25d4803e9.png"
                  width="250"
                  height="37"
                />
              </a>

              <a
                role="button"
                class="navbar-b
     urger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu is-vcentered">
              <div class="navbar-end">
                <a class="navbar-item navlink">HOME</a>

                <a class="navbar-item navlink">WATCH NOW</a>

                <a class="navbar-item navlink">LIVE</a>

                <a class="navbar-item navlink">KITS</a>

                <a class="navbar-item navlink">COACHING</a>

                <a class="navbar-item navlink">SIGN IN</a>

                <a class="navbar-item navlink">CONTEST!</a>
              </div>
            </div>
          </div>
        </nav>
        <div class="sticky container">


        </div>
        <main id="page">
    <div class="page">
     <Classlist />
      </div>
      </main>

        <div class="footer">
          <div class="container">
            <div class="row">
              <div class="col-md-3 footer--copyright">
                Copyright © Blue Studios.io, Inc. 2020
              </div>
              <div class="col-md-6 footer--links">
                <a
                  href="https://www.bluestudios.io/about-us"
                  class="footer--link py-2 d-none d-md-inline-block"
                >
                  About
                </a>

                <a
                  href="/pages/choose-subscription"
                  class="footer--link py-2 d-none d-md-inline-block"
                >
                  Free Trial
                </a>

                <a
                  href="https://try.bluestudios.io/rewards/"
                  class="footer--link py-2 d-none d-md-inline-block"
                >
                  Rewards!
                </a>

                <a
                  href="https://www.bluestudios.io/give-a-gift"
                  class="footer--link py-2 d-none d-md-inline-block"
                >
                  Give a Gift
                </a>

                <a
                  href="https://bluestudios.crunch.help/faqs"
                  class="footer--link py-2 d-none d-md-inline-block"
                >
                  FAQs
                </a>

                <a
                  href="https://bluestudios.crunch.help"
                  class="footer--link py-2 d-none d-md-inline-block"
                >
                  Help Center
                </a>

                <a
                  href="//www.bluestudios.io/terms-of-service"
                  class="footer--link py-2 d-none d-md-inline-block"
                >
                  Terms of Service
                </a>

                <a
                  href="http://www.bluestudios.io/privacy-policy"
                  class="footer--link py-2 d-none d-md-inline-block"
                >
                  Privacy Policy
                </a>
              </div>

              <div class="col-md-3">
                <div class="footer--social">
                  <a
                    href="https://www.instagram.com/bluestudios_io/"
                    target="_blank"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>

                  <a
                    href="https://www.facebook.com/bluestudiosio"
                    target="_blank"
                  >
                    <i class="fab fa-facebook-square"></i>
                  </a>

                  <a href="https://twitter.com/BlueStudios_io" target="_blank">
                    <i class="fab fa-twitter-square"></i>
                  </a>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

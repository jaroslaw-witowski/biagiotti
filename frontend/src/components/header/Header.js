import PropTypes from "prop-types"
import React from "react"
import logoDark from "../../images/logo_dark.png"
import logo from "../../images/logo_white.png"
import heart from "../../images/iconmonstr-heart-thin.svg"
import searchicon from "../../images/search-icon.svg"
import shoppingBag from "../../images/shopping-bag-icon.svg"
import menu from "../../images/menu-icon.svg"
import Link from 'gatsby';

const left = ["Home", "Pages", "Blog"]
const right = ["Shop", "portfolio", "contact"]

const changeHeaderHandler = () => {
    console.log('hoho');
};

const Header = () => (
    
  <header id="header">
    <div className="header-position-left">
      <a className="header-position-left-widget__wishlist" href="./wishlist">
        <img
          className="header-position-left-widget__wishlist-icon"
          src={heart}
        />
        Wishlist
      </a>
      <nav className="header-position-left-navigation">
        <ul className="header-menu-navigation-list navigation-left-side">
          {left.map(e => {
            return (
              <li className={`navigation-menu-list-element element-${e}`}>
                <a className="navigation-menu-list-element-link" href="./">
                  {e.toUpperCase()}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
    <div className="header-position-center">
      <img className="logo" src={logoDark} alt="logo" />
    </div>
    <div className="header-position-right">
      <nav className="header-position-right-navigation">
        <ul className="header-menu-navigation-list navigation-right-side">
          {right.map(e => {
            return (
              <li className={`navigation-menu-list-element element-${e}`}>
                <a className="navigation-menu-list-element-link" href="./">
                  {e.toUpperCase()}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
      <div className="header-position-right-widget">
      <button onClick={changeHeaderHandler} className="header-position-right-searchbar-button">
        <img className="header-position-right-searchbar-icon" src={searchicon} />
        </button>
        <div className="header-position-right-widget__shoppingCart">
          <a itemprop="url" className="" href="./cart">
            <img
              className="header-position-right-shoppingBag"
              src={shoppingBag}
            />
            <span className="header-position-right-shoppingBag__indicator">
              0
            </span>
          </a>
        </div>
        <img className="header-position-right-menu" src={menu} />
      </div>
    </div>
  </header>
)

export default Header

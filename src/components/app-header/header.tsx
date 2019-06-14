import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import './header.css';
import { Link } from 'react-router-dom'

class header extends Component<any>  {

  render() {

    return (
      <Auxi >
        <header className="  em-c-header em-c-header--condensed customHeaderWhiteBackground" role="banner">
          <div className=" em-c-header__inner">
            <div className="em-c-header__body">
              <div className="em-c-header__title-container">
                <h2 className="em-c-header__title">                  <Link to="/" className=" em-u-clickable custom-heading-5 em-c-header__title-link custom-text-color-black">Data</Link>
                </h2>

              </div>

              <button className="em-c-btn em-c-btn--small em-c-btn--inverted em-c-header__nav-btn em-js-nav-trigger">
                <div className="em-c-btn__inner">
                  <span className="em-c-btn__text custom-text-color-black em-js-btn-label">Menu</span>
                </div>
              </button>

              <div className="custom-header em-c-header__nav-container em-js-nav-panel">
                <nav id="nav" className="em-c-primary-nav" role="navigation">

                  <ul className="em-c-primary-nav__list">

                    <li className="em-c-primary-nav__item ">

                      <Link to="/" className="custom-paragraph em-u-clickable em-c-primary-nav__link custom-text-color-black em-c-primary-nav__link--has-children em-js-nav-dropdown-trigger">

                        Quick Links</Link>

                      <ul className="em-c-primary-nav__sublist em-js-nav-dropdown ">
                        <li className="em-c-primary-nav__subitem">
                          <Link to="/" className="custom-paragraph em-u-clickable em-c-primary-nav__link custom-text-color-black em-c-primary-nav__link--has-children em-js-nav-dropdown-trigger">

                            Subnav item
                            </Link>
                        </li>
                        <li className="em-c-primary-nav__subitem"> 
                        <Link to="/" className="custom-paragraph em-u-clickable em-c-primary-nav__link custom-text-color-black em-c-primary-nav__link--has-children em-js-nav-dropdown-trigger">

                          Subnav item
                          </Link>
                        </li>
                        <li className="em-c-primary-nav__subitem"> 
                          <Link to="/" className="custom-paragraph em-u-clickable em-c-primary-nav__link custom-text-color-black em-c-primary-nav__link--has-children em-js-nav-dropdown-trigger">

                          Subnav item
                          </Link>
                        </li>
                        <li className="em-c-primary-nav__subitem">   
                            <Link to="/" className="custom-paragraph em-u-clickable em-c-primary-nav__link custom-text-color-black em-c-primary-nav__link--has-children em-js-nav-dropdown-trigger">

                          Subnav item
                            </Link>
                        </li>
                      </ul>
                    </li>


                    <li className="custom-paragraph em-c-primary-nav__item ">
                      <Link to="/" className="custom-paragraph em-u-clickable em-c-primary-nav__link custom-text-color-black ">

                        a.Community
          </Link>
                    </li>

                    <li className="custom-paragraph em-c-primary-nav__item ">
                      <Link to="/" className=" custom-paragraph em-u-clickable em-c-primary-nav__link custom-text-color-black ">

                        Services
          </Link>
                    </li>

                    <li className="custom-paragraph em-c-primary-nav__item ">
                      <Link to="/blog" className="custom-paragraph em-u-clickable em-c-primary-nav__link custom-text-color-black ">

                        Blog
          </Link>
                    </li>

                    <li className="custom-paragraph em-c-primary-nav__item ">

                      <Link to="/about" className="custom-paragraph em-u-clickable em-c-primary-nav__link custom-text-color-black  ">About</Link>

                    </li>

                    <li className="custom-paragraph em-c-primary-nav__item ">
                      <Link to="/" className="custom-paragraph em-u-clickable em-c-primary-nav__link custom-text-color-black ">
                        <img src="https://emunity.blob.core.windows.net/unity/fpo_avatar.png" alt="Alt Text" className="em-c-avatar em-c-avatar" /> Hi, Jennifer
        
              </Link>
                    </li>


                  </ul>
                </nav>
              </div>

            </div>
          </div>
        </header>
      </Auxi>
    )
  }

}

export default header;
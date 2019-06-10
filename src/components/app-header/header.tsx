import React from 'react';
import Auxi from '../../hoc/Auxi';
import './header.css';

const header = () => {
    return (
        <Auxi>
            <header className="em-c-header em-c-header--condensed customHeaderWhiteBackground" role="banner">
            <div className="em-l-container em-c-header__inner">
            <div className="em-c-header__body">
            <div className="em-c-header__title-container">
        <h2 className="em-c-header__title">
            <a href="/src/container/Dashboard/dashboard.tsx" rel="home" className="custom-heading-5 em-c-header__title-link custom-text-color-black">Data</a></h2>
      </div>

      <button className="em-c-btn em-c-btn--small em-c-btn--inverted em-c-header__nav-btn em-js-nav-trigger">
        <div className="em-c-btn__inner">
          {/* <svg className="em-c-btn__icon em-js-btn-icon" data-em-btn-toggle-text="Close" data-em-icon-path="../../images/em-icons.svg">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="../../images/em-icons.svg#icon-menu"></use>
          </svg>
          <svg class="em-c-btn__icon em-u-is-hidden em-js-btn-swap-icon" data-em-icon-path="../../images/em-icons.svg">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="../../images/em-icons.svg#icon-x"></use>
          </svg> */}
          <span className="em-c-btn__text custom-text-color-black em-js-btn-label">Menu</span>
        </div>
      </button>
      
      <div className="custom-header em-c-header__nav-container em-js-nav-panel">
        <nav id="nav" className="em-c-primary-nav" role="navigation">
            
          <ul className="em-c-primary-nav__list">

            <li className="em-c-primary-nav__item ">
              <a href="/src/container/Dashboard/dashboard.tsx" className="custom-paragraph em-c-primary-nav__link custom-text-color-black em-c-primary-nav__link--has-children em-js-nav-dropdown-trigger">
				
								Quick Links
				
				
								{/* <svg class="em-c-icon em-c-primary-nav__icon">
					            	<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="../../images/em-icons.svg#icon-caret-down"></use>
					          	</svg> */}
							</a>
              <ul className="em-c-primary-nav__sublist em-js-nav-dropdown ">
                <li className="em-c-primary-nav__subitem">
                  <a href="/src/container/Dashboard/dashboard.tsx" className="em-c-primary-nav__sublink">Subnav item</a>
                </li>
                <li className="em-c-primary-nav__subitem">
                  <a href="/src/container/Dashboard/dashboard.tsx" className="em-c-primary-nav__sublink">Subnav item</a>
                </li>
                <li className="em-c-primary-nav__subitem">
                  <a href="/src/container/Dashboard/dashboard.tsx" className="em-c-primary-nav__sublink">Subnav item</a>
                </li>
                <li className="em-c-primary-nav__subitem">
                  <a href="/src/container/Dashboard/dashboard.tsx" className="em-c-primary-nav__sublink">Subnav item</a>
                </li>
              </ul>
            </li>


            <li className="custom-paragraph em-c-primary-nav__item ">
              <a href="/src/container/Dashboard/dashboard.tsx" className=" em-c-primary-nav__link custom-text-color-black em-is-current ">
				
								a.Community
            </a>
            </li>

            <li className="custom-paragraph em-c-primary-nav__item ">
              <a href="/src/container/Dashboard/dashboard.tsx" className=" em-c-primary-nav__link custom-text-color-black em-is-current ">
				
								Services
            </a>
            </li>

            <li className="custom-paragraph em-c-primary-nav__item ">
              <a href="/src/container/Dashboard/dashboard.tsx" className="em-c-primary-nav__link custom-text-color-black em-is-current ">
				
								Blog
            </a>
            </li>

            <li className="custom-paragraph em-c-primary-nav__item ">
              <a href="/src/container/Dashboard/dashboard.tsx" className="em-c-primary-nav__link custom-text-color-black em-is-current ">
				
								About
            </a>
            </li>

            <li className="custom-paragraph em-c-primary-nav__item ">
              <a href="/src/container/Dashboard/dashboard.tsx" className="em-c-primary-nav__link custom-text-color-black em-is-current ">
				
								Hi, Jennifer
            </a>
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

export default header;
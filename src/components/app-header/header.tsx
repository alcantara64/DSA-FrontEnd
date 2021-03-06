import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import './header.css';
import { Link } from 'react-router-dom';
import {Config} from '../../Config';
import user_profile from './../../assets/images/user_profile.png';


class header extends Component<IheaderProps>  {
  componentDidMount(){
    console.log(this.props, 'Props in the haeder')
  }

  render() {

    return (
      <Auxi >
        <header className="header-width em-c-header em-c-header--condensed customHeaderWhiteBackground" role="banner">
          <div className=" em-c-header__inner">
            <div className="em-c-header__body">
              <div className="em-c-header__title-container">
                <h2 className="em-c-header__title">                  
                <Link to="/" className=" em-u-clickable custom-heading-5 ">Data</Link>
                </h2>

              </div>

              <button className="em-c-btn em-c-btn--small em-c-btn--inverted em-c-header__nav-btn em-js-nav-trigger">
                <div className="em-c-btn__inner">
                  <span className="em-c-btn__text -black em-js-btn-label">Menu</span>
                </div>
              </button>

              <div className=" custom-header-margin em-c-header__nav-container em-js-nav-panel">
                <nav id="nav" className="em-c-primary-nav" role="navigation">

                  <ul className="em-c-primary-nav__list">

                  <li className="em-c-primary-nav__item ">
              <a href="#" className="custom-paragraph em-u-clickable em-c-primary-nav__link  em-c-primary-nav__link--has-children em-js-nav-dropdown-trigger">
				
              Quick Links
							</a>
              <ul className="em-c-primary-nav__sublist em-js-nav-dropdown em-u-text-align-left">
                <li className="em-c-primary-nav__subitem">
                <a  href="http://goto/python" target="_blank" rel="noopener noreferrer"   className="custom-paragraph em-c-primary-nav__sublink">Goto/python</a>
              </li>
                <li className="em-c-primary-nav__subitem">
                <a  href="http://goto/pec" target="_blank" rel="noopener noreferrer"   className="custom-paragraph em-c-primary-nav__sublink">Goto/pec</a>

                </li>
                <li className="em-c-primary-nav__subitem">
                <a  href="http://goto/DataDash" target="_blank" rel="noopener noreferrer"   className="custom-paragraph em-c-primary-nav__sublink">Goto/DataDash</a>
                </li>
              </ul>
            </li>
            <li className="custom-paragraph em-c-primary-nav__item ">
<a href="http://goto/acommunity" target="_blank" rel="noopener noreferrer" className="custom-paragraph em-u-clickable em-c-primary-nav__link ">

  a.Community
</a>
</li>
                    




<li className="custom-paragraph em-c-primary-nav__item ">
<Link to="/services" className=" custom-paragraph em-u-clickable em-c-primary-nav__link ">

  Services
</Link>
</li>

<li className="custom-paragraph em-c-primary-nav__item ">
<Link to="/blog" className="custom-paragraph em-u-clickable em-c-primary-nav__link ">

  Blog
</Link>
</li>

   

                    <li className="custom-paragraph em-c-primary-nav__item ">

                      <Link to="/about" className="custom-paragraph em-u-clickable em-c-primary-nav__link  ">About</Link>

                    </li>
                    {Config.isProd && this.props.displayName ? <li className="custom-paragraph em-c-primary-nav__item ">
                      <Link to="/userInfo" className="custom-paragraph em-u-clickable em-c-primary-nav__link  ">
                       
                        <img src={user_profile} alt="Alt Text" className="custom-photo-icon em-c-avatar em-c-avatar" /> Hi, {this.props.displayName.split(" ")[0]}
        
              </Link>
                    </li>: ''
                   }
                    


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

 interface IheaderProps{
  user? : string;
  displayName: string;

}
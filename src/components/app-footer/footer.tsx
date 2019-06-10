import React from 'react';
import Auxi from '../../hoc/Auxi';
import './footer.css';

const footer = () => {
    return (
        <Auxi>
            
<footer  className="em-c-footer " role="contentinfo">

  <div className="em-l-container">
    <div className="em-c-footer__inner">
      <ul className="em-c-multicolumn-nav " role="navigation">
        <li className="em-c-multicolumn-nav__item em-u-text-align-left customm-auto-width">
          <div >
            <div className="about-site custom-paragraph">
            Question about the site?
            </div>
            <div className="about-site custom-link">
              Contact the webmaster
            </div >
            
          </div>
        
        </li>
      </ul>
      <svg className="em-c-logo" xmlns="http://www.w3.org/2000/svg" viewBox="63 150.1 234 59.8" enableBackground="new 63 150.1 234 59.8">
        <path d="M145.7 156.5c-3.3 0-5 1.7-5.6 2.1v-1.5h-4.5v18.2h5v-10.1c0-2.6 1.4-4 3.5-4 2.2 0 3.5 1.5 3.5 4v10.1h5v-11.5c0-4.5-3.1-7.3-6.9-7.3zM196.5 156.5c-5.6 0-9.9 4.4-9.9 9.7 0 5.3 4.3 9.7 9.9 9.7 5.6 0 9.9-4.4 9.9-9.7 0-5.3-4.2-9.7-9.9-9.7zm0 14.3c-2.7 0-4.5-2.1-4.5-4.6 0-2.5 1.9-4.6 4.5-4.6 2.7 0 4.5 2.1 4.5 4.6.2 2.5-1.7 4.6-4.5 4.6zM122.5 156.5c-5.6 0-9.9 4.4-9.9 9.7 0 5.3 4.3 9.7 9.9 9.7 5.6 0 9.9-4.4 9.9-9.7 0-5.3-4.3-9.7-9.9-9.7zm0 14.3c-2.6 0-4.5-2.1-4.5-4.6 0-2.5 1.9-4.6 4.5-4.6 2.7 0 4.5 2.1 4.5 4.6 0 2.5-1.8 4.6-4.5 4.6zM232.6 157.1h5v18.3h-5zM232.6 150.1h5v4.5h-5zM242.6 150.1h5v25.2h-5zM220.5 156.5c-3.7 0-5.6 1.7-5.6 1.9v-8.3h-5v25.2h5v.1-1.5c.4.3 2 1.8 5.6 1.8 4.6 0 9-4.2 9-9.7 0-5.3-4.1-9.5-9-9.5zm-1.3 14.2c-2.6 0-4.6-2-4.6-4.6 0-2.6 2-4.6 4.6-4.6s4.6 2 4.6 4.6c0 2.6-2 4.6-4.6 4.6zM114.3 157.1h-6.4l-8.1 10.3-3.6-3.3 9.1-11.5h-6.3l-6.2 8-3.3-3.5h-7.7l7.7 7.5-8.6 10.7h6.4l5.6-7.3 3.5 3.9-8.1 10.3h6.3l5.2-7 9.7 9.5h7.8l-14.1-13.9zM63 175.3h17v-4.4h-12v-6.3h10.7v-4.4h-10.7v-5.6h12v-4.5h-17zM170.5 168.4h-.2l-4.3-18.3h-8.4v25.2h5.1v-18.9l4.5 18.9h6l4.8-18.9h-.2v18.9h5.7v-25.2h-8.7zM165.6 203.5h-8.5v-13.2h8.2v1.6h-6.5v4.2h6v1.6h-6v4.4h6.8v1.4zM175.2 203.5h-1.6v-5.8c0-.7-.2-1.2-.5-1.6-.3-.3-.9-.5-1.8-.5-.5 0-1 0-1.5.1-.4.1-.7.1-.9.2v7.5h-1.6v-8.8h.1c.5-.1 1.1-.3 1.7-.4.7-.1 1.4-.2 2.2-.2 1.4 0 2.4.3 2.9.8.6.6.9 1.4.9 2.5v6.2zM181.5 203.7c-.7 0-1.3-.1-1.9-.3-.5-.2-1-.5-1.4-.9-.4-.4-.7-.9-.9-1.5-.2-.6-.3-1.2-.3-2s.1-1.4.3-2c.2-.6.5-1.1.9-1.6.4-.4.9-.8 1.4-1 .6-.2 1.2-.3 1.8-.3.7 0 1.3.1 1.8.3.5.2.9.6 1.2 1 .3.4.6.9.7 1.4.1.5.2 1.1.2 1.7v.9h-6.8c0 .4.1.7.2 1 .1.4.3.7.6 1 .2.3.6.5 1 .7.4.2.9.2 1.4.2.6 0 1.2-.1 1.7-.3.5-.2.9-.4 1.2-.5l.2-.1v1.6h-.1c-.4.2-.9.4-1.4.5-.4.1-1.1.2-1.8.2zm-2.9-5.6h5.2l-.1-.9c-.1-.3-.2-.6-.4-.9-.2-.2-.5-.4-.8-.6-.3-.1-.7-.2-1.1-.2-.8 0-1.4.2-1.9.7-.5.5-.8 1.1-.9 1.9zM188.7 203.5h-1.6v-8.7h.1c.5-.2 1-.3 1.6-.4.6-.1 1.2-.2 1.8-.2.4 0 .7 0 1 .1.3 0 .5.1.7.1h.1v1.5h-.2c-.1 0-.3-.1-.6-.1-.5-.1-1.4-.1-2.1 0-.3.1-.6.1-.8.2v7.5zM196.2 208c-.8 0-1.5-.1-2-.2s-.9-.3-1.2-.4h-.1v-1.7l.2.1c.3.1.7.3 1.2.4.5.1 1.1.2 1.8.2 1 0 1.8-.2 2.3-.7.5-.5.8-1.3.8-2.4v-.3c-.3.1-.6.3-1 .4-.5.1-1 .2-1.6.2-.6 0-1.2-.1-1.8-.3-.5-.2-1-.5-1.4-1-.4-.4-.7-.9-.9-1.5-.2-.6-.3-1.2-.3-1.9s.1-1.3.3-1.9c.2-.6.5-1.1 1-1.6.4-.5 1-.8 1.6-1.1.6-.3 1.3-.4 2.2-.4.8 0 1.5.1 2.1.2.6.2 1 .3 1.3.4h.1v8.5c0 .7-.1 1.3-.2 1.8-.2.6-.4 1.1-.8 1.5-.4.4-.9.8-1.5 1-.5.6-1.3.7-2.1.7zm1.1-12.4c-.6 0-1.1.1-1.5.3-.4.2-.8.4-1 .7-.3.3-.5.7-.6 1.1-.1.4-.2.8-.2 1.3 0 1 .3 1.8.8 2.4.5.5 1.3.8 2.2.8.5 0 .9-.1 1.3-.2s.7-.3 1-.4v-5.7c-.2-.1-.5-.1-.8-.2-.3-.1-.7-.1-1.2-.1zM205.1 207.8h-1.7l2-4.5-3.7-9h1.7v.1l1.9 5 .5 1.3c.1.3.2.6.3.8l.3-.8c.1-.4.3-.8.5-1.3l2.2-5.1h1.7l-5.7 13.5zM217.6 203.5h-1.6v-14h1.6v14zM221.6 203.5h-1.6v-9.1h1.6v9.1zm.1-11h-1.8v-1.8h1.8v1.8zM227.7 203.5h-1.6l-3.7-9.1h1.7l2.3 5.8c.1.2.1.4.2.5.1.2.1.4.2.5 0 .1 0 .1.1.2l.3-.8.5-1.1 2.2-5.2h1.7l-3.9 9.2zM236.4 203.7c-.7 0-1.3-.1-1.9-.3-.5-.2-1-.5-1.4-.9-.4-.4-.7-.9-.9-1.5-.2-.6-.3-1.2-.3-2s.1-1.4.3-2c.2-.6.5-1.1.9-1.6.4-.4.9-.8 1.4-1 .6-.2 1.2-.3 1.8-.3.7 0 1.3.1 1.8.3.5.2.9.6 1.2 1 .3.4.6.9.7 1.4.1.5.2 1.1.2 1.7v.9h-6.8c0 .4.1.7.2 1 .1.4.3.7.6 1 .2.3.6.5 1 .7.4.2.9.2 1.4.2.6 0 1.2-.1 1.7-.3.5-.2.9-.4 1.2-.5l.2-.1v1.6h-.1c-.4.2-.9.4-1.4.5-.4.1-1.1.2-1.8.2zm-2.9-5.6h5.2l-.1-.9c-.1-.3-.2-.6-.4-.9-.2-.2-.5-.4-.8-.6-.3-.1-.7-.2-1.1-.2-.8 0-1.4.2-1.9.7-.5.5-.8 1.1-.9 1.9zM244.6 203.7c-.6 0-1.2 0-1.7-.1s-.9-.2-1.3-.4h-.1v-1.6l.2.1c.3.2.7.3 1.2.4.5.1 1 .2 1.5.2.7 0 1.2-.1 1.5-.4.3-.2.5-.5.5-.9 0-.2 0-.4-.1-.5-.1-.1-.2-.2-.4-.3-.2-.1-.4-.2-.7-.3-.3-.1-.6-.2-1-.3l-1.2-.4c-.4-.2-.7-.3-.9-.5-.3-.2-.5-.5-.6-.7-.1-.3-.2-.6-.2-1s.1-.7.2-1.1.4-.6.7-.9c.3-.2.7-.4 1.1-.6.4-.1 1-.2 1.5-.2s1 0 1.4.1c.4.1.8.2 1 .3h.1v1.5l-.2-.1c-.3-.1-.6-.2-1-.3-.4-.1-.9-.2-1.4-.2-.7 0-1.2.1-1.4.4-.3.2-.4.5-.4 1 0 .3.1.6.4.8.3.2.8.4 1.5.6l1.2.4c.4.1.7.3 1 .5.3.2.5.5.7.8.2.3.2.7.2 1.1 0 .3-.1.7-.2 1-.1.3-.3.6-.6.9-.3.3-.7.5-1.1.6-.3 0-.8.1-1.4.1zM262 203.5h-1.6v-5.6c0-.8-.2-1.4-.5-1.8-.3-.4-.8-.5-1.6-.5-.5 0-1 .1-1.5.2-.4.2-.8.3-1.1.5v7.1h-1.6v-14h1.6v5.3c.3-.2.7-.3 1.1-.4.6-.2 1.2-.3 1.8-.3 1.1 0 1.9.3 2.5.9.6.6.9 1.5.9 2.7v5.9zM268.3 203.7c-.7 0-1.3-.1-1.9-.3-.5-.2-1-.5-1.4-.9-.4-.4-.7-.9-.9-1.5-.2-.6-.3-1.2-.3-2s.1-1.4.3-2c.2-.6.5-1.1.9-1.6.4-.4.9-.8 1.4-1 .6-.2 1.2-.3 1.8-.3.7 0 1.3.1 1.8.3.5.2.9.6 1.2 1 .3.4.6.9.7 1.4.1.5.2 1.1.2 1.7v.9h-6.8c0 .4.1.7.2 1 .1.4.3.7.6 1 .2.3.6.5 1 .7.4.2.9.2 1.4.2.6 0 1.2-.1 1.7-.3.5-.2.9-.4 1.2-.5l.2-.1v1.6h-.1c-.4.2-.9.4-1.4.5-.4.1-1.1.2-1.8.2zm-2.9-5.6h5.2l-.1-.9c-.1-.3-.2-.6-.4-.9-.2-.2-.4-.4-.8-.6-.3-.1-.7-.2-1.1-.2-.8 0-1.4.2-1.9.7-.5.5-.8 1.1-.9 1.9zM275.5 203.5h-1.6v-8.7h.1c.5-.2 1-.3 1.6-.4.6-.1 1.2-.2 1.8-.2.4 0 .7 0 1 .1.3 0 .5.1.7.1h.1v1.5h-.2c-.1 0-.3-.1-.6-.1-.5-.1-1.3-.1-2.1 0-.3.1-.6.1-.8.2v7.5zM283.7 203.7c-.7 0-1.3-.1-1.9-.3-.5-.2-1-.5-1.4-.9-.4-.4-.7-.9-.9-1.5-.2-.6-.3-1.2-.3-2s.1-1.4.3-2c.2-.6.5-1.1.9-1.6.4-.4.9-.8 1.4-1 .6-.2 1.2-.3 1.8-.3.7 0 1.3.1 1.8.3.5.2.9.6 1.2 1 .3.4.6.9.7 1.4.1.5.2 1.1.2 1.7v.9h-6.8c0 .4.1.7.2 1 .1.4.3.7.6 1 .2.3.6.5 1 .7.4.2.9.2 1.4.2.6 0 1.2-.1 1.7-.3.5-.2.9-.4 1.2-.5l.2-.1v1.6h-.1c-.4.2-.9.4-1.4.5-.4.1-1 .2-1.8.2zm-2.8-5.6h5.2l-.1-.9c-.1-.3-.2-.6-.4-.9-.2-.2-.5-.4-.8-.6-.3-.1-.7-.2-1.1-.2-.8 0-1.4.2-1.9.7-.5.5-.8 1.1-.9 1.9zM289 194h-.5v-1.7h-.6v-.4h1.7v.4h-.6v1.7zM292 194h-.5v-1.2l-.5 1.2h-.4l-.5-1.1v1.2h-.5v-2.1h.5l.6 1.3.6-1.4h.5v2.1z" />
      </svg>

    </div>

    <div className="em-l-grid em-l-grid--1-2-1 em-l-grid--break-fast em-u-text-align-left">
        <div className="em-l-grid__item em-u-padding-none">
            <div className="custom-heading-3 fpo-block">Analytics Business COE's</div>
        </div>
        <div className="em-l-grid__item em-u-padding-none">
           


        <div className="row">
        <div className="column">
          
<div className="footer-link-bottom-spacing custom-heading-5">Downstream</div>
<ul>
    <ol className="footer-link-bottom-spacing custom-paragraph">
        <a href="/src/container/Dashboard/dashboard.tsx">Controllers BCOE</a>
    </ol>
    <ol className="footer-link-bottom-spacing custom-paragraph">
        <a href="/src/container/Dashboard/dashboard.tsx">TDT Analytics COE</a>
    </ol>
    <ol className="footer-link-bottom-spacing custom-paragraph">
        <a href="/src/container/Dashboard/dashboard.tsx">BAR Analytics</a>
    </ol>
    <ol className="footer-link-bottom-spacing custom-paragraph">
        <a href="/src/container/Dashboard/dashboard.tsx">Downstream Data, Analytics, & Systems</a>
    </ol>
</ul>
            </div>

            <div className="footer-link-bottom-spacing custom-heading-5 column">
            <p>Upstream</p>
            <ul>
    <ol className="footer-link-top-spacing custom-paragraph">
        <a href="/src/container/Dashboard/dashboard.tsx">Business Systems Support Team BCOE</a>
    </ol>
    <ol className="footer-link-top-spacing custom-paragraph">
        <a href="/src/container/Dashboard/dashboard.tsx">Upload Technical Data Support</a>
    </ol>
    </ul>
            </div>
            

            <div className="footer-link-left-spacing custom-heading-5 column">
            <p>GSC</p>
            <ul>
    <ol className="footer-link-bottom-spacing custom-paragraph">
        <a href="/src/container/Dashboard/dashboard.tsx">EMIT ITOE</a>
    </ol>
    <ol className="footer-link-bottom-spacing custom-paragraph">
        <a href="/src/container/Dashboard/dashboard.tsx">GSC BCOE</a>
    </ol>
    <ol className="footer-link-bottom-spacing custom-paragraph">
        <a href="/src/container/Dashboard/dashboard.tsx">Procurement Analytics Toolbox</a>
    </ol>
    <ol className="footer-link-bottom-spacing custom-paragraph">
        <a href="/src/container/Dashboard/dashboard.tsx">GREF Analytics</a>
    </ol>
</ul>
            </div>

            <div className="custom-heading-5 column">
            <p>Chemical</p>
            <ul>
    <ol className="footer-link-bottom-spacing custom-paragraph">
        <a href="/src/container/Dashboard/dashboard.tsx">Data, Analytics, and Systems</a>
        </ol>
        </ul>
            </div>

            <div className="footer-link-left-spacing  custom-heading-5 column">
            <p>EMRE</p> 
            </div>

            <div className="footer-link-left-spacing custom-heading-5 column">
            <p>Corporate</p>

            </div>

            <div className="custom-heading-5 column">
            <p>URC</p>
            </div>
        </div>


        </div>
    </div>
  </div>
</footer>
        </Auxi>
    )
}

export default footer;
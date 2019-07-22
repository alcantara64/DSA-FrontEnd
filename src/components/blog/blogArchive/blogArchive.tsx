import React, { Component } from 'react';
import arrow_icon from '../../../assets/images/arrow_icon.png';
import blog_image from '../../../assets/images/blog_image.png';
import pagination_arrow from '../../../assets/images/pagination_arrow.png';
import pagination_arrow_right from '../../../assets/images/pagination_arrow_right.png';
import filter_technology from '../../../assets/images/filter_technology.png';
import filter_location from '../../../assets/images/filter_location.png';
import slider from '../../../assets/images/slider.png';
import { Link } from 'react-router-dom';
import './blogArchive.css';

// import Slider from 'react-input-slider';




const blogArchive = () => {
    return (
        <div className="blog-archives-container">
            <Link to={'/blog'} className="back-button-margin" >
                <div className="inline"><img className="img-size" src={arrow_icon} alt="" /></div>
                <div className="inline custom-link">BACK</div>
            </Link>
            
            <div className = "custom-blog-archive custom-H1">Blog Archive</div>
<div className="custom-filter">
    <div className="custom-link custom-filter-technology"><img src={filter_technology} alt=""/><p>Filter by technology</p></div>
    <div className="custom-link custom-filter-location"><img src={filter_location} alt=""/> <p>Filter by location</p> </div>
    
    <div>
    <div className="custom-slider-date">

        <p>Jan 1, 1999   </p>
        <p>Jun 12, 2019</p>
        </div>

       <img src={slider} alt=""/>
     </div>

</div>
<div className="custom-img">
    <div className="custom-flex-width">
<img src={blog_image} alt=""/>
<div>
    <p className="custom-H2">FTP Success Story</p>
    <p className="custom-paragraph">This would be an article about a success story of data at ExxonMobil.</p>
    <p className="custom-paragraph">Johnny Swim</p>
</div>
    </div>
    <div className="custom-flex-width">
<img src={blog_image} alt=""/>
<div>
    <p className="custom-H2">FTP Success Story</p>
    <p className="custom-paragraph">This would be an article about a success story of data at ExxonMobil.</p>
    <p className="custom-paragraph">Johnny Swim</p>
</div>
    </div>
    <div className="custom-flex-width">
<img src={blog_image} alt=""/>
<div>
    <p className="custom-H2">FTP Success Story</p>
    <p className="custom-paragraph">This would be an article about a success story of data at ExxonMobil.</p>
    <p className="custom-paragraph">Johnny Swim</p>
</div>
    </div>
    <div className="custom-flex-width">
<img src={blog_image} alt=""/>
<div>
    <p className="custom-H2">FTP Success Story</p>
    <p className="custom-paragraph">This would be an article about a success story of data at ExxonMobil.</p>
    <p className="custom-paragraph">Johnny Swim</p>
</div>
    </div>
    <div className="custom-flex-width">
<img src={blog_image} alt=""/>
<div>
    <p className="custom-H2">FTP Success Story</p>
    <p className="custom-paragraph">This would be an article about a success story of data at ExxonMobil.</p>
    <p className="custom-paragraph">Johnny Swim</p>
</div>
    </div>
    <div className="custom-flex-width">
<img src={blog_image} alt=""/>
<div>
    <p className="custom-H2">FTP Success Story</p>
    <p className="custom-paragraph">This would be an article about a success story of data at ExxonMobil.</p>
    <p className="custom-paragraph">Johnny Swim</p>
</div>
    </div>
    <div className="custom-flex-width">
<img src={blog_image} alt=""/>
<div>
    <p className="custom-H2">FTP Success Story</p>
    <p className="custom-paragraph">This would be an article about a success story of data at ExxonMobil.</p>
    <p className="custom-paragraph">Johnny Swim</p>
</div>
    </div>
    <div className="custom-flex-width">
<img src={blog_image} alt=""/>
<div>
    <p className="custom-H2">FTP Success Story</p>
    <p className="custom-paragraph">This would be an article about a success story of data at ExxonMobil.</p>
    <p className="custom-paragraph">Johnny Swim</p>
</div>
    </div>
    <div className="custom-flex-width">
<img src={blog_image} alt=""/>
<div>
    <p className="custom-H2">FTP Success Story</p>
    <p className="custom-paragraph">This would be an article about a success story of data at ExxonMobil.</p>
    <p className="custom-paragraph">Johnny Swim</p>
</div>
    </div>
    <div className="custom-flex-width">
<img src={blog_image} alt=""/>
<div>
    <p className="custom-H2">FTP Success Story</p>
    <p className="custom-paragraph">This would be an article about a success story of data at ExxonMobil.</p>
    <p className="custom-paragraph">Johnny Swim</p>
</div>
    </div>
    <div className="custom-flex-width">
<img src={blog_image} alt=""/>
<div>
    <p className="custom-H2">FTP Success Story</p>
    <p className="custom-paragraph">This would be an article about a success story of data at ExxonMobil.</p>
    <p className="custom-paragraph">Johnny Swim</p>
</div>
    </div>
    <div className="custom-flex-width">
<img src={blog_image} alt=""/>
<div>
    <p className="custom-H2">FTP Success Story</p>
    <p className="custom-paragraph">This would be an article about a success story of data at ExxonMobil.</p>
    <p className="custom-paragraph">Johnny Swim</p>
</div>
    </div>
</div>


<ol className="em-c-pagination" role="navigation" aria-labelledby="pagination-label">
  <li className="em-c-pagination__item">
    <a className="em-c-pagination__link  em-is-disabled" href="#">
     
      <img src={pagination_arrow} alt=""/>
    </a>
  </li>
  <li className="em-c-pagination__item">
      
    <a className="active em-c-pagination__link  em-is-current" href="#">
			1
		</a>
  </li>
  <li className="em-c-pagination__item">
    <a className="em-c-pagination__link  " href="#">
			2
		</a>
  </li>
  <li className="em-c-pagination__item">
    <a className="em-c-pagination__link  " href="#">
			3
		</a>
  </li>
  <li className="em-c-pagination__item">
    <a className="em-c-pagination__link  " href="#">
			4
		</a>
  </li>
  <li className="em-c-pagination__item">
    <a className="em-c-pagination__link  " href="#">
    <img src={pagination_arrow_right} alt=""/>

    </a>
  </li>
</ol>

        </div>
    
    )
}

















export default blogArchive;
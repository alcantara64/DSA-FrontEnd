import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import about_profile_pic from './../../assets/images/about_profile_pic.png';




class TestiomonialCarousel extends React.Component {

    constructor(){
        super();
        this.state = {
            curentIndex: 0,
            items: [
                <div className="">
                <div className="row custom-testimonial-margin">
                                    <div className="custom-mid-page-slider-photo-column">
                                        <img src={about_profile_pic} alt="" className="custom-mid-photo-area" />
        
                                    </div>
        
        
                                    <div className="custom-mid-page-slider-details-column purple-text-color">
        
                                      
        
                                        <div className="custom-link purple-text-color no-text-transform custom-mid-page-header-margin">TESTIMONIALS</div>
        
                                        <div className="custom-about-regular-h3 custom-margin">We were able to level set from across the business and technical folks, and then walk out of a 1.5 day engagement with a working prototype of a visualization with mock data.</div>
        
        
                                        <div className="custom-paragraph purple-text-color custom-margin">Nate McIntire, C&D AND FTP VIZ LEAD</div>
                                    </div>
                                </div>
                </div>
      
            ]
        };
    }


    slideTo = (i) => this.UNSAFE_componentWillMount({ currentIndex: i});

    onSlideChnaged = (e) => this.setState({ currentIndex: e.items});

    slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1});

    // slidePrev = () => this.setState({ currentIndex: this.state.curentIndex - 1});

    renderThumbs = () =>
    <ul>{
        this.state.items.map((item, i) => 
        <li key={i} onClick={() => this.slideTo(i)}>{item}</li>
        )
    }
    </ul>

    renderCarousel(){
        const {currentIndex, items} = this.state;

        return (<AliceCarousel
                dotsDisabled = {true}
                buttonsDisabled = {true}
                slideToIndex={currentIndex}
                onSlideChanged={this.onSlideChnaged}
        >
            {items.map((item, i)=> 
               <div key={i} >{ item }</div>
                
                )}
        </AliceCarousel>);
    }
    render(){
        return(
            <div>
            { this.renderThumbs() }
            <div className="em-u-text-align-left">
                                            <span className="dot dot-current" onClick={() => this.slideNext()}></span>
                                            <span className="dot" onClick={() => this.slideNext()}></span>
                                            <span className="dot" onClick={() => this.slideNext()}></span>
                                            <span className="dot" onClick={() => this.slideNext()}></span>
                                            <span className="dot" ></span>
                                        </div>
            { this.renderCarousel() }
            {/* <div className="">
                <div className="row custom-testimonial-margin">
                                    <div className="custom-mid-page-slider-photo-column">
                                        <img src={about_profile_pic} alt="" className="custom-mid-photo-area" />
        
                                    </div>
        
        
                                    <div className="custom-mid-page-slider-details-column purple-text-color">
        
                                      
        
                                        <div className="custom-link purple-text-color no-text-transform custom-mid-page-header-margin">TESTIMONIALS</div>
        
                                        <div className="custom-about-regular-h3 custom-margin">We were able to level set from across the business and technical folks, and then walk out of a 1.5 day engagement with a working prototype of a visualization with mock data.</div>
        
        
                                        <div className="custom-paragraph purple-text-color custom-margin">Nate McIntire, C&D AND FTP VIZ LEAD</div>
                                    </div>
                                </div>
                </div> */}
          </div>
        )
       
    }

}

export default TestiomonialCarousel;
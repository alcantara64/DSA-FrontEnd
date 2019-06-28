import React from 'react';
import AliceCarousel from 'react-alice-carousel';



class TestiomonialCarousel extends React.Component {

    onSlideChange(e){
        console.log('Item position during change:', e.item);
        console.log('Slides positon during a change:', e.slide);
    }

    onSlideChanged(e){
        console.log('Items position during change:', e.item)
        console.log('Slides position during a change:', e.slide);
    }

    render(){
        const responsive = {
            0: {
                items = 1
            },
            600:{
                items = 2
            },
            1024: {
                items: 3
            }
        };

        return(
            <AliceCarousel
        duration={400}
        autoPlay={true}
        startIndex = {1}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        playButtonEnabled={true}
        responsive={responsive}
        autoPlayInterval={2000}
        autoPlayDirection="rtl"
        autoPlayActionDisabled={true}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
      >
        <div className="yours-custom-class"><h2>1</h2></div>
        <div className="yours-custom-class"><h2>2</h2></div>
        <div className="yours-custom-class"><h2>3</h2></div>
        <div className="yours-custom-class"><h2>4</h2></div>
        <div className="yours-custom-class"><h2>5</h2></div>
      </AliceCarousel>
        );
    }

}

export default TestiomonialCarousel;
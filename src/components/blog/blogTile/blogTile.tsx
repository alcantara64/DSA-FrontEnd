import React from 'react';
import blog_image from '../../../asset/images/blog_image.png';


const blogTile = (props: any) => {
    console.log(props.bloglist);
    return (
        <div className="em-u-margin-top-double">
        <img src={blog_image} alt="" className="custom-rec-blog-detail-small-area em-u-width-100" />
        <div className="em-u-text-align-left custom-blog-text-margin">
            <div className="custom-H3 ">{props.title}</div>
            <div className="custom-paragraph ">This would be an article about a success story of data at ExxonMobil</div>

            <div className="custom-paragraph custom-rich-text-color em-u-margin-top ">Johnny Swim</div>

        </div>
    </div>
    );
}

export default blogTile;
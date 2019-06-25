import React, { Component } from 'react';
import Auxi from '../../../hoc/Auxi';
import RouteComponentProps from 'react-router-dom';
import blog_image from './../../../asset/images/blog_image.png';
import './blogDetail.css';

export default class BlogDetail extends Component {
    
    render(){
        return (
            <Auxi>
                <div className="blog-details-container  ">
               
                <div className="success-story">
                <div className="custom-success-image">
                    <img className="success-img" src={blog_image} alt="" />
                </div>
                <div className="custom-success-image custom-success-details">
                <div className="custom-link custom-uppercase custom-success-padding">SUCCESS STORIES</div>
                    <div className="custom-H1 custom-ftp">FTP Success Story</div>
                    <div className="custom-H5 custom-brief-overview">A brief overview of this quick read. A brief overview of this quick read . A brief overview of this quick read.</div>
                    <div className="custom-paragraph custom-read">11 min read</div>
                    <div className="custom-H5">Johnny Swim - Jan 20, 2019</div>
                </div>
                    
                </div>
                <div className="custom-paragraph custom-text-area">
                Bacon ipsum dolor amet salami shank tail tri-tip meatloaf. 
                Anim commodo pariatur, adipisicing esse filet mignon deserunt. 
                Turkey sed voluptate burgdoggen cow, boudin ipsum pastrami consequat reprehenderit pork belly cupidatat leberkas aliquip pancetta.
                 Ut jowl pork sunt, strip steak pig meatball sed biltong chuck deserunt beef ribs.
                  Do dolore incididunt consequat ribeye, tail velit.
                   Flank est pancetta, qui aliqua frankfurter venison.
                    Hamburger laborum beef ribs aute deserunt, sausage eiusmod turkey flank. Cow sirloin occaecat, reprehenderit kevin ground round in eu ham hock minim. 
                    Id biltong labore, nisi corned beef beef nulla pancetta. Kielbasa bresaola labore tenderloin sirloin.
                     Tri-tip sausage brisket, proident dolore ground round aliqua enim id nulla prosciutto incididunt pastrami short ribs pariatur.
                      Et sirloin laborum quis, pork pork loin short loin landjaeger mollit rump.
                </div>
                </div>
            </Auxi>
        )
    }
}
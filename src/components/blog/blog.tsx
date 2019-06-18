import React from 'react';
import Auxi from '../../hoc/Auxi';
import Find_Solutions_Illustration from './../../asset/images/Find_Solutions_Illustration.png';
import blog_image from './../../asset/images/blog_image.png';
import './blog.css';
import { Link } from 'react-router-dom';

const blog = () => {
    return (
        <Auxi>
            <div className="em-l-container custom-blog-area custom-page-margin">
                <div className="em-l-linelength-container em-u-text-align-left em-u-margin-top-double em-u-margin-bottom-double">

                    <div className="custom-H1">The Blog</div>
                    <div className="custom-paragraph">How-to's, Tips and Tricks, and Success Stories. Just for you.</div>
                </div>


                <div className="em-l em-l--two-column custom-recent-blog-area">
                    <div className="em-l__main custom-recent-area">
                        <div className="custom-recent-background-area custom-H4 ">Recent Stories</div>

                        <div className="em-u-margin-top-double em-u-margin-bottom-double">
                            <img src={blog_image} alt="" className="custom-rec-blog-detail-area em-u-width-100" />
                            <div className="em-u-text-align-left custom-blog-text-margin">
                                <div className="custom-H3">FTP Success Story</div>
                                <div className="custom-paragraph ">This would be an article about a success story of data at ExxonMobil</div>

                                <div className="custom-paragraph custom-rich-text-color em-u-margin-top em-u-margin-bottom-double">Johnny Swim</div>

                            </div>
                        </div>


                        <div className="em-l-grid em-l-grid--halves custom-small-area-post">
                            <div className="em-l-grid__item ">

                                <div className="em-u-margin-top-double">
                                    <img src={blog_image} alt="" className="custom-rec-blog-detail-small-area em-u-width-100" />
                                    <div className="em-u-text-align-left custom-blog-text-margin">
                                        <div className="custom-H3 ">FTP Success Story</div>
                                        <div className="custom-paragraph ">This would be an article about a success story of data at ExxonMobil</div>

                                        <div className="custom-paragraph custom-rich-text-color em-u-margin-top ">Johnny Swim</div>

                                    </div>
                                </div>

                            </div>
                            <div className="em-l-grid__item ">

                                <div className="em-u-margin-top-double">
                                    <img src={blog_image} alt="" className="custom-rec-blog-detail-small-area em-u-width-100" />
                                    <div className="em-u-text-align-left custom-blog-text-margin">
                                        <div className="custom-H3 ">FTP Success Story</div>
                                        <div className="custom-paragraph ">This would be an article about a success story of data at ExxonMobil</div>

                                        <div className="custom-paragraph custom-rich-text-color em-u-margin-top">Johnny Swim</div>

                                    </div>
                                </div>

                            </div>

                        </div>


                        <div className="custom-full-archive em-l-linelength-container em-u-text-align-left custom-link-margin">
                            <Link to="/blog" className="custom-link ">
                                See Full Archive of Article
                            </Link>
                        </div>

                    </div>
                    <div className="em-l__secondary custom-popular-area">
                        <div className="fpo-block custom-popular-background-area custom-H4" >Popular</div>
                        <div className="em-l-linelength-container custom-blog-area-small">



                            <div className=" em-l em-l--two-column ">
                                <div className="em-l__main custom-blog-number-margin">
                                    <div className="custom-number-digit">1</div>
                                </div>
                                <div className="em-l__secondary em-u-text-align-left">
                                    <div  className="custom-margin-success-stories">
                                        <Link to="/blog" className="custom-font-success-stories ">
                                            Success Stories
            </Link>
                                    </div>

                                    <div className="custom-font-data-governance ">Data Governance in Action</div>

                                    <div className="custom-paragraph ">
                                        Key data governance roles were redefined to make responsibilities in Upstream.
    </div>

                                    <div className="custom-vanessa-padding custom-paragraph">Vanessa Surber
</div>


                                </div>
                            </div>



                        </div>

                        <div className="em-l-linelength-container custom-blog-area-small">



                            <div className=" em-l em-l--two-column ">
                                <div className="em-l__main custom-blog-number-margin">
                                    <div className="custom-number-digit">2</div>
                                </div>
                                <div className="em-l__secondary em-u-text-align-left">
                                    <div  className="custom-margin-success-stories">
                                        <Link to="/blog" className="custom-font-success-stories ">
                                            Success Stories
            </Link>
                                    </div>

                                    <div className="custom-font-data-governance ">FTP Success Story</div>

                                    <div className="custom-paragraph ">
                                       This would be an article about a success story of data at ExxonMobil.
    </div>

                                    <div className="custom-vanessa-padding custom-paragraph">Johnny Swim
</div>


                                </div>
                            </div>



                        </div>

                        <div className="em-l-linelength-container custom-blog-area-small">



                            <div className=" em-l em-l--two-column ">
                                <div className="em-l__main custom-blog-number-margin">
                                    <div className="custom-number-digit">3</div>
                                </div>
                                <div className="em-l__secondary em-u-text-align-left">
                                    <div  className="custom-margin-success-stories">
                                        <Link to="/blog" className="custom-font-success-stories ">
                                            Success Stories
            </Link>
                                    </div>

                                    <div className="custom-font-data-governance ">How Does Data Work?</div>

                                    <div className="custom-paragraph ">
                                        Learn how to leverage data for your workflow.
    </div>

                                    <div className="custom-vanessa-padding custom-paragraph">Ali Wilkin
</div>


                                </div>
                            </div>



                        </div>

                        <div className="em-l-linelength-container custom-blog-area-small">



                            <div className=" em-l em-l--two-column ">
                                <div className="em-l__main custom-blog-number-margin">
                                    <div className="custom-number-digit">4</div>
                                </div>
                                <div className="em-l__secondary em-u-text-align-left">
                                    <div  className="custom-margin-success-stories">
                                        <Link to="/blog" className="custom-link ">
                                            Success Stories
            </Link>
                                    </div>

                                    <div className="custom-font-data-governance ">The Best Answers</div>

                                    <div className="custom-paragraph ">
                                        Learn best practices of data and analytics at ExxonMobil.
    </div>

                                    <div className="custom-vanessa-padding custom-paragraph">Emily Cookson
</div>


                                </div>
                            </div>



                        </div>

                        <div className="em-l-linelength-container custom-blog-area-small">



                            <div className=" em-l em-l--two-column ">
                                <div className="em-l__main custom-blog-number-margin">
                                    <div className="custom-number-digit">5</div>
                                </div>
                                <div className="em-l__secondary em-u-text-align-left">
                                    <div className="custom-margin-success-stories">
                                        <Link to="/blog" className="custom-link ">
                                            Success Stories
            </Link>
                                    </div>

                                    <div className="custom-font-data-governance ">Linux Or Windows?</div>

                                    <div className="custom-paragraph ">
                                        The age old question, with a new twist.
    </div>

                                    <div className="custom-vanessa-padding custom-paragraph">Frank Ocean
</div>


                                </div>
                            </div>



                        </div>
                    </div>
                </div>


                <div className="custom-tile-background em-u-padding-top-half custom-link-bold">
                    Editor's Pick
                </div>

                
                    <div className="em-l-grid em-l-grid--3up custom-editor-blog-area">
                    <div className="em-l-grid__item">
                        
                    <div className="em-u-margin-top-double">
                                    <img src={blog_image} alt="" className="custom-rec-blog-detail-small-area em-u-width-100" />
                                    <div className="em-u-text-align-left custom-blog-text-margin ">
                                        <div className="custom-H3 ">FTP Success Story</div>
                                        <div className="custom-paragraph ">This would be an article about a success story of data at ExxonMobil</div>

                                        <div className="custom-paragraph custom-rich-text-color em-u-margin-top ">Johnny Swim</div>

                                    </div>
                                </div>

                    </div>
                    <div className="em-l-grid__item">
                        

                    <div className="em-u-margin-top-double">
                                    <img src={blog_image} alt="" className="custom-rec-blog-detail-small-area em-u-width-100" />
                                    <div className="em-u-text-align-left custom-blog-text-margin">
                                        <div className="custom-H3 ">FTP Success Story</div>
                                        <div className="custom-paragraph ">This would be an article about a success story of data at ExxonMobil</div>

                                        <div className="custom-paragraph custom-rich-text-color em-u-margin-top ">Johnny Swim</div>

                                    </div>
                                </div>

                    </div>
                    <div className="custom-bottom-margin em-l-grid__item">
                        
                    <div className="em-u-margin-top-double">
                                    <img src={blog_image} alt="" className="custom-rec-blog-detail-small-area em-u-width-100" />
                                    <div className="em-u-text-align-left custom-blog-text-margin">
                                        <div className="custom-H3 ">FTP Success Story</div>
                                        <div className="custom-paragraph ">This would be an article about a success story of data at ExxonMobil</div>

                                        <div className="custom-paragraph custom-rich-text-color em-u-margin-top ">Johnny Swim</div>

                                    </div>
                                </div>

                    </div>
                    </div>
            </div>
        </Auxi>
    )
}

export default blog
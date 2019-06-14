import React from 'react';
import Auxi from '../../hoc/Auxi';
import Find_Solutions_Illustration from './../../asset/images/Find_Solutions_Illustration.png';
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
                            <img src={Find_Solutions_Illustration} alt="" className="custom-rec-blog-detail-area em-u-width-100" />
                            <div className="em-u-text-align-left custom-blog-text-margin">
                                <div className="custom-H3">FTP Success Story</div>
                                <div className="custom-paragraph ">This would be an article about a success story of data at ExxonMobil</div>

                                <div className="custom-paragraph custom-rich-text-color em-u-margin-top em-u-margin-bottom-double">Johnny Swimm</div>

                            </div>
                        </div>


                        <div className="em-l-grid em-l-grid--halves custom-small-area-post">
                            <div className="em-l-grid__item ">

                                <div className="em-u-margin-top-double">
                                    <img src={Find_Solutions_Illustration} alt="" className="custom-rec-blog-detail-small-area em-u-width-100" />
                                    <div className="em-u-text-align-left custom-blog-text-margin">
                                        <div className="custom-H3 ">FTP Success Story</div>
                                        <div className="custom-paragraph ">This would be an article about a success story of data at ExxonMobil</div>

                                        <div className="custom-paragraph custom-rich-text-color em-u-margin-top ">Johnny Swimm</div>

                                    </div>
                                </div>

                            </div>
                            <div className="em-l-grid__item ">

                                <div className="em-u-margin-top-double">
                                    <img src={Find_Solutions_Illustration} alt="" className="custom-rec-blog-detail-small-area em-u-width-100" />
                                    <div className="em-u-text-align-left custom-blog-text-margin">
                                        <div className="custom-H3 ">FTP Success Story</div>
                                        <div className="custom-paragraph ">This would be an article about a success story of data at ExxonMobil</div>

                                        <div className="custom-paragraph custom-rich-text-color em-u-margin-top">Johnny Swimm</div>

                                    </div>
                                </div>

                            </div>

                        </div>


                        <div className="em-l-linelength-container em-u-text-align-left custom-link-margin">
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
                                    <div className="custom-H1">1</div>
                                </div>
                                <div className="em-l__secondary em-u-text-align-left">
                                    <div className="">
                                        <Link to="/blog" className="custom-font-success-stories ">
                                            Success Stories
            </Link>
                                    </div>

                                    <div className="custom-font-data-governance ">Data Governance in Action</div>

                                    <div className="custom-paragraph ">
                                        Key data governance roles were redefined to make responsibilities in Upstream.
    </div>

                                    <div className="custom-paragraph">Vanessa Surber
</div>


                                </div>
                            </div>



                        </div>

                        <div className="em-l-linelength-container custom-blog-area-small">



                            <div className=" em-l em-l--two-column ">
                                <div className="em-l__main custom-blog-number-margin">
                                    <div className="custom-H1">2</div>
                                </div>
                                <div className="em-l__secondary em-u-text-align-left">
                                    <div>
                                        <Link to="/blog" className="custom-link ">
                                            Success Stories
            </Link>
                                    </div>

                                    <div className="custom-H3 ">Data Governance in Action</div>

                                    <div className="custom-paragraph ">
                                        Key data governance roles were redefined to make responsibilities in Upstream.
    </div>

                                    <div className="custom-paragraph">Vanessa Surber
</div>


                                </div>
                            </div>



                        </div>

                        <div className="em-l-linelength-container custom-blog-area-small">



                            <div className=" em-l em-l--two-column ">
                                <div className="em-l__main custom-blog-number-margin">
                                    <div className="custom-H1">3</div>
                                </div>
                                <div className="em-l__secondary em-u-text-align-left">
                                    <div>
                                        <Link to="/blog" className="custom-link ">
                                            Success Stories
            </Link>
                                    </div>

                                    <div className="custom-H3 ">Data Governance in Action</div>

                                    <div className="custom-paragraph ">
                                        Key data governance roles were redefined to make responsibilities in Upstream.
    </div>

                                    <div className="custom-paragraph">Vanessa Surber
</div>


                                </div>
                            </div>



                        </div>

                        <div className="em-l-linelength-container custom-blog-area-small">



                            <div className=" em-l em-l--two-column ">
                                <div className="em-l__main custom-blog-number-margin">
                                    <div className="custom-H1">4</div>
                                </div>
                                <div className="em-l__secondary em-u-text-align-left">
                                    <div>
                                        <Link to="/blog" className="custom-link ">
                                            Success Stories
            </Link>
                                    </div>

                                    <div className="custom-H3 ">Data Governance in Action</div>

                                    <div className="custom-paragraph ">
                                        Key data governance roles were redefined to make responsibilities in Upstream.
    </div>

                                    <div className="custom-paragraph">Vanessa Surber
</div>


                                </div>
                            </div>



                        </div>

                        <div className="em-l-linelength-container custom-blog-area-small">



                            <div className=" em-l em-l--two-column ">
                                <div className="em-l__main custom-blog-number-margin">
                                    <div className="custom-H1">5</div>
                                </div>
                                <div className="em-l__secondary em-u-text-align-left">
                                    <div>
                                        <Link to="/blog" className="custom-link ">
                                            Success Stories
            </Link>
                                    </div>

                                    <div className="custom-H3 ">Data Governance in Action</div>

                                    <div className="custom-paragraph ">
                                        Key data governance roles were redefined to make responsibilities in Upstream.
    </div>

                                    <div className="custom-paragraph">Vanessa Surber
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
                                    <img src={Find_Solutions_Illustration} alt="" className="custom-rec-blog-detail-small-area em-u-width-100" />
                                    <div className="em-u-text-align-left custom-blog-text-margin ">
                                        <div className="custom-H3 ">FTP Success Story</div>
                                        <div className="custom-paragraph ">This would be an article about a success story of data at ExxonMobil</div>

                                        <div className="custom-paragraph custom-rich-text-color em-u-margin-top ">Johnny Swimm</div>

                                    </div>
                                </div>

                    </div>
                    <div className="em-l-grid__item">
                        

                    <div className="em-u-margin-top-double">
                                    <img src={Find_Solutions_Illustration} alt="" className="custom-rec-blog-detail-small-area em-u-width-100" />
                                    <div className="em-u-text-align-left custom-blog-text-margin">
                                        <div className="custom-H3 ">FTP Success Story</div>
                                        <div className="custom-paragraph ">This would be an article about a success story of data at ExxonMobil</div>

                                        <div className="custom-paragraph custom-rich-text-color em-u-margin-top ">Johnny Swimm</div>

                                    </div>
                                </div>

                    </div>
                    <div className="em-l-grid__item">
                        
                    <div className="em-u-margin-top-double">
                                    <img src={Find_Solutions_Illustration} alt="" className="custom-rec-blog-detail-small-area em-u-width-100" />
                                    <div className="em-u-text-align-left custom-blog-text-margin">
                                        <div className="custom-H3 ">FTP Success Story</div>
                                        <div className="custom-paragraph ">This would be an article about a success story of data at ExxonMobil</div>

                                        <div className="custom-paragraph custom-rich-text-color em-u-margin-top ">Johnny Swimm</div>

                                    </div>
                                </div>

                    </div>
                    </div>
            </div>
        </Auxi>
    )
}

export default blog
import React from 'react';
import Auxi from '../../hoc/Auxi';

const home = () => {
    return (
        <Auxi>
            <div className="em-l-container">
                <div className="em-l-grid em-l-grid--1-to-3up ">
                    <div className="em-l-grid__item">
                        <div className="fpo-block">
                            <div className="grid-1">
                            <div className="body-header">Data at ExxonMobil</div>
                            <div className="comming-soon"></div>
                            </div>
                        </div>
                    </div>

                    <div className="em-l-grid__item">

                        <div className="fpo-block fpo-block--dark">
                            <div></div>
                            <div></div>
                        </div>
                    </div>

                    <div className="em-l-grid__item">

                        <div className="fpo-block">
                            <div className="grid-3">
                                <div className="body-header-data__container">
                                    <div className="body-header-data__marker"></div>
                                <div className="body-header-data">
                                    Find data standards, collaborate with influencers, and drive change through our community
                                </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Auxi>
    )
}

export default home
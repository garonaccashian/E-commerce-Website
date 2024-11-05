import React from "react";
import './hero.css';
import handicon from '../assets/hand_icon.png';
import arrowicon from '../assets/arrow.png';
import heroimage from '../assets/hero_image.png';
const Hero=()=>{
    return(
        <div className="hero">
            <div className="heroleft">
                <h2>New Arrivals</h2>
                <div>
                    <div className="handicon">
                        <p>New</p>
                        <img src={handicon} alt="" />
                    </div>
                    <p>Collections</p>
                    <p>For Everyone</p>
                </div>
                <div className="herolatest">
                    <div>
                        Latest Collection
                    </div>
                    <div>
                    <img src={arrowicon} alt="" />
                    </div>
                </div>
            </div>
            <div className="heroright">
                <img src={heroimage} alt="" />
            </div>

        </div>
    )
}

export default Hero;
import React from 'react';
import cloud from '../assets/cloud.svg';
import wind from '../assets/wind.svg';

const Surround = () => {
    return (
        <div className="surround">
            <img id="cloud1" src={cloud} alt="" />
            <img id="cloud2" src={cloud} alt="" />
        </div>
    )
}

export default Surround

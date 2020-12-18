import React from 'react';
import PropTypes from 'prop-types';
import "../Banner/styles.css"
import "../Banner/img/banner.png"

Banner.propTypes = {

};

function Banner(props) {
    return (
        <div className="banner">
            
            <img src="https://data.tienganh123.com/images/popup/banner_km_thang6_2020_ngang.png" />
        </div>
    );
}

export default Banner;
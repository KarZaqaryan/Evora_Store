import React from 'react';
import homeImg from '../assets/img/home-img.png'

function FirstSection(props) {
    return (
        <section className="home section--lg">
            <div className="home__container container grid">
                <div className="home__content">
                    <span className="home__subtitle">Hot Promotions</span>
                    <h1 className="home__title">
                        Fashion Trending <span>Great Collection</span>
                    </h1>
                    <p className="home__description">
                        Save more with coupons & up tp 20% off
                    </p>
                    <a  className="btn">Shop Now</a>
                </div>
                <img src={homeImg} className="home__img" alt="hats"/>
            </div>
        </section>
    );
}

export default FirstSection;
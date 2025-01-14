import React from 'react';

function Deals(props) {
    return (
        <section className="deals section">
            <div className="deals__container container grid">
                <div className="deals__item">
                    <div className="deals__group">
                        <h3 className="deals__brand">Deals of the Day</h3>
                        <span className="deals__category">Limited quantities</span>
                    </div>
                    <h4 className="deals__title">Summer Collection New Modern Design</h4>
                    <div className="deals__price flex">
                        <span className="new__price">$139.00</span>
                        <span className="old__price">$160.99</span>
                    </div>
                    <div className="deals__group">
                        <p className="deals__countdown-text">Hurry Up! Offer Ends In:</p>
                        <div className="countdown">
                            <div className="countdown__amount">
                                <p className="countdown__period">02</p>
                                <span className="unit">Days</span>
                            </div>
                            <div className="countdown__amount">
                                <p className="countdown__period">22</p>
                                <span className="unit">Hours</span>
                            </div>
                            <div className="countdown__amount">
                                <p className="countdown__period">57</p>
                                <span className="unit">Mins</span>
                            </div>
                            <div className="countdown__amount">
                                <p className="countdown__period">28</p>
                                <span className="unit">Sec</span>
                            </div>
                        </div>
                    </div>
                    <div className="deals__btn">
                        <a href="details.html" className="btn btn--md">Shop Now</a>
                    </div>
                </div>
                <div className="deals__item">
                    <div className="deals__group">
                        <h3 className="deals__brand">Women Clothing</h3>
                        <span className="deals__category">Shirts & Bag</span>
                    </div>
                    <h4 className="deals__title">Try Something new on vacation</h4>
                    <div className="deals__price flex">
                        <span className="new__price">$178.00</span>
                        <span className="old__price">$256.99</span>
                    </div>
                    <div className="deals__group">
                        <p className="deals__countdown-text">Hurry Up! Offer Ends In:</p>
                        <div className="countdown">
                            <div className="countdown__amount">
                                <p className="countdown__period">02</p>
                                <span className="unit">Days</span>
                            </div>
                            <div className="countdown__amount">
                                <p className="countdown__period">22</p>
                                <span className="unit">Hours</span>
                            </div>
                            <div className="countdown__amount">
                                <p className="countdown__period">57</p>
                                <span className="unit">Mins</span>
                            </div>
                            <div className="countdown__amount">
                                <p className="countdown__period">28</p>
                                <span className="unit">Sec</span>
                            </div>
                        </div>
                    </div>
                    <div className="deals__btn">
                        <a href="details.html" className="btn btn--md">Shop Now</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Deals;
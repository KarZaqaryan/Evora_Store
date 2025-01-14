import React from 'react';

function Showcase({state}) {
    return (
        <section className="showcase section">
            <div className="showcase__container container grid">
                <div className="showcase__wrapper">
                    <h3 className="section__title">Hot Releases</h3>
                    {
                        state.slice(0,3).map((res,i) => (
                            <div className="showcase__item" key={i}>
                                <a href="details.html" className="showcase__img-box">
                                    <img
                                        src={res.thumbImg}
                                        alt=""
                                        className="showcase__img"
                                    />
                                </a>
                                <div className="showcase__content">
                                    <a href="details.html">
                                        <h4 className="showcase__title">
                                            {res.name}
                                        </h4>
                                    </a>
                                    <div className="showcase__price flex">
                                        <span className="new__price">$238.85</span>
                                        <span className="old__price">$245.8</span>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>
                <div className="showcase__wrapper">
                    <h3 className="section__title">Deals & Outlet</h3>
                    {
                        state.slice(3,6).map((res,i) => (
                            <div className="showcase__item" key={i}>
                                <a href="details.html" className="showcase__img-box">
                                    <img
                                        src={res.thumbImg}
                                        alt=""
                                        className="showcase__img"
                                    />
                                </a>
                                <div className="showcase__content">
                                    <a href="details.html">
                                        <h4 className="showcase__title">
                                            {res.name}
                                        </h4>
                                    </a>
                                    <div className="showcase__price flex">
                                        <span className="new__price">$238.85</span>
                                        <span className="old__price">$245.8</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="showcase__wrapper">
                    <h3 className="section__title">Top Selling</h3>
                    {
                        state.slice(6,9).map((res,i) => (
                            <div className="showcase__item" key={i}>
                                <a href="details.html" className="showcase__img-box">
                                    <img
                                        src={res.thumbImg}
                                        alt=""
                                        className="showcase__img"
                                    />
                                </a>
                                <div className="showcase__content">
                                    <a href="details.html">
                                        <h4 className="showcase__title">
                                            {res.name}
                                        </h4>
                                    </a>
                                    <div className="showcase__price flex">
                                        <span className="new__price">$238.85</span>
                                        <span className="old__price">$245.8</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="showcase__wrapper">
                    <h3 className="section__title">Trendy</h3>
                    {
                        state.slice(9,12).map((res,i) => (
                            <div className="showcase__item" key={i}>
                                <a href="details.html" className="showcase__img-box">
                                    <img
                                        src={res.thumbImg}
                                        alt=""
                                        className="showcase__img"
                                    />
                                </a>
                                <div className="showcase__content">
                                    <a href="details.html">
                                        <h4 className="showcase__title">
                                            {res.name}
                                        </h4>
                                    </a>
                                    <div className="showcase__price flex">
                                        <span className="new__price">$238.85</span>
                                        <span className="old__price">$245.8</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Showcase;
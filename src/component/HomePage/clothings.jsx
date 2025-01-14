import React, { useState } from 'react';
import {NavLink} from "react-router";

function Clothings({ state }) {
    const [filteredState, setFilteredState] = useState(state);
    const [conf, setConf] = useState({
        filter: false,
        added: false,
        feature: true
    });

    const feautured = () => {
        setConf({ filter: false, added: false, feature: true });
        setFilteredState(state);
    };

    const popularFilter = () => {
        setConf({ filter: true, added: false, feature: false });
        const filtered = state.filter((res) => res.action?.best);
        setFilteredState(filtered);
    };

    const newAdded = () => {
        setConf({ filter: false, added: true, feature: false });
        const filtered = state.filter((res) => res.action?.new);
        setFilteredState(filtered);
    };

    return (
        <section className="products container section">
            <div className="tab__btns">
                <span
                    className={`tab__btn ${conf.feature ? 'active-tab' : ''}`}
                    data-target="#featured"
                    onClick={feautured}
                >
                    Featured
                </span>
                <span
                    className={`tab__btn ${conf.filter ? 'active-tab' : ''}`}
                    data-target="#popular"
                    onClick={popularFilter}
                >
                    Popular
                </span>
                <span
                    className={`tab__btn ${conf.added ? 'active-tab' : ''}`}
                    data-target="#new-added"
                    onClick={newAdded}
                >
                    New Added
                </span>
            </div>

            <div className="tab__items">
                <div className="tab__item active-tab" content id="featured">
                    <div className="products__container grid">
                        {filteredState.slice(0, 8).map((res) => (
                            <div className="product__item" key={res.id || res.name}>
                                <div className="product__banner">
                                    <a  className="product__images">
                                        <img
                                            src={res.thumbImg}
                                            alt={res.name || 'Product'}
                                            className="product__img default"
                                        />
                                    </a>
                                    <div className="product__actions">
                                        <a  className="action__btn" aria-label="Quick View">
                                            <i className="fi fi-rs-eye"></i>
                                        </a>
                                        <a className="action__btn" aria-label="Add to Wishlist">
                                            <i className="fi fi-rs-heart"></i>
                                        </a>
                                        <a className="action__btn" aria-label="Compare">
                                            <i className="fi fi-rs-shuffle"></i>
                                        </a>
                                    </div>
                                    <div className="product__badge light-pink">Hot</div>
                                </div>
                                <div className="product__content">
                                    <span className="product__category">Clothing</span>
                                    <a >
                                        <h3 className="product__title">{res.name}</h3>
                                    </a>
                                    <div className="product__rating">
                                        <i className="fi fi-rs-star"></i>
                                        <i className="fi fi-rs-star"></i>
                                        <i className="fi fi-rs-star"></i>
                                        <i className="fi fi-rs-star"></i>
                                        <i className="fi fi-rs-star"></i>
                                    </div>
                                    <div className="product__price flex">
                                        {res.card.map((inf, i) => (
                                            <span className="new__price" key={i}>
                                                {inf.size} : {inf.price}
                                            </span>
                                        ))}
                                    </div>
                                    <NavLink to={`/catalog/${res.active_card}`} className="action__btn cart__btn">
                                        Add
                                    </NavLink>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Clothings;

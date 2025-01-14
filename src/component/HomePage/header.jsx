import React from 'react';
import mainLogo from '../../assets/img/logo.svg'
import searchLogo from '../../assets/img/search.png'
import {NavLink} from "react-router";
import heart from '../../assets/img/icon-heart.svg'
import {card, favorite} from "../../info/info";
import cart from '../../assets/img/cart.jpeg'

function Header() {
    return (
        <header className="header">
            <div className="header__top">
                <div className="header__container container">
                    <div className="header__contact">
                        <span>(+01) - 2345 - 6789</span>
                        <span>Our location</span>
                    </div>
                    <p className="header__alert-news">
                        Super Values Deals - Save more coupons
                    </p>
                    <NavLink to={'login'}>
                        <a  className="header__top-action">
                            Log In / Sign Up
                        </a>
                    </NavLink>
                </div>
            </div>

            <nav className="nav container">
                <a  className="nav__logo">
                    <NavLink to={'/'}>
                        <img
                            className="nav__logo-img"
                            src={mainLogo}
                            alt="website logo"
                        />
                    </NavLink>
                </a>
                <div className="nav__menu" id="nav-menu">
                    <div className="nav__menu-top">
                        <a className="nav__menu-logo">
                            <img src="./assets/img/logo.svg" alt=""/>
                        </a>
                        <div className="nav__close" id="nav-close">
                            <i className="fi fi-rs-cross-small"></i>
                        </div>
                    </div>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <NavLink to={'/'}>
                                <a className="nav__link active-link">Home</a>
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to={'shop'}><a className="nav__link">Shop</a></NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to={'MyAccount'}>
                                <a className="nav__link">My Account</a>
                            </NavLink>
                        </li>
                        <NavLink to={'compare'}>
                            <li className="nav__item">
                                <a className="nav__link">Compare</a>
                            </li>
                        </NavLink>
                        <li className="nav__item">
                            <NavLink to={'login'}>
                                <a className="nav__link">Login</a>
                            </NavLink>
                        </li>
                    </ul>
                    <div className="header__search">
                        <input
                            type="text"
                            placeholder="Search For Items..."
                            className="form__input"
                        />
                        <button className="search__btn">
                            <img src={searchLogo} alt="search icon"/>
                        </button>
                    </div>
                </div>
                <div className="header__user-actions">
                    <NavLink to={'favorite'}>
                        <a className="header__action-btn" title="Wishlist">
                            <img src={heart} alt=""/>
                            <span className="count">{favorite.length}</span>
                        </a>
                    </NavLink>
                    <NavLink to={'cart'}>
                        <a className="header__action-btn" title="Cart">
                            <img src={cart} alt=""/>
                            <span className="count">{card.length}</span>
                        </a>
                    </NavLink>
                    <div className="header__action-btn nav__toggle" id="nav-toggle">
                        <img src={cart} alt=""/>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;

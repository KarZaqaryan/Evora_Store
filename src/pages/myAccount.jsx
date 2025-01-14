import React from 'react';
import { NavLink } from 'react-router-dom';
import Control_panel from "../component/myAccount/control_panel";

function MyAccount(props) {
    return (
        <>
            <section className="breadcrumb">
                <ul className="breadcrumb__list flex container">
                    <li><a href="index.html" className="breadcrumb__link">Home</a></li>
                    <li><span className="breadcrumb__link">></span></li>
                    <li><span className="breadcrumb__link">Account</span></li>
                </ul>
            </section>

            <section className="accounts section--lg">
                <div className="accounts__container container grid">
                    <div className="account__tabs">
                        <NavLink
                            to="/myaccount/dashboard"
                            className={({ isActive }) => isActive ? 'account__tab active-tab' : 'account__tab'}
                        >
                            <i className="fi fi-rs-settings-sliders"></i> Dashboard
                        </NavLink>
                        <NavLink
                            to="/myaccount/orders"
                            className={({ isActive }) => isActive ? 'account__tab active-tab' : 'account__tab'}
                        >
                            <i className="fi fi-rs-shopping-bag"></i> Orders
                        </NavLink>
                        <NavLink
                            to="/myaccount/update-profile"
                            className={({ isActive }) => isActive ? 'account__tab active-tab' : 'account__tab'}
                        >
                            <i className="fi fi-rs-user"></i> Update Profile
                        </NavLink>
                        <NavLink
                            to="/myaccount/address"
                            className={({ isActive }) => isActive ? 'account__tab active-tab' : 'account__tab'}
                        >
                            <i className="fi fi-rs-marker"></i> My Address
                        </NavLink>
                        <NavLink
                            to="/myaccount/change-password"
                            className={({ isActive }) => isActive ? 'account__tab active-tab' : 'account__tab'}
                        >
                            <i className="fi fi-rs-settings-sliders"></i> Change Password
                        </NavLink>
                        <p className="account__tab">
                            <i className="fi fi-rs-exit"></i> Logout
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MyAccount;

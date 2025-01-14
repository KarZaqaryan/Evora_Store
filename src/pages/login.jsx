import React, {useEffect, useState} from 'react';
import axios from "axios";

function Login(props) {


    return (
        <section className="login-register section--lg">
            <div className="login-register__container container grid">
                <div className="login">
                    <h3 className="section__title">Login</h3>
                    <form className="form grid">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="form__input"
                        />
                        <input
                            type="password"
                            placeholder="Your Password"
                            className="form__input"
                        />
                        <div className="form__btn">
                            <button className="btn">Login</button>
                        </div>
                    </form>
                </div>
                <div className="register">
                    <h3 className="section__title">Create an Account</h3>
                    <form className="form grid">
                        <input
                            type="text"
                            placeholder="Username"
                            className="form__input"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="form__input"
                        />
                        <input
                            type="password"
                            placeholder="Your Password"
                            className="form__input"
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="form__input"
                        />
                        <div className="form__btn">
                            <button className="btn">Submit & Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    )
}

export default Login;
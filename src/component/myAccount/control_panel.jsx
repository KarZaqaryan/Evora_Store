import React from 'react';

function ControlPanel(props) {
    return (
        <section className="accounts section--lg">
            <div className="accounts__container container grid">
                <div className="account__tabs">
                    <p className="account__tab active-tab" data-target="#dashboard">
                        <i className="fi fi-rs-settings-sliders"></i> Dashboard
                    </p>
                    <p className="account__tab" data-target="#orders">
                        <i className="fi fi-rs-shopping-bag"></i> Orders
                    </p>
                    <p className="account__tab" data-target="#update-profile">
                        <i className="fi fi-rs-user"></i> Update Profile
                    </p>
                    <p className="account__tab" data-target="#address">
                        <i className="fi fi-rs-marker"></i> My Address
                    </p>
                    <p className="account__tab" data-target="#change-password">
                        <i className="fi fi-rs-settings-sliders"></i> Change Password
                    </p>
                    <p className="account__tab"><i className="fi fi-rs-exit"></i> Logout</p>
                </div>
            </div>
        </section>
    );
}

export default ControlPanel;
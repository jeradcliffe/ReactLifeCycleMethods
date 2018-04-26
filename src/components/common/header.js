import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <ul className="nav navbar-nav">
                    <li><a href="/">Home</a></li>
                    <li><a href="/#authors">Authors</a></li>
                    <li><a href="/#about">About</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;

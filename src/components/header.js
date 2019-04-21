import React from 'react';
import { Link } from 'gatsby'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                    <li>
                    <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Link></Link>
            <Link></Link>
            
        </header>
    );
};

export default Header;
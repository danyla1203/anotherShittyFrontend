import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

export function Header() {
    return (
        <header>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/articles">Articles</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </header>
    )
}
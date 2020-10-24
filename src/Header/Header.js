import { Link } from "react-router-dom";
import React from "react";

export function Header() {
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/articles">Articles</Link>
            <Link to="/login">Login</Link>
        </header>
    )
}
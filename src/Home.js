import React from 'react';
import { Link } from 'react-router-dom';

export default function () {
    return (
        <div>
            Home
            <Link to="/about">About</Link>
        </div>
    )
}

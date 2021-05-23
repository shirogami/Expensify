import React from 'react';
import { Link } from 'react-router-dom';


// Note we use <Link> tag instead of <a> tag for reference link
// beacuse Link tag use client side routing (javscript) for opening link
// link without refreshing page

const NotFoundPage = () => {
    return (
        <div>
            Error 404! <Link to="/">Go Home</Link>
        </div>
    );
}

export default NotFoundPage;
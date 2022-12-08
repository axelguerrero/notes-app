import React from "react";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function Def (html) {
    return (
        <html>
            <head>
                <title>Notes |</title>
                <link rel="stylesheet" href="/css/App.css"/>
                <link rel="stylesheet" href="/css/contactStyle.css"/>
                <link rel="stylesheet" href="/css/aboutpage.css"/>
            </head>
            <body>
                    <a href="/" className="logo">
                    <img src="./images/logo.png" alt="app logo"/>
                    </a>
                <nav id="navBar">
                    <ul>
                        <li>
                           <a href="/productivity">Productivity</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                    <div className="profIcon">
                    <a href="/account"><AccountCircleOutlinedIcon fontSize="large"/></a>
                    </div>
                </nav>
                {html.children}
            </body>
        </html>
    )
}

export default Def;

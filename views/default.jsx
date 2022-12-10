import React from "react";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function Def (html) {
    return (
        <html>
            <head>
                <title>Notestar |</title>
                <link rel="stylesheet" href="/css/App.css"/>
                <link rel="stylesheet" href="/css/aboutpage.css"/>
                <link rel="stylesheet" href="/css/Notes.css"/>
            </head>
            <body>
                <nav id="navBar">
                    <a href="/" className="logo">
                    <img src="./images/logo.png" alt="app logo"/>
                    </a>
                    <ul>
                        <li>
                           <a href="/notes">Notes</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                    {/* <div className="profIcon">
                    <a href="/account"><AccountCircleOutlinedIcon fontSize="large"/></a>
                    </div> */}
                </nav>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def

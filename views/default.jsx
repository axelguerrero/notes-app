import React from "react";

function Def (html) {
    return (
        <html>
            <head>
                <title>Notes |</title>
                <link rel="stylesheet" href="/css/App.css"/>
                <link rel="stylesheet" href="/css/contactStyle.css"/>
            </head>
            <body>
                <nav>
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
                </nav>
                {html.children}
            </body>
        </html>
    )
}

export default Def;

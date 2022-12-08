const React = require("react")

function Def (html) {
    return (
        <html>
            <head>
                <title>Notes |</title>
                <link rel="stylesheet" href="/css/aboutpage.css"/>
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                           <a href="/productivity">Productivity</a>
                           <link rel="stylesheet" href="/css/App.css"/>
                        </li>
                        <li>
                            <a href="/about">About</a>
                            <link rel="stylesheet" href="/css/App.css"/>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                            <link rel="stylesheet" href="/css/App.css"/>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
}

export default Def;

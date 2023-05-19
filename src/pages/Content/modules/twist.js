import React, { useState, useEffect } from 'react';
import "../content.styles.css";

const TwistExtension = () => {
    // const [activeTab, setactiveTab] = useState("something");

    // useEffect(() => {
    //     let queryOptions = { active: true, currentWindow: true };
    //     chrome.tabs.query(queryOptions).then((tabs) => { setactiveTab(tabs[0].url); });
    // })

    return (
        <div className="TwistApp">
            <header className="TwistApp-header">
                <h1> TWIST </h1>
            </header>
            <body className="TwistApp-body">
                <h2> Trigger Warning Includer for Sensitive Topics </h2>
                <p> A chrome extension to nudge social media posters to use TW/CW </p>
            </body>
        </div>
    );
};


export default TwistExtension;



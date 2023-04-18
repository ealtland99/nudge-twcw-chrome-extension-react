import React, { Component, useState } from 'react';
import logo from '../../assets/img/logo.svg';
import './Popup.css';


const Popup = () => {
  const [activeTab, setactiveTab] = useState("soemthiing");

  React.useEffect(() => {
    let queryOptions = { active: true, currentWindow: true };
    chrome.tabs.query(queryOptions).then((tabs) => { setactiveTab(tabs[0].url); });
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/Popup/Popup.jsx</code> and save to reload.
        </p>
        <p> Hello World! </p>
        <p id="onTwitter"> {activeTab && activeTab.includes("twitter.com/compose/tweet") ?
          <font color="green"> "You are on the Twitter posting page!" </font> :
          <font color="red"> "You are NOT on the Twitter posting page!" </font>}  </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
      </header>
    </div>
  );
};


export default Popup;

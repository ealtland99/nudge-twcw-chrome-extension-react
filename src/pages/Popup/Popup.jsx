/*global chrome*/
import React, { Component } from 'react';

//import React from 'react';
import logo from '../../assets/img/logo.svg';
//import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';
//import { activeTabId } from "../Background/index";
//import { getActiveTabURL } from "../../../utils/active.js";


class Popup extends Component {
  /*const activeTab = async function getCurrentTab() {
    let queryOptions = { active: true, currentWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    //console.log("tab: ", tab);
    //console.log("tab.url", tab.url)
    return tab.url;
  };*/

  /*var activeTab = chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    return tabs[0].url;
    });*/

  // constructor (props) {
  //   super (props);
  //   this.state = {
  //     activeTab: ""
  //   };
  // }

  /*chrome.tabs.onUpdated.addListener((tabId, tab) => {
    const queryParameters = tab.url.split("?")[1];
      const urlParameters = new URLSearchParams(queryParameters);
  
      chrome.tabs.sendMessage(tabId, {
        type: "NEW",
        videoId: urlParameters.get("v"),
      });
  });*/

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/pages/Popup/Popup.jsx</code> and save to reload.
          </p>
          <p> Hello World! </p>
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
  }
};



// <p> active tab is: {activeTab} </p>
// <p> You are {activeTab && activeTab.includes("twitter.com/compose/tweet") ? "on" : "NOT on"} the Twitter posting page! </p>



/*
class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uniqueCode: '<cheta>',
      inputs: {
        priceperword: '0.05'
      }
    }
  }

  nextTapped_det = () => {
    var config = {
      code: this.state.uniqueCode
    };

    if(this.state.inputs.priceperword > 0) {
      config['priceperword'] = this.state.inputs.priceperword;
    }

    var css = "@import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap'); #cheta-flt-dv { padding: 8px; z-index: 999; position: fixed; width: 140px; bottom: 40%; right: 40px; background-color: #B0FF8B; color: black; border-radius: 20px; text-align: center; box-shadow: 2px 2px 3px #999; } .cheta-flt-p { margin: 2px; font-family: 'Special Elite'; font-size: 22px; } .cheta-pfnt { margin: 2px; font-family: 'Special Elite'; font-size: 14px; }";
    chrome.tabs.insertCSS({code: css});

    chrome.tabs.executeScript({
      file: 'jquery.js'
    });

    chrome.tabs.executeScript({
      code: 'var config = ' + JSON.stringify(config)
    }, function() {
      chrome.tabs.executeScript({
        file: 'pages/Popup/Popup.jsx'
      });
    })

  }

  handleInputChange = event => {
    const { name, value } = event.target;
    var inputs = this.state.inputs;
    inputs[name] = value;
    this.setState({
      inputs: inputs
    })
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1>ChETA</h1>
          <p>Chrome Extension for Text Analysis</p>
        </div>
        <div className="contentBox">
          <div className="no-tf-dtctd">
            <p>To start analysing a textfield, <span className="resalted">follow the steps</span>:</p>
            <p>1. <span className="resalted">Locate the field</span> you want to analyze</p>
            <p>2. Replace or <span className="resalted">add</span> anywhere on the field <span className="resalted">the following code</span>:</p>
            <p>Code: <span className="resalted">{this.state.uniqueCode}</span></p>
            <p>3. When ready, click start</p>
            <a href="#" onClick={this.nextTapped_det}>Start</a>
            <hr/>
            <p>Price per word (Optional): </p><input id="priceperwordInput" name="priceperword" value={this.state.inputs.priceperword} onChange={this.handleInputChange} type="number" step="0.01"/>
          </div>
        </div>
        <div className="footer">
          <a href="https://www.linkedin.com/in/emily-altland-84613014a/" target="_blank"><p>Emily Altland - 2023</p></a>
        </div>
      </div>
    )
  };
};
*/

export default Popup;

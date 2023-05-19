import React from 'react';
import createRoot from 'react-dom/client';
import { printLine } from './modules/print';
import TwistExtension from './modules/twist';
import "./content.styles.css";

console.log('Content script works!');

printLine("Using the 'printLine' function from the Print Module");

// This version shows up correctly on screen but still throws an error for DOMNesting problem
const container = document.createElement('div');
container.id = 'twist-extension-root';
document.body.appendChild(container);

const root = createRoot(container);
root.render(<TwistExtension />);

console.log('End of content.js file');
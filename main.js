//import * as acorn from "./node_modules/acorn/dist/acorn.js";
//import * as markup2json from "./node_modules/markup2json/dist/index.js";

const website = 'https://hackertyper.net'

// Using corsproxy.io - a reliable CORS proxy
const res = await fetch('https://corsproxy.io/?'.concat(website));
const data = await res.text();
const parser = new DOMParser();
const htmlParsed = parser.parseFromString(data, 'text/html');
console.log(htmlParsed.getElementsByClassName("Script").item)
console.log('Successfully fetched '.concat(website));
console.log('HTML length:', data.length, 'characters');
console.log('First 500 characters:', data.substring(0, 500));

var text = data;
var blob = new Blob([text], { type: 'text/plain' });
var link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = website.concat('.html');
link.click();
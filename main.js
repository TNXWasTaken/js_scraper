//import * as acorn from "./node_modules/acorn/dist/acorn.js";
//import * as markup2json from "./node_modules/markup2json/dist/index.js";

const website = 'https://hackertyper.net'

function extractPaths(document) {
  const attributesToCheck = ["src", "href"];

  let paths = [];

  attributesToCheck.forEach(attr => {
    document.querySelectorAll(`[${attr}]`).forEach(el => {
      const val = el.getAttribute(attr);
      if (val && !val.startsWith("#")) {   // ignore anchor links
        paths.push(val);
      }
    });
  });

  return paths;
}

// Using corsproxy.io - a reliable CORS proxy
const res = await fetch('127.0.0.1:3000/proxy?url=' + encodeURIComponent(website))  .then(r => r.text())
  .then(console.log);
const data = await res.text();
const parser = new DOMParser();
const htmlParsed = parser.parseFromString(data, 'text/html');
console.log(extractPaths(htmlParsed))
console.log('Successfully fetched '.concat(website));
console.log('HTML length:', data.length, 'characters');
console.log('First 500 characters:', data.substring(0, 500));

var text = data;
var blob = new Blob([text], { type: 'text/plain' });
var link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = website.concat('.html');
link.click();
import {Parser} from "acorn";

const website = 'https://hackertyper.net/'

// Using corsproxy.io - a reliable CORS proxy
const res = await fetch('https://corsproxy.io/?'.concat(website));
const data = await res.text();
console.log('Successfully fetched example.com!');
console.log('HTML length:', data.length, 'characters');
console.log('First 500 characters:', data.substring(0, 500));

var text = data;
var blob = new Blob([text], { type: 'text/plain' });
var link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = website.concat('.html');
link.click();
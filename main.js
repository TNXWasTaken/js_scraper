import axios from './node_modules/axios/dist/esm/axios.js';

const website = 'https://www.example.com'

// Using corsproxy.io - a reliable CORS proxy
const res = await axios.get('https://corsproxy.io/?'.concat(website));
console.log('Successfully fetched example.com!');
console.log('HTML length:', res.data.length, 'characters');
console.log('First 500 characters:', res.data.substring(0, 500));

var text = res.data;
var blob = new Blob([text], { type: 'text/plain' });
var link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = 'myTextFile.html';
link.click();
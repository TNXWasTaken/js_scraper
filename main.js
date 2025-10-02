import axios from './node_modules/axios/dist/esm/axios.js';

try {
  // Using corsproxy.io - a reliable CORS proxy
  const res = await axios.get(`https://corsproxy.io/?${encodeURIComponent('https://example.com/')}`);
  console.log('Successfully fetched example.com!');
  console.log('HTML length:', res.data.length, 'characters');
  console.log('First 500 characters:', res.data.substring(0, 500));
} catch (error) {
  console.error('Error fetching data:', error.message);
}

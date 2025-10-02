import axios from './node_modules/axios/dist/esm/axios.js';

try {
  const res = await axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent('https://example.com/')}`);
  console.log(res.data.contents); // The actual HTML
} catch (error) {
  console.error('Error fetching data:', error.message);
}

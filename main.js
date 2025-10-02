import axios from './node_modules/axios/dist/esm/axios.js';

try {
  const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
  console.log('Success! Data fetched:', res.data);
} catch (error) {
  console.error('Error fetching data:', error.message);
}

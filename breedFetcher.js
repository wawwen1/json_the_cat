const request = require('request');
let args = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  
  const data = JSON.parse(body);

  if (data == false) {
    console.log('Breed is not found.');
  } else {
    console.log(data[0].description);
  }
});
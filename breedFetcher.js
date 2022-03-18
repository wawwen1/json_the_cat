const request = require('request');

const fetchBreedDescription = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    const data = JSON.parse(body);

    if (data == false) {
      callback(`This breed (${breed}) is not found.`, null);
      return;
    }
    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };
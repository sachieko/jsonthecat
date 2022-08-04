const request = require('request');
const fetchBreedDescription = (breedName, callback) => {
  let catUrl = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(catUrl, (error, response, body) => {
    if (!JSON.parse(body)[0] && !error) error = `No breed found for ${breedName}!`;
    if (error) callback(error, null);
    if (JSON.parse(body)[0]) {
      let desc = JSON.parse(body)[0].description;
      callback(null, desc);
    }
  });
};

module.exports = { fetchBreedDescription };



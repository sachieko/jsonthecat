const request = require('request');
const CATAPI = 'https://api.thecatapi.com/v1/breeds/search?q=' + process.argv[2];

request(CATAPI, (error, response, body) => {
  if (error) {
    console.log('There was a purrrroblem!:', error);
    return;
  }
  console.log(`Statuscode = ${response.statusCode}`);
  const data = JSON.parse(body);
  data[0] ? console.log(data[0].description) : console.error(`No breed info found for ${process.argv[2]}. Meow >.<`);
});
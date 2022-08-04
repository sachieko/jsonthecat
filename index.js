const breedName = process.argv[2];
const { fetchBreedDescription } = require('./breedFetcher');

fetchBreedDescription(breedName, (error, desc) => {
  if (error) console.error(`There was a purrrroblem!: ${error}`);
  if (desc) console.log(desc);

});


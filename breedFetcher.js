const request = require("request");

const fetchBreedDescription = function (breedname, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedname}`,
    (error, response, body) => {
      if (!error) {
        const data = JSON.parse(body);
        let description = null;
        if (data.length !== 0) {
          description = data[0].description;
        }
        callback(error, description);
      }
    }
  );
};

module.exports = { fetchBreedDescription };

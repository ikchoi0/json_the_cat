const inputBreed = process.argv.slice(2)[0];
const request = require("request");

request(
  `https://api.thecatapig.com/v1/breeds/search?q=${inputBreed}`,
  (error, response, body) => {
    if (error) {
      throw error;
    }
    const data = JSON.parse(body);

    if (data.length === 0) {
      console.log("Breen name not found");
      process.exit();
    }
    console.log(data);

    //console.log(data[0].description);
  }
);

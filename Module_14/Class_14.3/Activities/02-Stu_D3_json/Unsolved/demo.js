// Get the Roadster endpoint
const url2 = "https://api.spacexdata.com/v3/roadster"

const dataPromise2 = d3.json(url2);
console.log("Data Promise: ", dataPromise2);

// Fetch the JSON data and console log it
d3.json(url2).then(function(data2) {
    console.log(data2);
});

// Get the capsules endpoint
const url = "https://api.spacexdata.com/v3/capsules";

const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
    console.log(data);
});
const axios = require("axios");

const loremBaseUrl = "https://loripsum.net/api";

getRandomText = async () => {
    let response = await axios.get(loremBaseUrl + "/plaintext", { responseType: "text" });
    return response.data;
}

module.exports = { getRandomText }
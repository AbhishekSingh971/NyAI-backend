const { getJson } = require("serpapi");
const dotenv = require('dotenv');
dotenv.config();

const searchLawyersNearby = (latitude, longitude) => {
    return new Promise((resolve, reject) => {
      getJson({
        engine: "google_maps",
        q: "lawyers",
        ll: `@${latitude},${longitude},15.1z`,
        type: "search",
        api_key: process.env.SERP_API_KEY || "8f4b80ff58d4a8bea461c27c55c3c4b24210b93408f2bc9b884e3d63acccc2dd",
      }, (json) => {
        if (json.error) {
          reject(json.error);
        } else {
          resolve(json.local_results);
        }
      });
    });
  };
  
module.exports = { searchLawyersNearby };

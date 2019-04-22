const fetch = require('node-fetch');

const API1_URL = "http://localhost:3001"

function sendRequest(url) {
  console.log(url)
  return fetch(url).then(res => {
    return res.json();
  }).catch(err => {
    console.error("Error from Api1: ", err);
  })
}

module.exports = class {
  static fetchMessages() {
    return sendRequest(`${API1_URL}/messages`);
  }
}
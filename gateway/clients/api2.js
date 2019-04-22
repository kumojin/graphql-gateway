const fetch = require('node-fetch');

const API2_URL = "http://localhost:3002"

function sendRequest(url) {
  console.log(url)
  return fetch(url).then(res => {
    return res.json();
  }).catch(err => {
    console.error("Error from Api2: ", err);
  })
}

module.exports = class {
  static fetchUsers() {
    return sendRequest(`${API2_URL}/users`);
  }
}
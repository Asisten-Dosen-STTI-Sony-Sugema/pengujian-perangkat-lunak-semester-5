// userService.js
const axios = require("axios");

exports.fetchAndFormatUser = async (id) => {
  const { data } = await axios.get(`https://api.example.com/users/${id}`);
  return `${data.firstName} ${data.lastName}`;
};

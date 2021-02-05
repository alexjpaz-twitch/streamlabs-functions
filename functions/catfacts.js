const axios = require('axios');

exports.handler = async function (event, context) {
  const fact = await axios.get("https://catfact.ninja/fact")
    .then(r => r.data.fact);

  return {
    statusCode: 200,
    body: fact
  };
}

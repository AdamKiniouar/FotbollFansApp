// netlify/functions/getNews.js

const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  try {
    const query = event.queryStringParameters.query;
    const googleNewsUrl = `https://news.google.com/search?q=${encodeURIComponent(query)}&hl=en-US&gl=US&ceid=US%3Aen`;

    const response = await fetch(googleNewsUrl, { headers: { 'Content-Type': 'application/xml' } });
    const data = await response.text();

    return {
      statusCode: 200,
      body: data,
      headers: {
        'Content-Type': 'application/xml',
        'Access-Control-Allow-Origin': '*', // Adjust as needed based on your security requirements
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};

function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = padZeroes(date.getMonth() + 1);
  const day = padZeroes(date.getDate());
  return `${year}-${month}-${day}`;
}

function padZeroes(num) {
  return num.toString().padStart(2, '0');
}

const express = require('express');
const app = express();
const PORT = 3000;

const { getWebContent } = require('./controller/scrape');

app.get('/', async (req, res) => {
  let result = await getWebContent();
  res.status(result.errorCode || 200).send(result.errorMessage || result);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

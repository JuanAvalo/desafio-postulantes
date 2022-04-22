const cheerio = require('cheerio');

module.exports.formatter = (htmlContent, tableContent) => {
  const $ = cheerio.load(htmlContent);

  const title = $("meta[name='description']", htmlContent).attr('content');
  const description = {};
  $('.contenido', htmlContent).each(function () {
    description.text = $(this).find('p').text();
    description.link = $(this).find('a').attr('href');
  });
  const table = tableContent.split('\r\n').map((row) => {
    return row.split(';');
  });

  const result = {
    title: title,
    description: description,
    table: table,
  };
  return JSON.stringify(result);
};

const axios = require('axios');
const { formatter } = require('../lib/formatter');

const getWebContent = async () => {
  try {
    const htmlContent = await axios.get(
      'https://www.sii.cl/servicios_online/1047-nomina_inst_financieras-1714.html'
    );

    const tableContent = await axios.get(
      'https://www.sii.cl/servicios_online/1047-nomina_inst_financieras-1714.csv?_=1650572925167'
    );
    return formatter(htmlContent.data, tableContent.data);
  } catch (err) {
    return {
      errorCode: err.response.status,
      errorMessage: err.message,
    };
  }
};

module.exports = {
  getWebContent,
};

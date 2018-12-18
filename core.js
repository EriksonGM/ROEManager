const request = require("request");

async function traducir (url) {
    let response
    try {
      response = await request(url)
      
      console.log(response);
      
    } catch (err) {
      return "Erro al cargar imagen";
    }
  }

  module.exports = traducir;
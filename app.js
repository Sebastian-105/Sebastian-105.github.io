require('dotenv').config();

(async function run() {
  function mooncakeSays(message) {
    let mooncake = '(o.o)';
  
    if ( !message ) {
      return `${mooncake} chookity?`;
    }
  
    return `${mooncake} ${message}`;
  }
  
  module.exports.mooncakeSays = mooncakeSays;
  // Import essential libraries 
  const express = require('express'); 
  const app = express(); 
  const path = require('path'); 
  const router = express.Router(); 
  app.use(express.static(__dirname + '/'));
  // Setup essential routes 
  router.get('/', function(req, res) { 
      res.sendFile(path.join(__dirname + '/index.html')); 
  }); 
  router.get('/assets/*', function(req, res) { 
        res.sendFile(path.join(__dirname + '/401.html')); 
    }); 
  router.get('/about', function(req, res) { 
      res.sendFile(path.join(__dirname + '/105/about-me/index.html')); 
  }); 
  router.get('/search-result', function(req, res) { 
      res.sendFile(path.join(__dirname + '/search/105.html')); 
  }); 
  //add the router 
  app.use('/', router); 
  // app.listen(process.env.port || 8080); 
  console.log('Running at Port 8080');   
  console.log('Action ran!');
})();
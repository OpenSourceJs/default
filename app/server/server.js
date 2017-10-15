(function() {

  'use strict';

  require('dotenv').config({ silent: true });
  const express = require ('express');
  const path = require('path');
  const server = express();
  const { clientErr, serverErr } = require('./middleware/err.js');

  // setup the server middleware
  require('./middleware/serverMiddleware.js')(server);

  //serving the view page
  server.use(express.static(path.join(__dirname, '../../dist')));

  // setup the api


  // setup global handle errors
  server.use(clientErr);
  server.use(serverErr);

 // export the server for testing
  module.exports = server;

}.call(this));



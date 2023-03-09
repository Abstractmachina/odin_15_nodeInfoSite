var http = require('http');
const fs = require('fs')

const express = require('express');

const server = http.createServer(function (req, res) {
  res.setHeader('Content-Type', 'text/html');

  let path = './';
  switch (req.url) {
    case '/':
      path += 'index.html';
      break;
    case '/about':
      path += 'about.html';
      break;
    case '/contact':
      path += 'contact-me.html';
      break;
    default:
      path += '404.html';
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end(); 
    } else {
      res.end(data);
    }
  })
})

server.listen(8080, 'localhost', () => {
  console.log("listening on port 8080")
}); 
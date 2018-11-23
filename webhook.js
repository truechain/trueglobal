'use strict';
const http = require('http');
const axios = require('axios');
const createHandler = require('github-webhook-handler');
const { spawn } = require('child_process');
const handler = createHandler({
  path: '/webhook',
  secret: 'true_global_1380',
});

const runCommand = (cmd, args, callback) => {
  const child = spawn(cmd, args);
  let response = '';
  child.stdout.on('data', buffer => {
    response += buffer.toString();
  });
  child.stdout.on('end', () => callback(response));
};

http.createServer(function(req, res) {
  handler(req, res, function(err) {
    res.statusCode = 404;
    res.end('no such location');
  });
}).listen(7775);

handler.on('error', function(err) {
  console.error('Error:', err.message);
});

handler.on('push', function(event) {
  console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref);
  if (event.payload.ref === 'refs/heads/master') {
    console.log('Start run command on => MASTER');
    runCommand('sh', [ './auto_deploy.sh' ], txt => {
      console.log(txt);
    });
  } else if (event.payload.ref === 'refs/heads/server') {
    console.log('Start run command on => SERVER');
    axios.get('http://47.91.233.146:7776/')
      .then(response => {
        console.log(response.data, 'server');
      })
      .catch(error => {
        console.log(error);
      });
  } else {
    console.log('Not the master branch, will not trigger');
  }
});

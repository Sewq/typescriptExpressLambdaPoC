const serverless = require('serverless-http');
const { ExampleServer } = require('./dist/ExpressServer');

const server = new ExampleServer();
const handler = serverless(server.getServerApplication());
module.exports.server = async (event, context) => {
  return await handler(event, context);
};

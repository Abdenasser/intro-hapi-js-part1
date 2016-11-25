import Hapi from 'hapi';

const server = new Hapi.Server();

server.connection( {
  port: 8080
});

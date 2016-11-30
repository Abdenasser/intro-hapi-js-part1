import Hapi from 'hapi';

const server = new Hapi.Server();

server.connection( {
  host: 'localhost',
  port: 8080
});

server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }

    server.route( {

      method: 'GET',
      path: '/',
      handler: (request, reply) => {
        reply('Hello world!');
      }

    });

//    server.route( {
//
//      method: 'GET',
//      path: '/{name}',
//      handler: (request, reply) => {
//        reply(`Hello ${encodeURIComponent(request.params.name)} !`);
//      }
//
//    });

    server.route( {

      method: ['POST', 'PUT'],
      path: '/gotcha',
      handler: (request, reply) => {
        reply(`You sent me a ${encodeURIComponent(request.method)} method!`)
      }

    });

    server.route({
        method: 'GET',
        path: '/screenshot',
        handler: function (request, reply) {
            reply.file('public/screenshot.png');
        }
    });

    server.start((err) => {

        if (err) {
            throw err;
        }

        console.log('Server running at:', server.info.uri);
    });
});

import Hapi from 'hapi';

const server = new Hapi.Server();

server.connection( {
  host: 'localhost',
  port: 8080
});

server.route( {

  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply('Hello world!');
  }

});

server.route( {

  method: 'GET',
  path: '/{name}',
  handler: (request, reply) => {
    reply(`Hello ${encodeURIComponent(request.params.name)} !`);
  }
})

server.start(err => {

    if (err) {

        // Fancy error handling here
        console.error( 'Error was handled!' );
        console.error( err );

    }

    console.log( `Server started at ${ server.info.uri }` );

});

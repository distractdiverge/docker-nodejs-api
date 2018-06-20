const fastify = require('fastify');
const config = require('./config');

const app = fastify({
    logger: true,
});

app.get('/', async (request, reply) => {
    return { hello: 'world' };
});

app.post('/echo', async (request, reply) => {
   return {
       timestamp: (new Date()),
       body: request.body,
   }
});


async function start() {
    try {
        await app.listen(config.port, config.host);
        app.log.info(`server listening on ${app.server.address().port}`);
    } catch (err) {
        app.log.error(err)
        process.exit(1);
    }
};

start();
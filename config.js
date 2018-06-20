const envalid = require('envalid');

const variables = {
    PORT: envalid.port({
      desc: 'the port to listen for incoming requests on.',
      default: 8000,
    }),
    HOST: envalid.host({
        desc: 'the host address to listen on.',
        default: '127.0.0.1',
    })
};

const transformer = env => ({
    port: env.PORT,
    host: env.HOST,
});

module.exports = envalid.cleanEnv(process.env, variables, {transformer});
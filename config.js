const envalid = require('envalid');

const variables = {
    PORT: envalid.port({
      desc: 'the port to listen for incoming requests on.',
      default: 8000,
    })
};

const transformer = env => ({
    port: env.PORT,
});

module.exports = envalid.cleanEnv(process.env, variables, {transformer});
import 'reflect-metadata';
import createServer from './server';
import log from './logger';

const run = async () => {
  try {
    const server = await createServer();
    const { url } = await server.listen({ port: 3000 });
    log.info(`🚀 Server ready at ${url}`);
    
  } catch(e) {
    log.error(e)
  }
}

run();

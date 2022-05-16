'use strict';

require( 'dotenv' ).config();

const {
    PORT,
    APP_ADDRESS,
    APP_WEBHOOK
} = process.env;

const http = require( 'http' );
const app = require( './app.js' );
const bot = require( './bot.js' );

const server = http.createServer( app );

app.use( bot.webhookCallback( APP_WEBHOOK ) );
bot.telegram.setWebhook( APP_ADDRESS + APP_WEBHOOK )
    .catch( handleError );

server.listen( PORT, () => {
    const { port, address } = server.address();
    console.log( `Server listening ${address} on port ${port}` );
});

bot.catch( handleError );

process.on( 'uncaughtException', handleError );

function handleError( err ) {
    console.error( err );
    setTimeout( () => {
        process.exit( 1 );
    }, 1000 ).unref();
    bot.stop();
    server.close();
}
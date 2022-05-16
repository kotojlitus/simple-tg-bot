'use strict';

const {
    BOT_TOKEN,
    PROXY_HOST,
    PROXY_PORT,
} = process.env;

const Telegraf = require( 'telegraf' );
const composer = require( './bot/composer' );
const session = require( 'telegraf/session.js' );
const HttpsProxyAgent = require( 'https-proxy-agent' );

let agent = null;

if( PROXY_HOST ) {
    agent = new HttpsProxyAgent({ host: PROXY_HOST, port: PROXY_PORT });
}

const bot = new Telegraf( BOT_TOKEN, { telegram: { agent } } );

bot.use( session() );

bot.use( composer );

module.exports = bot;
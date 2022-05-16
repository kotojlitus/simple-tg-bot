'use strict';

const { Composer } = require( 'telegraf' );
const trading = require( '../handlers/trading.js' );

const composer = new Composer();

composer.hears( 'Trading', trading.trading );
composer.action( 'Buy', trading.buy );
composer.action( 'Sell', trading.sell );

module.exports = composer;
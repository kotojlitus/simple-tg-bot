'use strict';

const { Composer } = require( 'telegraf' );
const start = require( './start.js' );
const wallet = require( './wallet.js' );
const trading = require( './trading.js' );

const composer = new Composer();

composer.use( start );
composer.use( wallet );
composer.use( trading );

module.exports = composer;
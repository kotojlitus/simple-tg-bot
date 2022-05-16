'use strict';

const { Composer } = require( 'telegraf' );
const start = require( '../handlers/start.js' );

const composer = new Composer();

composer.start( start );

module.exports = composer;
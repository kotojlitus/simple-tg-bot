'use strict';

const { Composer } = require( 'telegraf' );
const withdrawal = require( './withdrawal.js' );
const wallet = require( '../handlers/wallet.js' );

const composer = new Composer();

composer.use( withdrawal );

composer.hears( 'Wallet', wallet.wallet );
composer.action( 'Deposit',wallet.deposit );
composer.action( 'Withdrawal', wallet.withdrawal );

module.exports = composer;
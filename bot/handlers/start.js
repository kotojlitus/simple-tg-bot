'use strict';

const { Markup } = require( 'telegraf' );

function start( ctx ) {
    console.log( 'Starting...' );
    console.log( ctx.from );
    return ctx.reply( 'Welcome!', Markup
        .keyboard( [
            ['Wallet', 'Trading'],
            // ['3', '4']
        ])
        .resize()
        .extra()
    );
}

module.exports = start;
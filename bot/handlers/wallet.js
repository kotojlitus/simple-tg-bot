'use strict';

const { Markup } = require( 'telegraf' );

function wallet( ctx ) {
    console.log( 'Wallet' );
    return ctx.reply( 'Your wallet', Markup
        .inlineKeyboard( [
            Markup.callbackButton( 'Deposit', 'Deposit' ),
            Markup.callbackButton( 'Withdrawal', 'Withdrawal' )
        ])
        .extra()
    );
}

function deposit( ctx ) {
    console.log( 'Deposit' );
    return ctx.answerCbQuery()
        .then( () => ctx.reply( 'Deposit' ) )
        .then( () => ctx.reply( 'Deposit reply' ) );
}

function withdrawal( ctx ) {
    console.log( 'Withdrawal' );
    ctx.scene.enter( 'withdrawal' );
    return ctx.answerCbQuery();
}

module.exports = {
    wallet,
    deposit,
    withdrawal
};
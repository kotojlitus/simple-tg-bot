'use strict';

const { Markup } = require( 'telegraf' );

const tradingKeyboard = Markup
    .inlineKeyboard( [
        Markup.callbackButton( 'Buy', 'Buy' ),
        Markup.callbackButton( 'Sell', 'Sell' )
    ])
    .extra();

function trading( ctx ) {
    console.log( 'Trading' );
    return ctx.reply( 'Trading', tradingKeyboard );
}

function buy( ctx ) {
    console.log( 'Buy' );

    // return ctx.answerCbQuery()
    //     .then( () => ctx.editMessageText( 'edited Buy', tradingKeyboard ) );

    // return Promise.all( [
    //     ctx.answerCbQuery(),
    //     ctx.editMessageText( 'edited Buy', tradingKeyboard )
    // ]);

    return ctx.editMessageText( 'edited Buy', tradingKeyboard )
        .then( () => ctx.answerCbQuery() );
}

function sell( ctx ) {
    console.log( 'Sell' );
    // return ctx.answerCbQuery()
    //     .then( () => ctx.editMessageText( 'edited Sell', tradingKeyboard ) );

    return ctx.editMessageText( 'edited Sell', tradingKeyboard )
        .then( () => ctx.answerCbQuery() );
}

module.exports = {
    trading,
    buy,
    sell
};
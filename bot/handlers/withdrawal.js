'use strict';

const { Markup } = require( 'telegraf' );

const keyboard = Markup
    .keyboard( [
        ['⬅ Back']
    ])
    .resize()
    .extra();

const mainKeyboard = Markup
    .keyboard( [
        ['Wallet', 'Trading']
    ])
    .resize()
    .extra();

async function start( ctx ) {
    console.log( 'Withdrawal start' );
    ctx.session.withdrawal = {};
    ctx.reply( 'Enter your withdrawal address', keyboard );
    return ctx.wizard.next();
}

async function address( ctx ) {
    console.log( 'Withdrawal address' );
    const address = ctx.message.text;
    if( !/^[a-zA-Z]*$/.test( address ) ) {
        ctx.reply( 'Invalid address', mainKeyboard );
        return ctx.scene.leave();
    }
    ctx.session.withdrawal.address = address;
    ctx.reply( 'Enter withdrawal amount' );
    return ctx.wizard.next();
}

async function amount( ctx ) {
    console.log( 'Withdrawal amount' );
    // console.log( `address: ${ctx.session.withdrawal.address}` );
    const amount = ctx.message.text;
    const address = ctx.session.withdrawal.address;
    if( !address || !/^[0-9\.]*$/.test( amount ) ) {
        ctx.reply( 'Invalid amount', mainKeyboard );
        return ctx.scene.leave();
    }
    ctx.reply( `Requested withdrawal ${amount} to address ${address}`, mainKeyboard );
    return ctx.scene.leave();
}

async function back( ctx ) {
    console.log( 'Withdrawal back' );
    ctx.reply( 'Back', mainKeyboard );
    return ctx.scene.leave();
}

module.exports = {
    start,
    address,
    amount,
    back
};
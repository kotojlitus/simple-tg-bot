'use strict';

const { Composer } = require( 'telegraf' );
const Stage = require( 'telegraf/stage.js' );
const SceneWizard = require( 'telegraf/scenes/wizard' );
const withdrawal = require( '../handlers/withdrawal.js' );

const composer = new Composer();

const sceneWizard = new SceneWizard( 'withdrawal',
    withdrawal.start,
    withdrawal.address,
    withdrawal.amount
);

const stage = new Stage([ sceneWizard ]);
stage.hears( '⬅ Back', withdrawal.back );

composer.use( stage.middleware() );

module.exports = composer;
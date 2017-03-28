'use strict';

const moduleRegistry = require('./modules/');
const ComponentReveal = require('./modules/componentReveal/componentReveal.main');
const componentReveal = new ComponentReveal();

moduleRegistry.init();

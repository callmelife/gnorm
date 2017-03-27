'use strict';

module.exports = ($el) => {

  require.ensure([], (require) => {

    let Module = require('./componentReveal.main');
    new Module($el);

  });

};

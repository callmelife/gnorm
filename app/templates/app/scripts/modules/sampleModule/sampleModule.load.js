'use strict';

module.exports = ($el) => {
  
  require.ensure([], (require) => {
  
    let Module = require('./sampleModule.main');
    new Module($el);
    
  });
  
};

'use strict';

import $ from 'jquery';

module.exports = {
  init: function() {
    $('[data-module]').each((i, v) => {
      let name = $(v).data('module');
      this.modules[name]($(v));
    });
  },
  modules: {
    componentReveal: require('./componentReveal/componentReveal.load')
  }

};

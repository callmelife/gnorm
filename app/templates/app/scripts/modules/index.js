'use strict';

import $ from 'jquery';

module.exports = {
  init: () => {
    $('[data-module]').each((i, v) => {
      this.name = $(v).data('module');
      this.module = this.modules[this.name]($(v));
    });
  },
  
  modules: {
    componentReveal: require('./componentReveal/componentReveal.load')
  }

};

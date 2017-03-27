'use strict';

import $ from 'jquery';

module.exports = class ComponentReveal {
  constructor($el) {
    this.host = window.location.host;
    this.search = window.location.search;

    if (this.hostCheck('localhost', host) || this.hostCheck('phpstage', host)) {
      if (this.search !== '') {
        let search = this.search.split('?r=');
        this.$revealTarget = $('' + search[1] + '');
        if (this.$revealTarget.length > 0) {
          $('<div class="reveal-overlay"></div>').appendTo('body');
          $('body').addClass('reveal-adjust');
          this.$revealTarget.addClass('reveal');
        }
      }
    }
  }

  hostCheck(urlTarget, hostToCheck) {
    var innerHost = hostToCheck.match(urlTarget);
    if (innerHost !== null) {
      return true;
    }
  };
};

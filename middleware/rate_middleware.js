module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');

  class RateMiddleware {

    constructor(period, frequency) {

      this.period = period;
      this.frequency = frequency;

    }

    exec(controller, callback) {

      let name = controller.constructor.name;
      let list = controller.constructor.rateList = controller.constructor.rateList || {};

      let ip = controller.params.remoteAddress;
      let time = new Date().valueOf();

      let item = {
        ip: ip,
        time: time,
        prev: list[name] || null
      };

      let check = item;
      let count = 0;

      while (check = check.prev) {

        if (time - check.time > this.period * 1000) {
          check.prev = null;
          break;
        }

        if (check.ip === ip) {
          count++;
          if (count >= this.frequency) {
            return callback(
              new Error(`Rate limit exceeded. Rate is ${this.frequency} requests per ${this.period} seconds.`)
            );
          }
        }

      }

      list[name] = item;

      callback(null);

    }

  }

  return RateMiddleware;

})();

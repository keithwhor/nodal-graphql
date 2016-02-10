module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const GraphQuery = Nodal.GraphQuery;

  const RateMiddleware = Nodal.require('middleware/rate_middleware.js');

  class GraphController extends Nodal.Controller {

    before() {

      this.middleware.use(RateMiddleware, 60, 30);

    }

    post() {

      let str = this.params.buffer.toString();

      GraphQuery.query(str, 5, (err, models, format) => {

        this.respond(err || models, format);

      });

    }

  }

  return GraphController;

})();

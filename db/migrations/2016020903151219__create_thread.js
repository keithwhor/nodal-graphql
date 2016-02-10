module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateThread extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016020903151219;
    }

    up() {

      return [
        this.createTable("threads", [{"name":"user_id","type":"int"},{"name":"title","type":"string"}])
      ];

    }

    down() {

      return [
        this.dropTable("threads")
      ];

    }

  }

  return CreateThread;

})();

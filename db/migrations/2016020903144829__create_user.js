module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateUser extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016020903144829;
    }

    up() {

      return [
        this.createTable("users", [{"name":"username","type":"string"},{"name":"email","type":"string"},{"name":"age","type":"int"}])
      ];

    }

    down() {

      return [
        this.dropTable("users")
      ];

    }

  }

  return CreateUser;

})();

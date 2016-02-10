module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreatePost extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016020903154054;
    }

    up() {

      return [
        this.createTable("posts", [{"name":"user_id","type":"int"},{"name":"thread_id","type":"int"},{"name":"body","type":"string"}])
      ];

    }

    down() {

      return [
        this.dropTable("posts")
      ];

    }

  }

  return CreatePost;

})();

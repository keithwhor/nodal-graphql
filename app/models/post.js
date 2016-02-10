module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');

  const User = Nodal.require('app/models/user.js');
  const Thread = Nodal.require('app/models/thread.js');

  class Post extends Nodal.Model {}

  Post.setDatabase(Nodal.require('db/main.js'));
  Post.setSchema(Nodal.my.Schema.models.Post);

  Post.joinsTo(User, {multiple: true});
  Post.joinsTo(Thread, {multiple: true});

  return Post;

})();

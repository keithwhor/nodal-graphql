module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');

  const User = Nodal.require('app/models/user.js');
  const Post = Nodal.require('app/models/post.js');

  class Thread extends Nodal.Model {}

  Thread.setDatabase(Nodal.require('db/main.js'));
  Thread.setSchema(Nodal.my.Schema.models.Thread);

  Thread.joinsTo(User, {multiple: true});
  Thread.joinedBy(Post, {multiple: true});

  return Thread;

})();

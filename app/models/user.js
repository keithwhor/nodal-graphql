module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');

  const Thread = Nodal.require('app/models/thread.js');
  const Post = Nodal.require('app/models/post.js');

  class User extends Nodal.Model {}

  User.setDatabase(Nodal.require('db/main.js'));
  User.setSchema(Nodal.my.Schema.models.User);

  User.joinedBy(Thread, {multiple: true});
  User.joinedBy(Post, {multiple: true});

  return User;

})();

const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

User.hasMany(Post, { foreignKey: "owner_id" });
Post.belongsTo(User, { foreignKey: "owner_id" });

User.hasMany(Post, { foreignKey: "attendee" });
Comment.belongsTo(User, { foreignKey: "attendee" });
Comment.belongsTo(Post, { foreignKey: "attendee" });
Post.hasMany(Comment, { foreignKey: "attendee" });

module.exports = {
  User,
  Post,
  Comment,
};

const User = require("./User");
const Post = require("./Post");
// const EventTags = require("./EventTags");
// const Events = require("./Events");

User.hasMany(Post, { foreignKey: "owner_id" });
Post.belongsTo(User, { foreignKey: "owner_id" });

User.hasMany(Post, { foreignKey: "attendee" });
// EventAttend.belongsTo(User, { foreignKey: "attendee" });

// Events.hasMany(EventAttend, { foreignKey: "event_id" });
// EventAttend.belongsTo(Events, { foreignKey: "event_id" });

// EventTags.hasMany(Events, { foreignKey: "tag_id" });
// Events.belongsTo(EventTags, { foreignKey: "tag_id" });

module.exports = {
  User,
  Post,
  // EventAttend,
  // EventTags,
};

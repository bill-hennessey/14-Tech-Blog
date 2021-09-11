const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Post extends Model {}

Post.init(
  {
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    owner_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "user_id",
      },
    },
    post_text: {
      type: DataTypes.STRING(1500),
      references: {
        model: "eventtags",
        key: "tag_id",
      },
    },
    post_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    post_title: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: false,
    modelName: "events",
  }
);

module.exports = Events;

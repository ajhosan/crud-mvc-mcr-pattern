'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_game_histories extends Model {
    static associate({ User }) {
      // define association here
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  User_game_histories.init(
    {
      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'user_game_histories',
      modelName: 'User_game_histories',
    }
  );
  return User_game_histories;
};

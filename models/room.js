'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    static associate(models) {
      // define association here
    }

    static createRoom = ({ name, player1Id }) => {
      return this.create({
        name,
        player1Id,
      });
    };
  }
  Room.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      player1Id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      player2Id: {
        type: DataTypes.UUID,
      },
      player1Choices: {
        type: DataTypes.ARRAY(DataTypes.ENUM(['R', 'P', 'S'])),
        defaultValue: [],
      },
      player2Choices: {
        type: DataTypes.ARRAY(DataTypes.ENUM(['R', 'P', 'S'])),
        defaultValue: [],
      },
      matchInfo: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      winnerId: {
        type: DataTypes.UUID,
      },
    },
    {
      sequelize,
      modelName: 'Room',
      tableName: 'rooms',
    }
  );
  return Room;
};

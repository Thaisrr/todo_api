'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.table, {
        foreignKey: {
          name: 'user_id'
        },
        sourceKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        as: 'tables'
      });
      User.belongsToMany(models.table, {
        through: 'tables_collaborators',
        foreignKey: 'collaborator_id',
        otherKey: 'table_id',
        as: 'collaborators'
      });
      User.belongsToMany(models.Todo, {
        through: 'todos_assignees',
        foreignKey: 'user_id',
        otherKey: 'todo_id',
        as: 'assignees'
      })
    }
  };
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    table_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

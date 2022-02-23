'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    static associate(models) {
      Todo.hasMany(models.User, {
        foreignKey: 'table_id',
        sourceKey: 'table_id'
      });
      Todo.hasMany(models.label);
      Todo.belongsTo(models.table);
    }
  };
  Todo.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    table_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};

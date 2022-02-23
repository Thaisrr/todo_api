'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Label extends Model {
    static associate(models) {
      Label.belongsTo(models.table);
      Label.belongsToMany(models.Todo, {
        through: 'todos_labels',
        foreignKey: 'label_id',
        otherKey: 'todo_id',
        as: 'labels'
      })
    }
  };
  Label.init({
    name: DataTypes.STRING,
    color: DataTypes.STRING,
    table_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'label',
  });
  return Label;
};

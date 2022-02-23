'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Table extends Model {
    static associate(models) {
      Table.belongsTo(models.User);
      Table.hasMany(models.User)
      Table.hasMany(models.Todo, {
        foreignKey: 'table_id',
        sourceKey: 'table_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });
      Table.hasMany(models.label, {
        foreignKey: 'table_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  };
  Table.init({
    name: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'table',
  });
  return Table;
};

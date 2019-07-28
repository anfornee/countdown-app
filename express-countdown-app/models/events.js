/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('events', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      "autoIncrement": true
    },
    Title: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Day: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Month: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Year: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Deleted: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Background: {
      type: DataTypes.STRING(10000),
      allowNull: true
    }
  }, {
    tableName: 'events'
  });
};

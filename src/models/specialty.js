'use strict';
const { BOOLEAN } = require('sequelize');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Specialty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) { //dinh danh cac moi quan he

      // Specialty.hasMany(models.Doctor_Infor, { foreignKey: 'specialtyId', as: 'doctorInfo' }); // tự làm

    }
  };
  Specialty.init({
    name: DataTypes.STRING,
    descriptionMarkdown: DataTypes.TEXT,
    descriptionHTML: DataTypes.TEXT,
    image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Specialty',
  });
  return Specialty;
};
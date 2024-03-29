const sequelize = require('../config/db')
const { DataTypes } = require('sequelize')

/*
* Modelo de demanda el cual contiene los atributos de una demanda 
* y establece las relaciones con el modelo de proceso judicial
*/
const demanda = sequelize.define('demanda', {
  id_demanda: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  id_proceso_judicial: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'proceso_judicial',
      key: 'id_proceso_judicial'
    }
  },
  tipo_demanda: {
    type: DataTypes.STRING(25),
    allowNull: true
  },
  descripcion_demanda: {
    type: DataTypes.STRING(200),
    allowNull: true
  },
  fecha_demanda: {
    type: DataTypes.DATEONLY,
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'demanda',
  timestamps: false,
  indexes: [
    {
      name: 'PRIMARY',
      unique: true,
      using: 'BTREE',
      fields: [
        { name: 'id_demanda' }
      ]
    },
    {
      name: 'id_proceso_judicial',
      using: 'BTREE',
      fields: [
        { name: 'id_proceso_judicial' }
      ]
    }
  ]
})

module.exports = demanda

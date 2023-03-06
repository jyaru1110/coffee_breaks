const { DataTypes } = require('sequelize');
var sequelize = require('../database/database');

const Servicios_dia = sequelize.define('servicios_dia', {
    // Atributos del modelo
    id_horario: {
        type: DataTypes.INTEGER,
        references: {
            model: 'horario',
            key: 'id_horario'
        }
    },
    no_clase: {
        type: DataTypes.STRING,
        references: {
            model: 'clase',
            key: 'no_clase'
        }
    },
    dia: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    hora_inicio: {
        type: DataTypes.TIME,
        allowNull: false
    },
    hora_fin: {
        type: DataTypes.TIME,
        allowNull: false
    },
    programa: {
        type: DataTypes.STRING,
        references: {
            model: 'programa',
            key: 'programa'
        }
    },
    salon: {
        type: DataTypes.STRING,
        references: {
            model: 'salon',
            key: 'salon'
        }
    }
}, {
    // Opciones del modelo
    tableName: 'servicios_dia',
    timestamps: false
});

module.exports = Servicios_dia;
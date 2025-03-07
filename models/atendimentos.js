const db = require("../database")
const { DataTypes } = require("sequelize")
const Psicologos = require("./Psicologos")
const Pacientes = require("./Pacientes")

const Atendimentos = db.define(
    "Atendimentos", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: "ID"
        },
        data_atendimento: {
            type: DataTypes.DATE,
            field: "Data"
        },
        observacao: {
            type: DataTypes.STRING,
            field: "Observação"
        },
        psicologos_id1: {
            type: DataTypes.INTEGER,
            references: {
                model: Psicologos,
                key: 'id'
            }
        },
        pacientes_id:{
            type: DataTypes.INTEGER,
            references: {
                model: Pacientes,
                key: 'id'
            }
        }
    }, {
        tableName: "atendimentos",
        timestamps: false
    }
)
module.exports = Atendimentos
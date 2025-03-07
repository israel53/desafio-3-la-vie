const express = require("express");
const PsicologosController = require("../controllers/psicologos.controller")
const PacientesController = require("../controllers/pacientes.controller")
const cadastrarPsicologoValidation = require('../validations/psicologos/cadastrarPsicologoValidation');
const AuthController = require("../controllers/auth.controller");
const auth = require('../middleware/auth');

const routes = express.Router();

// Importar os controllers do porjeto exemplo linha abaixo
// const GenderController = require('../controllers/gender.controller');


// Rotas Login
routes.post('/login',AuthController.login);

// Rotas Psicologos
routes.get('/psicologos',PsicologosController.listarPsicologos);
routes.get('/psicologos/:id',PsicologosController.listarPsicologoId);
routes.post('/psicologos/cadastro',cadastrarPsicologoValidation ,PsicologosController.cadastrarPsicologo);
routes.put('/psicologos/:id/atualizar',PsicologosController.atualizarPsicologo);
routes.delete('/psicologos/:id/deletar',PsicologosController.deletarPsicologo);

// Rotas Pacientes
routes.get('/pacientes/',PacientesController.listarPacientes);
routes.get('/pacientes/:id',PacientesController.listarPacienteId);
routes.post('/pacientes/cadastrar',PacientesController.cadastrarPaciente);
routes.put('/pacientes/:id/atualizar',PacientesController.atualizarPaciente);
routes.delete('/pacientes/:id/deletar',PacientesController.deletarPaciente);

// Rotas Atendimentos
// routes.get('/atendimentos/:id',AtendimentosController.exemplo2);
// routes.post('/atendimentos',AtendimentosController.exemplo3);


module.exports = routes;

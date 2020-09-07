"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const preguntaController_1 = require("../controllers/preguntaController");
class PreguntaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', preguntaController_1.preguntaController.list);
        this.router.get('/:id', preguntaController_1.preguntaController.getOne);
        this.router.get('/dificultad/:dif', preguntaController_1.preguntaController.difficulty);
        this.router.post('/', preguntaController_1.preguntaController.create);
        this.router.put('/:id', preguntaController_1.preguntaController.update);
        this.router.delete('/:id', preguntaController_1.preguntaController.delete);
    }
}
const preguntaRoutes = new PreguntaRoutes();
exports.default = preguntaRoutes.router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const examenController_1 = require("../controllers/examenController");
class ExamenRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', examenController_1.examenController.list);
        this.router.get('/:id', examenController_1.examenController.getOne);
        this.router.post('/', examenController_1.examenController.create);
        this.router.put('/:id', examenController_1.examenController.update);
        this.router.delete('/:id', examenController_1.examenController.delete);
    }
}
const examenRoutes = new ExamenRoutes();
exports.default = examenRoutes.router;

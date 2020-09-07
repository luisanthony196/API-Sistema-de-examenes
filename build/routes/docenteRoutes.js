"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const docenteController_1 = require("../controllers/docenteController");
class DocenteRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', docenteController_1.docenteController.list);
        this.router.get('/:id', docenteController_1.docenteController.getOne);
        this.router.post('/', docenteController_1.docenteController.create);
        this.router.put('/:id', docenteController_1.docenteController.update);
        this.router.delete('/:id', docenteController_1.docenteController.delete);
    }
}
const docenteRoutes = new DocenteRoutes();
exports.default = docenteRoutes.router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.indexController.list);
        this.router.get('/:id', indexController_1.indexController.getOne);
        this.router.post('/', indexController_1.indexController.create);
        this.router.put('/:id', indexController_1.indexController.update);
        this.router.delete('/:id', indexController_1.indexController.delete);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;

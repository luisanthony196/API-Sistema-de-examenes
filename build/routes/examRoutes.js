"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const examController_1 = require("../controllers/examController");
class ExamRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', examController_1.examController.list);
        this.router.get('/:id', examController_1.examController.getOne);
        this.router.post('/', examController_1.examController.create);
        this.router.put('/:id', examController_1.examController.update);
        this.router.delete('/:id', examController_1.examController.delete);
    }
}
const examRoutes = new ExamRoutes();
exports.default = examRoutes.router;

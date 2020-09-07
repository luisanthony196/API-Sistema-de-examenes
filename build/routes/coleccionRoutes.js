"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const collectionController_1 = require("../controllers/collectionController");
class CollectionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', collectionController_1.collectionController.list);
        this.router.get('/:id', collectionController_1.collectionController.getOne);
        this.router.post('/', collectionController_1.collectionController.create);
        this.router.put('/:id', collectionController_1.collectionController.update);
        this.router.delete('/:id', collectionController_1.collectionController.delete);
    }
}
const collectionRoutes = new CollectionRoutes();
exports.default = collectionRoutes.router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
const database_1 = __importDefault(require("../database"));
class IndexController {
    list(req, res) {
        database_1.default.ref('contacts').once("value", (snapshot) => {
            console.log(snapshot.val());
            res.json(snapshot);
        });
    }
    getOne(req, res) {
        database_1.default.ref('contacts').child(req.params.id).once("value", (snapshot) => {
            res.json(snapshot);
        });
    }
    create(req, res) {
        database_1.default.ref('contacts').push(req.body);
        res.redirect('/api/contacts');
    }
    update(req, res) {
        database_1.default.ref('contacts').child(req.params.id).set(req.body);
        res.redirect('/api/contacts');
    }
    delete(req, res) {
        database_1.default.ref('contacts').child(req.params.id).remove();
        res.redirect('/api/contacts');
    }
}
exports.indexController = new IndexController();

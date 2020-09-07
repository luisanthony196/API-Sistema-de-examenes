"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.docenteController = void 0;
const database_1 = __importDefault(require("../database"));
class DocenteController {
    list(req, res) {
        database_1.default.ref('docente').once("value", (snapshot) => {
            console.log(snapshot.val());
            res.json(snapshot);
        });
    }
    getOne(req, res) {
        database_1.default.ref('docente').child(req.params.id).once("value", (snapshot) => {
            res.json(snapshot);
        });
    }
    create(req, res) {
        database_1.default.ref('docente').push(req.body);
        res.redirect('/api/docente');
    }
    update(req, res) {
        database_1.default.ref('docente').child(req.params.id).set(req.body);
        res.redirect('/api/docente');
    }
    delete(req, res) {
        database_1.default.ref('docente').child(req.params.id).remove();
        res.redirect('/api/docente');
    }
}
exports.docenteController = new DocenteController();

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.examenController = void 0;
const database_1 = __importDefault(require("../database"));
class ExamenController {
    list(req, res) {
        database_1.default.ref('examen').once("value", (snapshot) => {
            console.log(snapshot.val());
            res.json(snapshot);
        });
    }
    getOne(req, res) {
        database_1.default.ref('examen').child(req.params.id).once("value", (snapshot) => {
            res.json(snapshot);
        });
    }
    create(req, res) {
        database_1.default.ref('examen').push(req.body);
        res.redirect('/api/examen');
    }
    update(req, res) {
        database_1.default.ref('examen').child(req.params.id).set(req.body);
        res.redirect('/api/examen');
    }
    delete(req, res) {
        database_1.default.ref('examen').child(req.params.id).remove();
        res.redirect('/api/examen');
    }
}
exports.examenController = new ExamenController();

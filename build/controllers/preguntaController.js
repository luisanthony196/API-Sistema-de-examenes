"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.preguntaController = void 0;
const database_1 = __importDefault(require("../database"));
class PreguntaController {
    list(req, res) {
        database_1.default.ref('pregunta').once("value", (snapshot) => {
            console.log(snapshot.val());
            res.json(snapshot);
        });
    }
    getOne(req, res) {
        database_1.default.ref('pregunta').child(req.params.id).once("value", (snapshot) => {
            res.json(snapshot);
        });
    }
    difficulty(req, res) {
        var dif = +req.params.dif;
        database_1.default.ref('pregunta').orderByChild("dificultad").equalTo(dif).once("value", (snapshot) => {
            res.json(snapshot);
        });
    }
    create(req, res) {
        database_1.default.ref('pregunta').push(req.body);
        res.redirect('/api/pregunta');
    }
    update(req, res) {
        database_1.default.ref('pregunta').child(req.params.id).set(req.body);
        res.redirect('/api/pregunta');
    }
    delete(req, res) {
        database_1.default.ref('pregunta').child(req.params.id).remove();
        res.redirect('/api/pregunta');
    }
}
exports.preguntaController = new PreguntaController();

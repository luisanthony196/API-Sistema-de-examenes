import {Request, Response} from 'express';

import db from '../database';

class PreguntaController {

    public list (req: Request, res: Response) {
        db.ref('pregunta').once("value", (snapshot: any) => {
            console.log(snapshot.val());
            res.json(snapshot);
        });
    }

    public getOne (req: Request, res: Response) {
        db.ref('pregunta').child(req.params.id).once("value", (snapshot: any) => {
            res.json(snapshot);
        });
    }

    public difficulty (req: Request, res: Response) {
        var dif: number = +req.params.dif;
        db.ref('pregunta').orderByChild("dificultad").equalTo(dif).once("value", (snapshot: any) => {
            res.json(snapshot);
        });
    }

    public create (req: Request, res: Response) {
        db.ref('pregunta').push(req.body);
        res.redirect('/api/pregunta');
    }

    public update (req: Request, res: Response) {
        db.ref('pregunta').child(req.params.id).set(req.body);
        res.redirect('/api/pregunta')
    }

    public delete (req: Request, res: Response) {
        db.ref('pregunta').child(req.params.id).remove();
        res.redirect('/api/pregunta');
    }
}

export const preguntaController = new PreguntaController();


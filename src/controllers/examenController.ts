import {Request, Response} from 'express';

import db from '../database';

class ExamenController {

    public list (req: Request, res: Response) {
        db.ref('examen').once("value", (snapshot: any) => {
            console.log(snapshot.val());
            res.json(snapshot);
        });
    }

    public getOne (req: Request, res: Response) {
        db.ref('examen').child(req.params.id).once("value", (snapshot: any) => {
            res.json(snapshot);
        });
    }

    public create (req: Request, res: Response) {
        db.ref('examen').push(req.body);
        res.redirect('/api/examen');
    }

    public update (req: Request, res: Response) {
        db.ref('examen').child(req.params.id).set(req.body);
        res.redirect('/api/examen')
    }

    public delete (req: Request, res: Response) {
        db.ref('examen').child(req.params.id).remove();
        res.redirect('/api/examen');
    }
}

export const examenController = new ExamenController();


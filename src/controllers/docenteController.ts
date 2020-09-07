import {Request, Response} from 'express';

import db from '../database';

class DocenteController {

    public list (req: Request, res: Response) {
        db.ref('docente').once("value", (snapshot: any) => {
            console.log(snapshot.val());
            res.json(snapshot);
        });
    }

    public getOne (req: Request, res: Response) {
        db.ref('docente').child(req.params.id).once("value", (snapshot: any) => {
            res.json(snapshot);
        });
    }

    public create (req: Request, res: Response) {
        db.ref('docente').push(req.body);
        res.redirect('/api/docente');
    }

    public update (req: Request, res: Response) {
        db.ref('docente').child(req.params.id).set(req.body);
        res.redirect('/api/docente')
    }

    public delete (req: Request, res: Response) {
        db.ref('docente').child(req.params.id).remove();
        res.redirect('/api/docente');
    }
}

export const docenteController = new DocenteController();


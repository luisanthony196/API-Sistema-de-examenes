import {Request, Response} from 'express';

import db from '../database';

class IndexController {

    public list (req: Request, res: Response) {
        db.ref('contacts').once("value", (snapshot: any) => {
            console.log(snapshot.val());
            res.json(snapshot);
        });
    }

    public getOne (req: Request, res: Response) {
        db.ref('contacts').child(req.params.id).once("value", (snapshot: any) => {
            res.json(snapshot);
        });
    }

    public create (req: Request, res: Response) {
        db.ref('contacts').push(req.body);
        res.redirect('/api/contacts');
    }

    public update (req: Request, res: Response) {
        db.ref('contacts').child(req.params.id).set(req.body);
        res.redirect('/api/contacts')
    }

    public delete (req: Request, res: Response) {
        db.ref('contacts').child(req.params.id).remove();
        res.redirect('/api/contacts');
    }
}

export const indexController = new IndexController();

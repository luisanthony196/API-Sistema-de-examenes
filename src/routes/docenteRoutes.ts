import { Router } from 'express';

import { docenteController } from '../controllers/docenteController';

class DocenteRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        this.router.get('/', docenteController.list);
        this.router.get('/:id', docenteController.getOne);
        this.router.post('/', docenteController.create);
        this.router.put('/:id', docenteController.update);
        this.router.delete('/:id', docenteController.delete);
    }
}

const docenteRoutes = new DocenteRoutes();
export default docenteRoutes.router;


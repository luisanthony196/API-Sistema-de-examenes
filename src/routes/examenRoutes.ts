import { Router } from 'express';

import { examenController } from '../controllers/examenController';

class ExamenRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        this.router.get('/', examenController.list);
        this.router.get('/:id', examenController.getOne);
        this.router.post('/', examenController.create);
        this.router.put('/:id', examenController.update);
        this.router.delete('/:id', examenController.delete);
    }
}

const examenRoutes = new ExamenRoutes();
export default examenRoutes.router;


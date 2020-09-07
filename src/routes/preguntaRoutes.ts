import { Router } from 'express';

import { preguntaController } from '../controllers/preguntaController';

class PreguntaRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        this.router.get('/', preguntaController.list);
        this.router.get('/:id', preguntaController.getOne);
        this.router.get('/dificultad/:dif', preguntaController.difficulty);
        this.router.post('/', preguntaController.create);
        this.router.put('/:id', preguntaController.update);
        this.router.delete('/:id', preguntaController.delete);
    }
}

const preguntaRoutes = new PreguntaRoutes();
export default preguntaRoutes.router;


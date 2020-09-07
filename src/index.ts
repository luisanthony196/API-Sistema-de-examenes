import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import preguntaRoutes from './routes/preguntaRoutes';
import docenteRoutes from './routes/docenteRoutes';
import examenRoutes from './routes/examenRoutes';

class Server {

    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3500);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/api/pregunta', preguntaRoutes);
        this.app.use('/api/docente', docenteRoutes);
        this.app.use('/api/examen', examenRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}

const server = new Server();

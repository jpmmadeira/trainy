import express from 'express';
import WorkoutsController from './controllers/WorkoutsController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();

const workoutsController = new WorkoutsController();
const connectionsController = new ConnectionsController();

routes.get('/workouts', workoutsController.index);
routes.post('/workouts', workoutsController.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;
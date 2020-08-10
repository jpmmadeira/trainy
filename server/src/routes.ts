import express from 'express';
import WorkoutsController from './controllers/WorkoutsController';

const routes = express.Router();
const workoutsController = new WorkoutsController();

routes.get('/workouts', workoutsController.index);
routes.post('/workouts', workoutsController.create);

export default routes;
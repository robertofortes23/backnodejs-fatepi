import { Router } from 'express';
import appointmentsRoutes from './appointments.routes';
import useRouter from './users.routes';

const routes = Router();

routes.use('/appointments', appointmentsRoutes);
routes.use('/users', useRouter);

export default routes;

import { Router } from "express";
import routerUsers from "@modules/user/routes/user.routes";
import routerCompany from "@modules/company/routes/company.routes";

const routes = Router();

routes.use('/users', routerUsers);
routes.use('/companies', routerCompany);



export default routes;
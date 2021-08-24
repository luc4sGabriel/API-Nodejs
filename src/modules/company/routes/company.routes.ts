import { Router } from "express";
import CompanyController from "../controllers/CompanyController";
import authentication from "src/middlewares/Authentication";
import { validateCreate } from '../validateParams/create';

const routerCompany = Router();

const companyController = new CompanyController();

routerCompany.get('/', companyController.index);
routerCompany.get('/:id', companyController.show);
routerCompany.post('/', authentication, validateCreate, companyController.create); 
routerCompany.put('/:id',authentication, companyController.update);
routerCompany.delete('/', companyController.delete);

export default routerCompany;

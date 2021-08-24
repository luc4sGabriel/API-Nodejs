import { Router } from "express";
import UsersController from "../controllers/UsersController";
import authentication from "src/middlewares/Authentication";
import { validateCreate  } from '../validateParams/create';
import { validateLogin } from '../validateParams/login';
import { validateUpdate } from '../validateParams/update';
import { validateId } from '../validateParams/id';
import { validateDelete } from '../validateParams/delete';

const routerUsers = Router();

const usersController = new UsersController();

routerUsers.get('/', usersController.index);
routerUsers.get('/:id', validateId, usersController.show);
routerUsers.post('/', validateCreate, usersController.create);
routerUsers.post('/login', validateLogin, usersController.login);
routerUsers.put('/:id', validateUpdate, usersController.update);
routerUsers.delete('/', validateDelete, usersController.delete);

export default routerUsers;
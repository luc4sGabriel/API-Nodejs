import { celebrate, Joi, Segments } from 'celebrate';

const validateLogin = celebrate({
    [Segments.BODY]: {
        email: Joi.string().required(),
        password: Joi.string().required()
    }
}, {abortEarly: false});

export {
    validateLogin
}
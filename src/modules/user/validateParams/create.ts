import { celebrate, Joi, Segments } from 'celebrate';

const validateCreate = celebrate({
    [Segments.BODY]: {
        name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required()
    }
}, {abortEarly: false});

export {
    validateCreate
}
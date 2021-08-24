import { celebrate, Joi, Segments } from 'celebrate';

const validateUpdate = celebrate({
    [Segments.BODY]: {
        name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required()
    },
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}, {abortEarly: false});

export {
    validateUpdate
}
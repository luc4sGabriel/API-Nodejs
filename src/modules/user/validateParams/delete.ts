import { celebrate, Joi, Segments } from 'celebrate';

const validateDelete = celebrate({
    [Segments.BODY]: {
        id: Joi.string().uuid().required()
    }
}, {abortEarly: false});

export {
    validateDelete
}
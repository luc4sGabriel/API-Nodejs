import { celebrate, Joi, Segments } from 'celebrate';

const validateCreate = celebrate({
    [Segments.BODY]: {
        name: Joi.string().required(),
        cnpj: Joi.string().required()
    }
}, {abortEarly: false});

export {
    validateCreate
}
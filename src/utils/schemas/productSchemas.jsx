import Joi from "joi";
import { Sector2 } from "../../components/myAdsComponents/categorys/Sector2";

export const productSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.optional(),
    value: Joi.number().required(),
    sector1: Joi.number().required(),
    sector2: Joi.number().required(),
    category: Joi.number().required()
});
export const photoProductSchema = Joi.array().items(
    Joi.string().uri().required(),
    Joi.string().uri().allow('').optional(),
    Joi.string().uri().allow('').optional(),
    Joi.string().uri().allow('').optional(),
    Joi.string().uri().allow('').optional()
);
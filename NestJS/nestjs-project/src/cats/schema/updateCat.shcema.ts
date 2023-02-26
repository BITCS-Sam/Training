import * as joi from "joi"

export const updateCatSchema = joi.object({
    name: joi.string(),
    age: joi.number(),
    breed: joi.string()
}).or("name", 'age', 'breed')
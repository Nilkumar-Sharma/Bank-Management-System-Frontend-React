const mongoose = require('mongoose');
const joi = require('joi')
const joigoose = require('joigoose')(mongoose)

// const joiSchema = joi.object().keys({
//     UserName: joi.description('A name').string().required(),
//     Password:joi.description('Password').string().required(),
//     Address: joi.description('An address').string().required(),
//     Country:joi.description("Country").string().required(),
//     State: joi.description("State").string().required(),
//     Email: joi.description("Email").string().required(),
//     Pan: joi.alphanum().required(),
//     Contact: joi.string().trim().regex(/^[0-9]{7,10}$/).required(),
//     DOB: joi.date(),
// })

// const mongooseSchema = new mongoose.Schema(joigoose.convert(joiSchema))

// mongose.model('Model', mongooseSchema)

const userSchema = new mongoose.Schema({
    UserName: {

    },
    Password: {

        
    }, Address: {
        
    }, State: {
        
    }, Country: {
        
    }, Email: {

    }, Pan: {
        
    }, Contact: {
        
    }, DOB:{

    }

});

module.exports = mongoose.model('BMSUser', userSchema);
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    UserName: {
        // required: [true, 'Name is Required'],
        // type:String,
        // trum:true,
        // minlength: [3, 'Name should have minimum length of 3'],
        // maxlength: [43, 'Name should have maximum length of 43']
    },
    Password: {
        // required: [true, 'Password is Required'],
        // type: String,
        // trum: true,
        // minlength: [3, 'Name should have minimum length of 3'],
        // maxlength: [43, 'Name should have maximum length of 43']
        
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
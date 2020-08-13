const mongoose = require('mongoose');
const loanSchema = new mongoose.Schema({
    Amount: {
        type: Number,
    },
    Date: {
        type: String,
    },
    Duration: {
        type: Number
    },
    ROI: {
        type: Number
    },
    Loan_Type: {
        type: String
    },
    Rate_of_Interest: {
        type: Number
    }
});
module.exports = mongoose.model('Loan',loanSchema);
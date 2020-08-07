// module.exports =
export const express =
    (app) => {
    const dotenv = require('dotenv').config()
    // console.log(dotenv)
    app.get(`${process.env.API_URL}/loan`, (req, res) => {
        try {
            console.log("okkk")
            const loans = [{
                "Rate of Interest": "3",
                Amount: "1203",
                Date: "  30/07/2020",
                Duration: "5 years",
                'Loan Type': "Student Loan",
            }, {
                "Rate of Interest": "5",
                Amount: "10",
                Date: "  30/07/2020",
                Duration: "10 years",
                'Loan Type': "Car Loans",
            }]
            res.status(200).send(loans)
        } catch (e) {
            res.status(401).end();
        }
    });
    


}
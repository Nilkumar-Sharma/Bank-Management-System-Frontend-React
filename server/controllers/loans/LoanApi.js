// module.exports =
const loann=require('../../models/loan')
export const express =
    (app) => {
            app.get('/s',   (req, res) => {

      loann.create({
                        "Rate_of_Interest": 3,
                        Amount: 1203,
                        Date: "30/07/2020",
                        Duration: 5,
                        'Loan_Type': "Student Loan",
                })
            });

    app.get(`${process.env.API_URL}/loan`, (req, res) => {
        try {
            loann.find().then(x => {
                res.status(200).send(x)
            })
        } catch (e) {
            res.status(401).end();
        }
    });
    
        app.post(`${process.env.API_URL}/loan`, (req, res) => {
            try {
                loann.create(
                    req.body
                ).then(x => {
                    res.status(200).send(x)
                })
            } catch (e) {
                res.status(401).end();
            }
        });
}
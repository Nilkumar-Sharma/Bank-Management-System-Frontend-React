const userM = require('../../models/user')
const jwt=require('jsonwebtoken')
// const router=require('express').Router()
module.exports = (app) => {
    app.post(`${process.env.API_URL}/user/login`, (req, res) => {
        console.log(req.body)
        userM.findOne({ 'UserName': req.body.UserName, 'Password': req.body.Password }, (err, user) => {
            if (err) {
                res.send({ msg: " Invalid User Details", err: err })
            } else {
                // let token=jwt.sign({'UserName':req.body.UserName},process.env.PRIVATE_KEY)
                // res.send(token);
                if (user == null) {
                    res.send({ msg: " Invalid User Details" })
                } else {
                    let token = jwt.sign({ 'UserName': req.body.UserName }, process.env.PRIVATE_KEY)
                    res.send({ token: token });
                }
            }
        })
    })

    app.post(`${process.env.API_URL}/user`, (req, res) => {
        const body ={...req.body}
        userM.create(body, (err, user) => {
            if (err) {
                res.send({msg:"Unable to Add new User"})
            } else {
                res.send(user)
            }
        })
    })
}
const jwt=require('jsonwebtoken')
module.exports = function (req, res, next) {
    if (req.headers.authorization) {
        let token = req.headers.authorization.split(" ")[1];
        console.log("token is" +token)
        jwt.verify(token, process.env.PRIVATE_KEY, (err, tokenDetails) => {
            if (err) return new Error("Invalid Jwt Token Found")
            req.tokenDetails = tokenDetails;
            next()
        })
    } else {
        
        return next(new Error("No Jwt Token Found"))
    }
    // next()
    
}
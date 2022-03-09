const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
    var decoded = jwt.verify(req.query.token, 'secret');
    if(!decoded){
        const error = new Error("Not Authenticated");
    }
    next();
}
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        if(req.headers.authorization && req.headers.authorization.includes('Bearer')) {
            const token = req.headers.authorization.split(' ')[1];
            const payload = jwt.verify(token, 'Faut_Pas_Pousser_Mamie_Dans_Les_Orties');
            next();
        } else {
            res.status(401).send(`Forbidden request : no token`)
        }

    } catch (err) {
        if(err) {
            console.log(err);
        }
        res.status(401).send(`Forbidden request : bad token`)
    }
}

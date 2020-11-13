const jwt = require('jsonwebtoken');

const authorizePlayer = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) res.status(401).send('access denied')
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        if (err) return res.status(403).send('invalid token')
        req.playerPayload = payload
        next()
    })
}

module.exports = authorizePlayer;
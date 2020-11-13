const Player = require('../models/Player');
const bcrypt = require('bcrypt');

const authenticationController = {
    login: async (req, res) => {
        const { username, password} = req.body;
        let player = await Player.findOne({ username })
        if (!player) return  res.status(400).send('invalid credentials')
        const match = await bcrypt.compare(password, player.password)
        if (!match) return res.status(400).send('invalid credentials')
        const token = player.createToken()
        res.set('x-authorization-token', token).send('login sucessful')
    }
} 

module.exports = authenticationController;
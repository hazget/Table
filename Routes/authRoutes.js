const {Router} = require('express');
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');
const User = require('../Routes/models/User');

const router = Router();

router.post('/register', async(req, res) => {
    try {
        const {email, password} = req.body

        const candidate = await User.findOne({email})
        if(candidate) {
          return  res.status(400).json({message: 'User has already exist'})
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({email, password: hashedPassword})

        await user.save()

        res.status(201).json({message: 'User was created'})

    } catch (e) {
        res.status(500).json({message: 'Something wrong'})
    }
} );

router.post('/login', async(req, res) => {
    try {
        
        const {email, password} = req.body

        const user = await User.findOne({email})
        if (!user) {
            return res.status(400).json({message: 'User was not found'})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({message: 'Wrong password. Try again!!!'})
        }

        const token = jwt.sign(
            {userId: user.id},
            config.get('jwtSecret'),
            {expiresIn: '1h'}
        )

        res.json({token, userId: user.id})

    } catch (e) {
        res.status(500).json({message: 'Something wrong'})
    }
} );


module.exports = router
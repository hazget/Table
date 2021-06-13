const {Router} = require('express')

const User = require('./models/User');

const router = Router()

router.get('/User'),async(req, res)=> {
    try {
        const users = await User.findById(req.params.id)
        res.json(users)
        
    } catch (e) {
        res.status(500).json({message: 'Something wrong'})
    }

}

router.post('/delete',  async(req, res) => {
    try {
        const {  email } = req.body;
        await User.deleteMany({  email: { $in:  email } });
        return res.json({ message: "Deleted" });
    } catch (e) {
        res.status(400).json({message: 'error delete'})
    }
})
router.post('/update', async(req, res) => {
try {
    const {  email } = req.body;
    await User.updateMany(
        {  email: { $in:  email } },
        { $set: { status: false } }
      );
    return res.json({ message: "Blocked" });
} catch (e) {
    res.status(400).json({message: 'error update'})
}
})

module.exports = router
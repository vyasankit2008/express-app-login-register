// controllers/profileController.js
const { User } = require('../entities');

const getProfile = async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await User.findByPk(userId, { attributes: ['id', 'username'] });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.render('profile', { user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = getProfile;

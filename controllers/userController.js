const { User } = require('../models');

const UserController = {

  async getAllUsers(req, res) {
    try {
      const userData = await User.find({});
      res.json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getUserById(req, res) {
    try {
      const userData = await User.findById(req.params.userId);
      if (!userData) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createUser(req, res) {
    try {
      const userData = await User.create(req.body);
      res.json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateUserById(req, res) {
    try {
      const userData = await User.findOneAndUpdate({ _id: req.params.userId }, req.body, { runValidators: true, new: true });
      if (!userData) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User updated successfully' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteUserById(req, res) {
    try {
      const userData = await User.findOneAndDelete({ _id: req.params.userId });
      if (!userData) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async addFriend(req, res) {
    try {
      const userData = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.body.friendId || req.params.friendId } },
        { new: true }
      );
      if (!userData) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async removeFriend(req, res) {
    try {
      const userData = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { new: true }
      );
      if (!userData) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'Friend removed successfully' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = UserController;
const User = require('../models/User');

async function deleteUserById(req, res) {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        
        if (!deletedUser) {
            return res.status(404).json({ message: 'User không tồn tại' });
        }

        res.json({ success: true, message: 'User đã bị xóa', user: deletedUser });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

module.exports = { deleteUserById };
const User = require('../../models/User');
exports.getUserDetail = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
            .select('-password -__v -refreshToken'); // Ẩn trường nhạy cảm

        if (!user) {
            return res.status(404).json({ 
                success: false, 
                message: 'User not found' 
            });
        }

        res.status(200).json({ 
            success: true, 
            data: user 
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: 'Internal server error' 
        });
    }
};
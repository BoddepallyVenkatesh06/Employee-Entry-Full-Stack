const User = require('./../models/User')

exports.getAllUsers = async (re, res) => {
    try {

        const allUsers = await User.find();

        res.status(200).json({
            success: true,
            data: allUsers,
            message: "All Emoployees data fetch successfully"
        })

    }

    catch (error) {
        console.log('Error while fetching all Emoployees Entry');
        console.log('Error -> ', error);
        res.status(500).json({
            success: false,
            message: `Error -> ${error}`
        })
    }
}
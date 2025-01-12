const User = require('./../models/User')

exports.createUser = async (req, res) => {
    try {
        const { username, title, department, role, email } = req.body;

        // if Invalid data sends
        if (!username || !title || !department || !role || !email) {
            return res.status(500).json({
                success: false,
                message: "All Fileds Required"
            })
        }

        const user = new User({
            username, title, department, role, email,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${username}`,
        });

        const savedUser = await user.save();


        res.status(200).json({
            success: true,
            data: savedUser,
            message: 'Employee Entry Successfully'
        })

    }

    catch (error) {
        console.log('Error while creating Emoployee Entry');
        console.log('Error -> ', error);
        res.status(500).json({
            success: false,
            message: `Error -> ${error}`
        })

    }
}
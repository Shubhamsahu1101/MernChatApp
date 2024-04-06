import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from '../utils/generateToken.js';

export const signup = async (req, res) => {
    try {
        console.log('In signup')

        const {fullName, username, password, confirmPassword, gender} = req.body;

        if(!fullName || !username || !password || !confirmPassword || !gender){
            return res.status(400).json({message: 'All fields are required'});
        }

        const user = await User.findOne({username});

        if(user){
            return res.status(400).json({message: 'User already exists'});
        } 

        if(password != confirmPassword){
            return res.status(400).json({message: 'Passwords do not match'});
        }

        if(password.length < 6){
            return res.status(400).json({message: 'Password must be at least 6 characters'});
        }

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        // Hashing the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === 'male' ? boyProfilePic : girlProfilePic,
        })

        if(newUser){
            await newUser.save();
            generateTokenAndSetCookie(newUser._id, res);

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic,
            });
        } else {
            res.status(400).json({message: 'Invalid User Data'});
        }

    } catch (error) {
        console.log('Error on login: ', error.message);
        res.status(500).json({message: 'Internal Server Error'});
    }
}

export const login = async (req, res) => {
    try {
        const {username, password} = req.body;

        const user = await User.findOne({username});

        if(user){
            const isPasswordCorrect = await bcrypt.compare(password, user.password);
            if(!isPasswordCorrect){
                return res.status(400).json({message: 'Invalid Password'});
            }
        } else {
            return res.status(400).json({message: 'User not found'});
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });

    } catch (error) {
        console.log('Error on login: ', error.message);
        res.status(500).json({message: 'Internal Server Error'});
    }
}

export const logout = (req, res) => {
    try {
        res.cookie('jwt', '', {maxage: 1});
        res.status(200).json({message: 'Logged Out Successfully'});
    } catch (error) {
        console.log('Error on login: ', error.message);
        res.status(500).json({message: 'Internal Server Error'});
    }
}
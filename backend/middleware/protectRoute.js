import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if(!token) {
            return res.status(401).json({error: 'Unauthorised - No token found'});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded) {
            return res.status(401).json({error: 'Unauthorised - Invalid token'});
        }

        const user = await User.findById(decoded.userId).select("-Password");

        if(!user) {
            return res.status(401).json({error: 'User not found'});
        }

        req.user = user;

        next();
    } catch (error) {
        console.log('Internal server error in protect route middleware', error.message);
        res.status(500).json({error: 'Inernal server error'});
    }
}

export default protectRoute;
import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });

    res.cookie("jwt", token, {
        maxage: 30 * 24 * 60 * 60 * 1000, // ms
        httpOnly: true,
        sameSite: "Strict",
        secure: process.env.NODE_ENV !== 'development',
    });
}

export default generateTokenAndSetCookie;
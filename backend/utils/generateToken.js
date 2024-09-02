import jwt from "jsonwebtoken";

// Hard-coded JWT secret key
const JWT_SECRET = 'your_hardcoded_secret_key_here';

const generateTokenAndSetCookie = (userId, res) => {
    // Use the hard-coded secret key
    const token = jwt.sign({ userId }, JWT_SECRET, {
        expiresIn: "15d",
    });

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // MS
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production", // Change to production for HTTPS
    });

    console.log("Token generated and cookie set");
};

export default generateTokenAndSetCookie;

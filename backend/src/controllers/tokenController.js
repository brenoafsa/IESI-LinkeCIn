import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config();

function generateAccessToken(userId, userEmail) {
    return jwt.sign({id: userId, email: userEmail}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30min' })
}

export default {
    generateAccessToken
}
import jwt from 'jsonwebtoken'


const generateToken = (userData) => {
    return jwt.sign(userData, "12345", {expiresIn: 30000})
}

export {generateToken}
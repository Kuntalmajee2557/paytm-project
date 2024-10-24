import jwt from "jsonwebtoken";


const authMiddleware = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if(!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(411).json({
            error: "token not found"
        })
    }
    const token = authHeader.split(' ')[1];

    try{
        const decoded = jwt.verify(token, '12345')
        req.userId = decoded.userId;
        next()
    }
    catch(err){
        console.log(err)
        return res.status(411).json({error: "invalid token"})
    }
}

export default authMiddleware;
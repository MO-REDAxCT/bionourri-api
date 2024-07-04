const jwt = require('jsonwebtoken');

 function generateToken(user)
    {
        return jwt.sign(user, process.env.JWT_SEC, {expiresIn :'30d'});
    }


    function isAuth(req , res , next)
        {
            const authorization = req.headers.authorization
            if(authorization)
                {
                    const token = authorization.slice(7 , authorization.length)
                    jwt.verify(
                        token , 
                        process.env.JWT_SEC , 
                        (err , decode) =>
                            {
                                if(err)
                                    {
                                        res.status(401).send({message: 'Invalid Token'})
                                    }
                                else {
                                    req.user = decode
                                    next()
                                }    
                            }
                    )
                }
                else{
                    res.status(401).send({message: 'No Token'})
                }
        }
        exports.generateToken = generateToken
        exports.isAuth =  isAuth 
        //, isAuth} 
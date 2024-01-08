const jwt = require('jsonwebtoken');
let checkToken =(req,res,next)=>{
  
    if(req.headers.authorization!=null)
    {
      const token=req.headers.authorization.split(" ")[1];
      jwt.verify(token,"li4nee", (err, decoded)=>{
        if(!err)
        {
          next();
        }
        else{
          res.status(403).send({Message:"Token Invalid: Connection Closed"})
        }
      });
    }
    else{
      res.status(400).send({Message:"Please Send A Token"})
    }
    }
  
  
 module.exports=checkToken;
  
  
import  Users  from "../../../models/Users";
export default function handler(req, res) {
    const {method,query:{id},}=req;
    if(method==="GET"){
       try{
          const use=await Users.findById(id);
          res.status(200).json(use);
       }catch(err){
          res.status(500).json(err)
       }
    }
    if(method==="DELETE"){
        try{
          const user=await Users.findByIdAndDelete(id);
          res.status(204).json(user);
        }catch(err){
           res.status(500).json(err);
        }
    }
        if(method==="PUt"){
            try{
              const userr=await Users.findByIdAndUpdate(id,body);
              res.status(200).json(userr);
            }catch(err){
               res.status(500).json(err);
            }
         
     }
   }
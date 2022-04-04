import  mainusers  from "../../../models/Register";
export default function handler(req, res) {
    const {method,query:{id},}=req;
    if(method==="GET"){
       try{
          const muse=await mainusers.findById(id);
          res.status(200).json(muse);
       }catch(err){
          res.status(500).json(err)
       }
    }
    if(method==="DELETE"){
        try{
          const muser=await mainusers.findByIdAndDelete(id);
          res.status(204).json(muser);
        }catch(err){
           res.status(500).json(err);
        }
    }
        if(method==="PUt"){
            try{
              const muserr=await Users.findByIdAndUpdate(id,body);
              res.status(200).json(muserr);
            }catch(err){
               res.status(500).json(err);
            }
         
     }
   }
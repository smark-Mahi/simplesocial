import { Post } from "../../../models/Post";
export default function handler(req, res) {
    const {method}=req;
    if(method==="GET"){
       try{
          const users=await Post.find();
          res.status(200).json(users);
       }catch(err){
          res.status(500).json(err)
       }
    }
    if(method==="POST"){
       try{
         const user=await Post.create(req.body);
         res.status(201).json(user)
       }catch(err){
          res.status(500).json(err);
       }
        
    }
   }
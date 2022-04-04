import  Register  from "../../../models/Register";
import bcrypt from 'bcryptjs'


export default async (req,res)=>{
     const {email,password} = req.body
     try{
        if(!email || !password){
          return res.status(422).json({error:"please ass all the fields"})
        }
      const user = await Register.findOne({email})
      if(user){
          return res.status(422).json({error:"user already exists with that email"})
      }
     const hashedPassword = await bcrypt.hash(password,12)
     const newUser =  await new Register({
         email,
         password:hashedPassword
     }).save()
     }catch(err){
         console.log(err)
     }
}
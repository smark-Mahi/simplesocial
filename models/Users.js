export const users=[
   {
      username:{
          type:String,
          required:[true,'name is required'],
          unique:true,
          maxlength:[5,'cannot be greater than 5 characters']
      },
      password:{
          type:String,
          required:[true,'name is required'],
          unique:true,
          maxlength:[9,'cannot be greater than 5 characters']
      },
      email:{
          type:String
      },
      gender:{
          type:String,
          required:[true,'name is required']
      }

   }
]
export const users=[
    {
       email:{
           type:String
       },
       password:{
        type:String,
        required:[true,'name is required'],
        unique:true,
        maxlength:[9,'cannot be greater than 5 characters']
    }
    }
]
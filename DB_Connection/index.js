
const mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/api_dev")
.then(()=>{
    console.log(("Connection Successful!"))
})
.catch((err)=>{
    console.log(err)
})


const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is Mandatory"]
    },
    password:{
        type:String,
        required:[true,'password is mandatory'],
        minLength:[10,'minimum characters required 10'],
        maxLength:[25,'maximum characters required 25'],
    },
    role:{
        type:String,
        enum:["admin","manager","customer"]
    },
    age:{
        type:Number,
        min:[20,'Minimum is 20'],
        max:100
    }
    
},{timestamps:true})

const userModel=mongoose.model('users',userSchema);

// let user={
//     name:"Anand",
//     password:"ajshsgdhgghgjh",
//     role:"admin",
//     age:28
// }

// userModel.create(user)
// .then((data)=>{
//     console.log(data)
//     console.log('Record inserted successfully')
// })
// .catch((err)=>{
//     console.log(err)
// })

// userModel.updateOne({name:"Anand"},{name:'Nikita',role:"manager"},{upsert:true})
// .then((data)=>{
//     console.log(data)
//     console.log('Record updated successfully')
// })
// .catch((err)=>{
//     console.log(err)
// })

// userModel.updateOne({name:"Anand"},{name:'Anand',role:"manager"},{upsert:true})
// .then((data)=>{
//     console.log(data)
//     console.log('Record inserted successfully')
// })
// .catch((err)=>{
//     console.log(err)
// })

// userModel.deleteOne({name:"Anand"})
// .then((data)=>{
//     console.log(data)
//     console.log('Record deleted successfully')
// })
// .catch((err)=>{
//     console.log(err)
// })

userModel.findOne({name:"Nikita"})
.then((data)=>{
    console.log(data)
    console.log('Record fetched successfully')
})
.catch((err)=>{
    console.log(err)
})
import mongoose, {Schema} from 'mongoose'

const MONGO_URL = process.env.MONGO_URL || 'mongodb://userdb:27017/demo'

mongoose.connect(MONGO_URL)


const userSchema = Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
        minlength : 12
    }

})

const User = mongoose.model('user', userSchema)
export default User
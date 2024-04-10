import mongoose, {Schema} from 'mongoose'

const MONGO_URL = process.env.MONGO_URL

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
    },
    status: {
        type: Boolean,
        default: true
    }
})

const User = mongoose.model('users', userSchema)
export default User
import mongoose, {Schema} from 'mongoose'

const MONGO_URL = process.env.MONGO_URL

mongoose.connect(MONGO_URL)


const productSchema = Schema({
    title : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
        minlength : 20
    },
    price: {
        type: Number,
        required: true
    }
})

const Product = mongoose.model('products', productSchema)
export default Product
import mongoose from 'mongoose'

const BlogsSchema = new mongoose.Schema({
        fullName: {
            type: String,
        },
        empolyer: {
            type: String,
        },
        email: {
            type: String,
        },
        phoneNumber: {
            type: String,
        },
        district: {
            type: String,
        },
        income: {
            type: String,
        },
        dob: {
            type: String,
        }
    },

    {
        timestamps: true
    }
)

const Card = mongoose.model("CardInfo", BlogsSchema)
export default Card

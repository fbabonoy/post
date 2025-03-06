import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    subject: { type: String },
    body: { type: String },
    user: { type: String },
    comments: [],
    createdAt: { type: Date, default: Date.now }
})

export default mongoose.model("Post", postSchema)

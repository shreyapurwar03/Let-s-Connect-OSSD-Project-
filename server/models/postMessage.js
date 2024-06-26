import mongoose from 'mongoose';

const postSchema = mongoose.Schema({ 
    category: String,
    location: String,
    caption: String,
    shop: String,
    name: String,
    creator: String,
    mode: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
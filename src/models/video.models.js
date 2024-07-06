import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchmea = new Schema({
    videoFile: {
        type: String, //cloudinary URL
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    views: {
        type: Number,
        default: 0
    },
    duration: {
        type: Number,
        required: true
    },
    isPublished: {
        type: Boolean,
        default: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
})

videoSchmea.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchmea);
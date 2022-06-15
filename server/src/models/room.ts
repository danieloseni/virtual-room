import {model, Schema} from 'mongoose';

const RoomSchema = new Schema({
    title: {
        type: String,
        required: [true, "Room title is required"]
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    date_created: Date
})

export default model('room', RoomSchema);
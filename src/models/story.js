import {Schema, model} from "mongoose";

const storySchema = new Schema({
        content: {
            type: [String],
            required: true
        }
    },
    {
        timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'},
        toObject: {virtuals: true},
        toJSON: {virtuals: true}
    });

const Story = model('Story', storySchema);

export default Story;
import Story from "../../../../models/story.js";

export const createStory = async (req, res) => {
    try {
        const {content} = req.body;
        if(!content || content.length < 1){
            return res.status(400).json({
                message: 'Content of story needed'
            })
        }

        const story = await Story.create({
            content
        });

        res.status(201).json({
            message: 'Story created successfully',
            data: story
        });
    } catch (e) {
        console.log(e.message);
        res.status(400).json({message: e.message});
    }
}

export const getStory = async (req, res) => {
    try {
        const {id} = req.params;
        const story = await Story.findOne({id});
        if (!story) {
            return res.status(404).json({message: 'No story found.'});
        }
        res.status(200).json({
            message: 'Story retrieved successfully',
            data: story
        });
    } catch (e) {
        console.log(e.message);
        res.status(400).json({message: e.message});
    }
}

export const getStories = async (req, res) => {
    try {
        const match = {

        };
        if (req.query.status) {
            match.status = req.query.status;
        }
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.size) || 50;
        const skip = (page - 1) * limit;
        const stories = await Story.find(match).skip(skip).limit(limit);
        const total_stories = await Story.find(match).countDocuments();
        res.status(200).json({
            message: 'Stories retrieved successfully',
            data: stories,
            count: total_stories
        });
    } catch (e) {
        console.log(e.message);
        res.status(400).json({message: e.message});
    }
}
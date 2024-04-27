import {Router} from "express";
import {createStory, getStory, getStories} from "../../../controllers/v1/users/stories/stories.controller.js";

const router = Router({mergeParams: true});

router.route("/").get(getStories).post(createStory);
router.route("/:id").get(getStory);
export default router;
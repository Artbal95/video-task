const { Router } = require("express");
const router = Router();

const { getVideos, getVideo, getFramesByVideo, saveFrames, getSaveFrames, deleteFrame } = require("../controllers/controllers");

/* Get Requests */
router.get("/videofiles", getVideos);
router.get("/videofiles/:video_file_name/frames/:time_in_video", getFramesByVideo);
router.get("/saved_frames", getSaveFrames);

/* Post Requests */
router.post("/saved_frames/new_frame", saveFrames);

/* Delete Requests */
router.delete("/saved_frames/delete_frame/:frame_number", deleteFrame)

// router.get("/videofile/:video_name", getVideo)


module.exports = router


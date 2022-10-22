const { Router } = require("express");
const router = Router();

const { getVideos, getFramesByVideo, saveFrames, getSaveFrames } = require("../controllers/controllers");

router.get("/videofiles", getVideos);
router.get("videofiles/:file_name/frames", getFramesByVideo);
router.post("/saved_frames/new_frame", saveFrames);
router.get("/saved_frames", getSaveFrames);

module.exports = router


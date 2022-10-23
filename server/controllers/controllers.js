const fs = require("fs");
const path = require("path");
const { SUCCESS, WARNING, ERROR } = require("../config/statuses");
const { videoData, frameData, saveFramesData } = require("../mockData");

exports.getVideos = (req, res) => {
    if(videoData){
        res.status(200).json({
            status: SUCCESS,
            error: null,
            data: videoData
        });
    } else {
        res.status(404).json({
            status: ERROR,
            error: "Something wen`t wrong",
            data: []
        });
    }
};

exports.getFramesByVideo = (req, res) => {
    const { video_file_name, time_in_video } = req.params;

    if(video_file_name && time_in_video) {
        const currentFrame = frameData.find(frame => frame.video_file_name === video_file_name)
        if(!currentFrame && !currentFrame.frames.length){
            res.status(404).json({
                status: WARNING,
                error: "There is`nt any frames",
                data: []
            });
        }
        const timeInVideo = time_in_video <= 0 ? 1 : time_in_video > currentFrame.frames.length ? 1 : time_in_video
        const frames = currentFrame.frames.slice(timeInVideo - 1, currentFrame.frames.length)
        res.status(200).json({
            success: SUCCESS,
            error: null,
            data: frames
        });
    } else {
        res.status(404).json({
            status: ERROR,
            error: "Something wen`t wrong",
            data: []
        });
    }  
};

exports.saveFrames = async (req, res) => {
    const { video_file_name, frame_number } = req.body;
    if(video_file_name && frame_number){

        const currentFrame = frameData.find(frames => frames.video_file_name === video_file_name).frames[frame_number - 1]

        const candidate = saveFramesData.find(frame => frame.video_file_name === video_file_name && frame.frame_number === currentFrame.frame_number)
        if(candidate){
            res.status(404).json({
                status: WARNING,
                error: "There is already exist",
                data: []
            });
        }else {
            if(currentFrame){
                let data = {
                    video_file_name,
                    frame_number: +frame_number,
                    frame_file_path: currentFrame.frame_file_path
                }
                fs.writeFile(path.join(__dirname, "../mockData/saveFrames.data.json"), JSON.stringify([...saveFramesData, data]), (error) => {
                    if(error){
                        res.status(404).json({
                            status: ERROR,
                            error: error.message,
                            data: []
                        });
                    } else {
                        res.status(201).json({
                            status: SUCCESS,
                            error: null,
                            data: data
                        });
                    }
                })
                
            } else {
                res.status(404).json({
                    status: WARNING,
                    error: "There is`nt any frame",
                    data: []
                });
            }
        }
    } else {
        res.status(404).json({
            status: ERROR,
            error: "Something wen`t wrong",
            data: []
        });
    }

};

exports.getSaveFrames = (req, res) => {
    if(saveFramesData){
        res.status(200).json({
            status: SUCCESS,
            error: null,
            data: []
        });
    } else {
        res.status(404).json({
            status: ERROR,
            error: "Something wen`t wrong",
            data: []
        });
    }
};

exports.deleteFrame = async (req, res) => {
    const { frame_number } = req.params;
    if(saveFramesData.length && !!frame_number){
        const checkIs = saveFramesData.find(frame => frame.frame_number === +frame_number)
        if(checkIs){
            const filterSavedFrames = saveFramesData.filter(frame => frame.frame_number !== +frame_number)
            fs.writeFile(path.join(__dirname, "../mockData/saveFrames.data.json"), JSON.stringify(filterSavedFrames), (error) => {
                if(error){
                    res.status(404).json({
                        status: ERROR,
                        error: error.message,
                        data: []
                    });
                } else {
                    res.status(201).json({
                        success: SUCCESS,
                        error: null,
                        data: filterSavedFrames
                    });
                }
            })
           
        } else {
            res.status(404).json({
                status: WARNING,
                error: "wrong",
                data: []
            });
        }
    } else {
        res.status(404).json({
            status: ERROR,
            error: "Something wen`t wrong",
            data: []
        });
    }
    
    
}
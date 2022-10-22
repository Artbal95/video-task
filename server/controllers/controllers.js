const { SUCCESS, WARNING, ERROR } = require("../config/statuses");

exports.getVideos = async (req, res) => {
    res.status(200).json({
        status: SUCCESS,
        error: null,
        data: {}
    });
};

exports.getFramesByVideo = async (req, res) => {
    const { file_name } = req.params;

    if(file_name) {
        res.status(200).json({
            success: SUCCESS,
            error: null,
            data: [{}]
        });
    } else {
        res.status(404).json({
            status: WARNING,
            error: "Something wen`t wrong",
            data: []
        });
    }
    
};

exports.saveFrames = async (req, res) => {
    const { file_name, frame_number } = req.body;

    if(file_name && frame_number) {
        res.status(200).json({
            success: SUCCESS,
            error: null,
            data: [{}]
        });
    } else {
        res.status(404).json({
            status: WARNING,
            error: "Something wen`t wrong",
            data: []
        });
    }
};

exports.getSaveFrames = (req, res) => {
    res.status(200).json({
        status: SUCCESS,
        error: null,
        data: []
    });
};
// App Config
import axios, { AxiosData } from "../config/axios.config"
import { IFramesByVideoData, ISavedFramesData, ISaveFrameDTO, IVideoData } from "types"

export const getVideos = (): AxiosData<IVideoData[]> => {
    return axios.get("/videofiles");
};

export const getFramesByVideoName = (videoName: string, timeInVideo: string): AxiosData<IFramesByVideoData> => {
    return axios.get(`/videofiles/${videoName}/frames?time_in_video=${timeInVideo}`);
};

export const saveFrame = (body: ISaveFrameDTO): AxiosData => {
    return axios.post("/saved_frames/new_frame", body)
}

export const getSavedFrames = (): AxiosData<ISavedFramesData[]> => {
    return axios.get("/saved_frames")
}

export const deleteFrameByFrameNumber = (framNumber: number): AxiosData<ISavedFramesData[]> => {
    return axios.delete(`/saved_frames/delete_frame/${framNumber}`)
}


export interface IVideoData {
    id: number;
    create_data: string;
    file_name: string;
    file_path: string;
}

export interface IFramesByVideoData {
    frame_number: number;
    frame_file_path: string;
}

export interface ISaveFrameDTO {
    file_name: string
    frame_number: number
}

export interface ISavedFramesData {
    video_file_name: string;
    frame_number: number;
    frame_file_path: string;
}
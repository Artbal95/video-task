// Node Modules
import axios, { AxiosPromise } from "axios";
// App Constants
import { baseURL } from "../constants"

const instanse = axios.create({ baseURL });

enum Statuses {
    SUCCESS = "success",
    WARNING = "warning",
    ERROR = "error"
}

interface IData<D = []> {
    status: Statuses,
    error: string | null,
    data: D
}

export type AxiosData<Data = []> = AxiosPromise<IData<Data>>

export default instanse;

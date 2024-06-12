import color from "../assets/Data/color.json"
import traits from "../assets/Data/trait.json"
import aspirations from "../assets/Data/aspiration.json"
import jobs from "../assets/Data/job.json"
import { DataTrait } from './interface'
import { DataColor } from './interface'
import { DataAspiration } from './interface'
import { DataJob } from './interface'

class Data {

    getDataColor = (): DataColor[] => {
        return color as DataColor[];
    };

    GetDataTrait = (): DataTrait[] => {
        return traits as DataTrait[];
    };

    GetDataAspiration = (): DataAspiration[] => {
        return aspirations as DataAspiration[];
    }

    GetDataJob =(): DataJob[] => {
        return jobs as DataJob[];
    }
}

export default Data;
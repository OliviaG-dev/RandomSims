import color from "../assets/Data/color.json"
import traits from "../assets/Data/trait.json"
import { DataTrait } from './interface'
import { DataColor } from './interface'

class Data {

    getDataColor = (): DataColor[] => {
        return color as DataColor[];
    };

    GetDataTrait = (): DataTrait[] => {
        return traits as DataTrait[];
    };
}

export default Data;
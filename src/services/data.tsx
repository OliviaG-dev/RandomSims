import color from "../assets/Data/color.json"
import traits from "../assets/Data/trait.json"
import aspirations from "../assets/Data/aspiration.json"
import jobs from "../assets/Data/job.json"
import maps from "../assets/Data/map.json"
import traitsTerrain from "../assets/Data/traitTerrain.json"

import { DataTrait } from './interface'
import { DataColor } from './interface'
import { DataAspiration } from './interface'
import { DataJob } from './interface'
import { DataMap } from './interface'
import { DataTraitTerrain } from "./interface"

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

    GetDataJob = (): DataJob[] => {
        return jobs as DataJob[];
    }

    GetDataMap = (): DataMap[] => {
        return maps as DataMap[];
    }

    GetDataTraitTerrain = (): DataTraitTerrain[] => {
        return traitsTerrain as DataTraitTerrain[];
    }
}

export default Data;
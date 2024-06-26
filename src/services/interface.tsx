export interface DataColor {
    id: string;
    color: string;
    style: string;
}

export interface DataTrait {
    name: string;
    image: string;
}

export interface DataAspiration {
    id: string;
    name: string;
    text: string;
    cat: string;
    imgcat: string;
    image: string;
}
export interface DataJob {
    id: string;
    namejob: string;
    text: string;
    branch: string;
    img: string;
}

export interface DataMap {
    name: string;
    text: string;
    img: string;
}

export interface DataTraitTerrain {
    name: string;
    img: string;
}

export interface DataDefiTerrain {
    name: string;
    img: string;
}

export interface DataChallenge {
    id: string;
    name: string;
    auteur: string;
    img: string;
    text: string;
    link: string;
}
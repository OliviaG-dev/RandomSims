import { DataDefiTerrain } from "./interface";
import { DataTrait } from "./interface";
import { DataColor } from "./interface";
import { DataAspiration } from "./interface";
import { DataJob } from "./interface";
import { DataMap } from "./interface";
import { DataTraitTerrain } from "./interface";
import { DataChallenge } from "./interface";
import { DataPrefTue } from "./interface";

const API_BASE_URL = "https://randomsims-api.onrender.com/data";

class Data {
  private async fetchData<T>(endpoint: string): Promise<T[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/${endpoint}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
      return [];
    }
  }

  getDataColor = async (): Promise<DataColor[]> => {
    return this.fetchData<DataColor>("color");
  };

  GetDataTrait = async (): Promise<DataTrait[]> => {
    return this.fetchData<DataTrait>("trait");
  };

  GetDataAspiration = async (): Promise<DataAspiration[]> => {
    return this.fetchData<DataAspiration>("aspiration");
  };

  GetDataJob = async (): Promise<DataJob[]> => {
    return this.fetchData<DataJob>("job");
  };

  GetDataMap = async (): Promise<DataMap[]> => {
    return this.fetchData<DataMap>("map");
  };

  GetDataTraitTerrain = async (): Promise<DataTraitTerrain[]> => {
    return this.fetchData<DataTraitTerrain>("traitTerrain");
  };

  GetDataDefiTerrain = async (): Promise<DataDefiTerrain[]> => {
    return this.fetchData<DataDefiTerrain>("defiTerrain");
  };

  GetDataChallenge = async (): Promise<DataChallenge[]> => {
    return this.fetchData<DataChallenge>("challenge");
  };

  GetDataPrefTue = async (): Promise<DataPrefTue[]> => {
    return this.fetchData<DataPrefTue>("prefTue");
  };
}

export default Data;

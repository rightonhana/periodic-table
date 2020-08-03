import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";
import States from "../enums/States";
import typeColor from "../const/typeColor";

export type ElementData = {
    acidBaseProperties: AcidBaseProperties;
    atomicMass: number;
    atomicNumber: number;
    boilingTemperature: number;
    commonOxidationStates?: number;
    crystalStructure: CrystalStructures;
    electronConfiguration: string;
    fusionATM?: number;
    fusionTemperature: number;
    group: number;
    meltingTemperature: number;
    metalMetalloidNonmetal: keyof typeof typeColor;
    name: string;
    period: number;
    special: boolean;
    state: States;
    symbol: string;
}

export default ElementData;
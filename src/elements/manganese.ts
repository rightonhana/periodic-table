import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const manganese: ElementData = {
    acidBaseProperties: AcidBaseProperties.ACID,
    atomicMass: 54.93805,
    atomicNumber: 25,
    boilingTemperature: 1962,
    commonOxidationStates: [2, 3, 4, 6, 7],
    crystalStructure: CrystalStructures.BCC,
    electronConfiguration: "[Ar] 4s2 3d5",
    fusionTemperature: 1244,
    group: 7,
    metalMetalloidNonmetal: "transition metal",
    name: "manganese",
    period: 4,
    special: false,
    state: States.SOLID,
    symbol: "Mn"
};

export default manganese;
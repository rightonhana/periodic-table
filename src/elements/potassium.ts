import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const potassium: ElementData = {
    acidBaseProperties: AcidBaseProperties.BASE,
    atomicMass: 39.0983,
    atomicNumber: 19,
    boilingTemperature: 759.9,
    commonOxidationStates: [1],
    crystalStructure: CrystalStructures.BCC,
    electronConfiguration: "[Ar] 4s1",
    fusionTemperature: 63.25,
    group: 1,
    metalMetalloidNonmetal: "alkali metal",
    name: "potassium",
    period: 4,
    special: false,
    state: States.SOLID,
    symbol: "K"
};

export default potassium;
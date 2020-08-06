import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const silver: ElementData = {
    acidBaseProperties: AcidBaseProperties.ACID_BASE,
    atomicMass: 107.8682,
    atomicNumber: 47,
    boilingTemperature: 2212,
    commonOxidationStates: [1],
    crystalStructure: CrystalStructures.FCC,
    electronConfiguration: "[Kr] 5s2 4d9",
    fusionTemperature: 961.93,
    group: 11,
    metalMetalloidNonmetal: "transition metal",
    name: "silver",
    period: 5,
    special: false,
    state: States.SOLID,
    symbol: "Ag"
};

export default silver;
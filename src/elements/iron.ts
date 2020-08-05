import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const iron: ElementData = {
    acidBaseProperties: AcidBaseProperties.ACID_BASE,
    atomicMass: 55.847,
    atomicNumber: 26,
    boilingTemperature: 2750,
    commonOxidationStates: [2, 3],
    crystalStructure: CrystalStructures.BCC,
    electronConfiguration: "[Ar] 4s2 3d6",
    fusionTemperature: 1535,
    group: 8,
    metalMetalloidNonmetal: "transition metal",
    name: "iron",
    period: 4,
    special: false,
    state: States.SOLID,
    symbol: "Fe"
};

export default iron;
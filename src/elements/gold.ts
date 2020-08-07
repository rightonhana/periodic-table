import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const gold: ElementData = {
    acidBaseProperties: AcidBaseProperties.ACID_BASE,
    atomicMass: 196.96654,
    atomicNumber: 79,
    boilingTemperature: 2808,
    commonOxidationStates: [1, 3],
    crystalStructure: CrystalStructures.FCC,
    electronConfiguration: "[Xe] 6s2 4f14 5d10",
    fusionTemperature: 1064.43,
    group: 11,
    metalMetalloidNonmetal: "transition metal",
    name: "gold",
    period: 6,
    special: false,
    state: States.SOLID,
    symbol: "Au"
};

export default gold;
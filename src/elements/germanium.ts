import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const germanium: ElementData = {
    acidBaseProperties: AcidBaseProperties.ACID_BASE,
    atomicMass: 72.61,
    atomicNumber: 32,
    boilingTemperature: 2830,
    commonOxidationStates: [4],
    crystalStructure: CrystalStructures.DC,
    electronConfiguration: "[Ar] 4s2 3d10 4p2",
    fusionTemperature: 937.4,
    group: 14,
    metalMetalloidNonmetal: "metalloid",
    name: "germanium",
    period: 4,
    special: false,
    state: States.SOLID,
    symbol: "Ge"
};

export default germanium;
import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const titanium: ElementData = {
    acidBaseProperties: AcidBaseProperties.ACID_BASE,
    atomicMass: 47.88,
    atomicNumber: 22,
    boilingTemperature: 3287,
    commonOxidationStates: [2, 3, 4],
    crystalStructure: CrystalStructures.HCP,
    electronConfiguration: "[Ar] 4s2 3d2",
    fusionTemperature: 1660,
    group: 4,
    metalMetalloidNonmetal: "transition metal",
    name: "titanium",
    period: 4,
    special: false,
    state: States.SOLID,
    symbol: "Ti"
};

export default titanium;
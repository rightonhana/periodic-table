import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";

export const rutherfordium: ElementData = {
    atomicMass: 261,
    atomicNumber: 104,
    boilingTemperature: 5500,
    commonOxidationStates: [3, 4],
    crystalStructure: CrystalStructures.HCP,
    electronConfiguration: "[Rn] 7s2 5f14 6d2",
    fusionTemperature: 2100,
    group: 4,
    metalMetalloidNonmetal: "transition metal",
    name: "rutherfordium",
    period: 7,
    special: true,
    state: States.SOLID,
    symbol: "Rf"
};

export default rutherfordium;
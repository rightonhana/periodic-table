import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";

export const astatine: ElementData = {
    atomicMass: 210,
    atomicNumber: 85,
    boilingTemperature: 337,
    commonOxidationStates: [-1, 1, 3, 5, 7],
    crystalStructure: CrystalStructures.FCC,
    electronConfiguration: "[Xe] 6s2 4f14 5d10 6p5",
    fusionTemperature: 302,
    group: 17,
    metalMetalloidNonmetal: "metalloid",
    name: "astatine",
    period: 6,
    special: false,
    state: States.SOLID,
    symbol: "At"
};

export default astatine;
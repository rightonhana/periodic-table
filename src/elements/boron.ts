import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const boron: ElementData = {
    acidBaseProperties: AcidBaseProperties.ACID,
    atomicMass: 10.811,
    atomicNumber: 5,
    boilingTemperature: 2550,
    commonOxidationStates: [3],
    crystalStructure: CrystalStructures.RHO,
    electronConfiguration: "1s2 2s2 2p1",
    fusionTemperature: 2079,
    group: 13,
    metalMetalloidNonmetal: "metalloid",
    name: "boron",
    period: 2,
    special: false,
    state: States.SOLID,
    symbol: "B"
};

export default boron;
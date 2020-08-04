import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const carbon: ElementData = {
    acidBaseProperties: AcidBaseProperties.ACID,
    atomicMass: 12.011,
    atomicNumber: 6,
    boilingTemperature: 3727,
    commonOxidationStates: [2, 4],
    crystalStructure: CrystalStructures.HEX,
    electronConfiguration: "1s2 2s2 2p2",
    fusionTemperature: 3652,
    group: 14,
    metalMetalloidNonmetal: "reactive nonmetal",
    name: "carbon",
    period: 2,
    special: false,
    state: States.SOLID,
    symbol: "c"
};

export default carbon;
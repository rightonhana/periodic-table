import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const iodine: ElementData = {
    acidBaseProperties: AcidBaseProperties.ACID,
    atomicMass: 126.90447,
    atomicNumber: 53,
    boilingTemperature: 184.35,
    commonOxidationStates: [-1, 1, 3, 5, 7],
    crystalStructure: CrystalStructures.ORTH,
    electronConfiguration: "[Kr] 5s2 4d10 5p5",
    fusionTemperature: 113.5,
    group: 17,
    metalMetalloidNonmetal: "reactive nonmetal",
    name: "iodine",
    period: 5,
    special: false,
    state: States.SOLID,
    symbol: "I"
};

export default iodine;
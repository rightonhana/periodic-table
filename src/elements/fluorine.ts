import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const fluorine: ElementData = {
    acidBaseProperties: AcidBaseProperties.NEUTRAL,
    atomicMass: 18.9984032,
    atomicNumber: 9,
    boilingTemperature: -188.14,
    commonOxidationStates: [-1],
    crystalStructure: CrystalStructures.SC,
    electronConfiguration: "1s2 2s2 2p5",
    fusionTemperature: -219.62,
    group: 17,
    metalMetalloidNonmetal: "reactive nonmetal",
    name: "fluorine",
    period: 2,
    special: false,
    state: States.GAS,
    symbol: "f"
};

export default fluorine;
import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const neon: ElementData = {
    acidBaseProperties: AcidBaseProperties.NEUTRAL,
    atomicMass: 20.1797,
    atomicNumber: 10,
    boilingTemperature: -246.048,
    crystalStructure: CrystalStructures.FCC,
    electronConfiguration: "1s2 2s2 2p6",
    fusionTemperature: -248.67,
    group: 0,
    metalMetalloidNonmetal: "noble gas",
    name: "neon",
    period: 0,
    special: false,
    state: States.GAS,
    symbol: "ne"
}

export default neon;
import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const argon: ElementData = {
    acidBaseProperties: AcidBaseProperties.NEUTRAL,
    atomicMass: 39.948,
    atomicNumber: 18,
    boilingTemperature: -185.7,
    crystalStructure: CrystalStructures.FCC,
    electronConfiguration: "[Ne] 3s2 3p6",
    fusionTemperature: -189.2,
    group: 18,
    metalMetalloidNonmetal: "noble gas",
    name: "argon",
    period: 3,
    special: false,
    state: States.GAS,
    symbol: "Ar"
};

export default argon;
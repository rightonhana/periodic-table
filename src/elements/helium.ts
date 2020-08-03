import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const helium: ElementData = {
    acidBaseProperties: AcidBaseProperties.NEUTRAL,
    atomicMass: 4.002602,
    atomicNumber: 2,
    boilingTemperature: -268.934,
    crystalStructure: CrystalStructures.HCP,
    electronConfiguration: "1s2",
    fusionATM: 26,
    fusionTemperature: -272.2,
    group: 0,
    meltingTemperature: -272.20,
    metalMetalloidNonmetal: "noble gas",
    name: "helium",
    period: 0,
    special: false,
    state: States.GAS,
    symbol: "he"
};

export default helium;
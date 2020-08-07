import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const radon: ElementData = {
    acidBaseProperties: AcidBaseProperties.NEUTRAL,
    atomicMass: 222,
    atomicNumber: 86,
    boilingTemperature: -61.8,
    crystalStructure: CrystalStructures.FCC,
    electronConfiguration: "[Xe] 6s2 4f14 5d10 6p6",
    fusionTemperature: -71,
    group: 18,
    metalMetalloidNonmetal: "noble gas",
    name: "radon",
    period: 6,
    special: false,
    state: States.GAS,
    symbol: "Rn"
};

export default radon;
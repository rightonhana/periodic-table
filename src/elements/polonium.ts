import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const polonium: ElementData = {
    acidBaseProperties: AcidBaseProperties.ACID_BASE,
    atomicMass: 209,
    atomicNumber: 84,
    boilingTemperature: 962,
    commonOxidationStates: [2, 4],
    crystalStructure: CrystalStructures.SC,
    electronConfiguration: "[Xe] 6s2 4f14 5d10 6p4",
    fusionTemperature: 254,
    group: 16,
    metalMetalloidNonmetal: "post-​transition metal",
    name: "polonium",
    period: 6,
    special: false,
    state: States.SOLID,
    symbol: "Po"
};

export default polonium;
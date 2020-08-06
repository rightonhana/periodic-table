import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const zirconium: ElementData = {
    acidBaseProperties: AcidBaseProperties.ACID_BASE,
    atomicMass: 91.224,
    atomicNumber: 40,
    boilingTemperature: 4377,
    commonOxidationStates: [4],
    crystalStructure: CrystalStructures.HCP,
    electronConfiguration: "[Kr] 5s2 4d2",
    fusionTemperature: 1852,
    group: 4,
    metalMetalloidNonmetal: "transition metal",
    name: "zirconium",
    period: 5,
    special: false,
    state: States.SOLID,
    symbol: "Zr"
};

export default zirconium;
import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const platinum: ElementData = {
    acidBaseProperties: AcidBaseProperties.BASE,
    atomicMass: 195.08,
    atomicNumber: 78,
    boilingTemperature: 3827,
    commonOxidationStates: [2, 4],
    crystalStructure: CrystalStructures.FCC,
    electronConfiguration: "[Xe] 6s2 4f14 5d9",
    fusionTemperature: 1772,
    group: 10,
    metalMetalloidNonmetal: "transition metal",
    name: "platinum",
    period: 6,
    special: false,
    state: States.SOLID,
    symbol: "Pt"
};

export default platinum;
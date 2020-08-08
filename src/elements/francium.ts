import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const francium: ElementData = {
    acidBaseProperties: AcidBaseProperties.BASE,
    atomicMass: 223,
    atomicNumber: 87,
    boilingTemperature: 677,
    commonOxidationStates: [1],
    crystalStructure: CrystalStructures.BCC,
    electronConfiguration: "[Rn] 7s1",
    fusionTemperature: 27,
    group: 1,
    metalMetalloidNonmetal: "alkali metal",
    name: "francium",
    period: 7,
    special: false,
    state: States.LIQUID,
    symbol: "Fr"
};

export default francium;
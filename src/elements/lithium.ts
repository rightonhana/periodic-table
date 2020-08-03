import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const lithium: ElementData = {
    acidBaseProperties: AcidBaseProperties.BASE,
    atomicMass: 6.941,
    atomicNumber: 3,
    boilingTemperature: 1342,
    commonOxidationStates: 1,
    crystalStructure: CrystalStructures.BCC,
    electronConfiguration: "1s2 2s1",
    fusionTemperature: 180.54,
    group: 1,
    meltingTemperature: 180.5,
    metalMetalloidNonmetal: "alkali metal",
    name: "lithium",
    period: 0,
    special: false,
    state: States.SOLID,
    symbol: "li"
};

export default lithium;
import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const aluminum: ElementData = {
    acidBaseProperties: AcidBaseProperties.ACID_BASE,
    atomicMass: 26.981539,
    atomicNumber: 13,
    boilingTemperature: 2467,
    commonOxidationStates: [3],
    crystalStructure: CrystalStructures.FCC,
    electronConfiguration: "[Ne] 3s2 3p1",
    fusionTemperature: 660.37,
    group: 13,
    metalMetalloidNonmetal: "post-​transition metal",
    name: "aluminum",
    period: 3,
    special: false,
    state: States.SOLID,
    symbol: "Al"
};

export default aluminum;
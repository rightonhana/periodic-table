import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const tin: ElementData = {
    acidBaseProperties: AcidBaseProperties.ACID_BASE,
    atomicMass: 118.710,
    atomicNumber: 50,
    boilingTemperature: 2270,
    commonOxidationStates: [2, 4],
    crystalStructure: CrystalStructures.TETR,
    electronConfiguration: "[Kr] 5s2 4d10 5p2",
    fusionTemperature: 231.97,
    group: 14,
    metalMetalloidNonmetal: "post-​transition metal",
    name: "tin",
    period: 5,
    special: false,
    state: States.SOLID,
    symbol: "Sn"
};

export default tin;
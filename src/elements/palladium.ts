import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const palladium: ElementData = {
    acidBaseProperties: AcidBaseProperties.BASE,
    atomicMass: 106.42,
    atomicNumber: 46,
    boilingTemperature: 3140,
    commonOxidationStates: [2, 4],
    crystalStructure: CrystalStructures.FCC,
    electronConfiguration: "[Kr] 5s2 4d8",
    fusionTemperature: 1554,
    group: 10,
    metalMetalloidNonmetal: "transition metal",
    name: "palladium",
    period: 5,
    special: false,
    state: States.SOLID,
    symbol: "Pd"
};

export default palladium;
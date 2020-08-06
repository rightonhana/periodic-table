import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const technetium: ElementData = {
    acidBaseProperties: AcidBaseProperties.ACID,
    atomicMass: 98,
    atomicNumber: 43,
    boilingTemperature: 4277,
    commonOxidationStates: [7],
    crystalStructure: CrystalStructures.HCP,
    electronConfiguration: "[Kr] 5s2 4d5",
    fusionTemperature: 2172,
    group: 7,
    metalMetalloidNonmetal: "transition metal",
    name: "technetium",
    period: 5,
    special: true,
    state: States.SOLID,
    symbol: "Tc"
};

export default technetium;
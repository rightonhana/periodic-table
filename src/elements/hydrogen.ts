import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const hydrogen: ElementData = {
    acidBaseProperties: AcidBaseProperties.ACID_BASE,
    atomicMass: 1.00794,
    atomicNumber: 1,
    boilingTemperature: -252.87,
    commonOxidationStates: [1],
    crystalStructure: CrystalStructures.HEX,
    electronConfiguration: "1s1",
    fusionTemperature: -259.34,
    group: 1,
    metalMetalloidNonmetal: "reactive nonmetal",
    name: "hydrogen",
    period: 0,
    special: false,
    state: States.GAS,
    symbol: "h"
};

export default hydrogen;
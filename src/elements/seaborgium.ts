import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";

export const seaborgium: ElementData = {
    atomicMass: 263,
    atomicNumber: 106,
    commonOxidationStates: [5, 6],
    crystalStructure: CrystalStructures.BCC,
    electronConfiguration: "[Rn] 7s2 5f14 6d4",
    group: 6,
    metalMetalloidNonmetal: "transition metal",
    name: "seaborgium",
    period: 7,
    special: true,
    state: States.SOLID,
    symbol: "Sg"
};

export default seaborgium;
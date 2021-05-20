import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";

export const flerovium: ElementData = {
	atomicMass: 289,
	atomicNumber: 114,
	commonOxidationStates: [0, 1, 2, 4, 6],
	crystalStructure: CrystalStructures.FCC,
	electronConfiguration: "[Rn] 7s2 5f14 6d10 7p2",
	group: 14,
	metalMetalloidNonmetal: "unknown",
	name: "flerovium",
	period: 7,
	special: true,
	state: States.LIQUID,
	symbol: "Fl"
};

export default flerovium;
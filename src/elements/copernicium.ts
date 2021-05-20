import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";

export const copernicium: ElementData = {
	atomicMass: 285,
	atomicNumber: 112,
	commonOxidationStates: [0, 1, 2],
	crystalStructure: CrystalStructures.HCP,
	electronConfiguration: "[Rn] 7s2 5f14 6d10",
	group: 12,
	metalMetalloidNonmetal: "unknown",
	name: "copernicium",
	period: 7,
	special: true,
	state: States.SOLID,
	symbol: "Cn"
};

export default copernicium;
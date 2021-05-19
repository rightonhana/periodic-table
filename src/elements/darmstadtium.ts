import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";

export const darmstadtium: ElementData = {
	atomicMass: 281,
	atomicNumber: 110,
	commonOxidationStates: [-1, 1, 3, 5, 7],
	crystalStructure: CrystalStructures.BCC,
	electronConfiguration: "[Rn] 7s2 5f14 6d9",
	group: 10,
	metalMetalloidNonmetal: "unknown",
	name: "darmstadtium",
	period: 7,
	special: true,
	state: States.SOLID,
	symbol: "ds"
};

export default darmstadtium;
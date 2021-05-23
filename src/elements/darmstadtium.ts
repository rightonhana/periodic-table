import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import ElementCategories from "../enums/ElementCategories";

export const darmstadtium: ElementData = {
	atomicMass: 269,
	atomicNumber: 110,
	commonOxidationStates: [-1, 1, 3, 5, 7],
	crystalStructure: CrystalStructures.BCC,
	electronConfiguration: "[Rn] 7s2 5f14 6d8",
	electronsPerShell: [2, 8, 18, 32, 32, 16, 2],
	group: 10,
	elementCategory: ElementCategories.UNKNOWN,
	name: "darmstadtium",
	period: 7,
	special: true,
	state: States.SOLID,
	symbol: "Ds"
};

export default darmstadtium;
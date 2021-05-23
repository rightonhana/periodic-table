import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import ElementCategories from "../enums/ElementCategories";

export const copernicium: ElementData = {
	atomicMass: 285,
	atomicNumber: 112,
	commonOxidationStates: [0, 1, 2],
	crystalStructure: CrystalStructures.HCP,
	electronConfiguration: "[Rn] 7s2 5f14 6d10",
	electronsPerShell: [2, 8, 18, 32, 32, 18, 2],
	group: 12,
	elementCategory: ElementCategories.TRANSITION_METAL,
	name: "copernicium",
	period: 7,
	special: true,
	state: States.SOLID,
	symbol: "Cn"
};

export default copernicium;
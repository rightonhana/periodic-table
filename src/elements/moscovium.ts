import ElementData from "../types/ElementData";
import States from "../enums/States";
import ElementCategories from "../enums/ElementCategories";

export const moscovium: ElementData = {
	atomicMass: 288,
	atomicNumber: 115,
	commonOxidationStates: [1, 3],
	electronConfiguration: "[Rn] 7s2 5f14 6d10 7p3",
	electronsPerShell: [2, 8, 18, 32, 32, 18, 5],
	group: 15,
	elementCategory: ElementCategories.UNKNOWN,
	name: "moscovium",
	period: 7,
	special: true,
	state: States.SOLID,
	symbol: "Mc"
};

export default moscovium;
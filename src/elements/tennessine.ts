import ElementData from "../types/ElementData";
import States from "../enums/States";
import ElementCategories from "../enums/ElementCategories";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const tennessine: ElementData = {
	acidBaseProperties: AcidBaseProperties.UNKNOWN,
	atomicMass: 294,
	atomicNumber: 117,
	commonOxidationStates: [-1, 1, 3, 5],
	electronConfiguration: "[Rn] 7s2 5f14 6d10 7p5",
	electronsPerShell: [2, 8, 18, 32, 32, 18, 7],
	group: 17,
	elementCategory: ElementCategories.UNKNOWN,
	name: "tennessine",
	period: 7,
	special: true,
	state: States.SOLID,
	symbol: "Ts"
};

export default tennessine;
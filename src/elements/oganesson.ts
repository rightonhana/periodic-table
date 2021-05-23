import ElementData from "../types/ElementData";
import States from "../enums/States";
import ElementCategories from "../enums/ElementCategories";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const oganesson: ElementData = {
	acidBaseProperties: AcidBaseProperties.UNKNOWN,
	atomicMass: 294,
	atomicNumber: 118,
	commonOxidationStates: [-1, 0, 1, 2, 4, 6],
	electronConfiguration: "[Rn] 7s2 5f14 6d10 7p6",
	electronsPerShell: [2, 8, 18, 32, 32, 18, 8],
	group: 18,
	elementCategory: ElementCategories.UNKNOWN,
	name: "oganesson",
	period: 7,
	special: true,
	state: States.SOLID,
	symbol: "Og"
};

export default oganesson;
import ElementData from "../types/ElementData";
import States from "../enums/States";
import ElementCategories from "../enums/ElementCategories";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const ununennium: ElementData = {
	acidBaseProperties: AcidBaseProperties.UNKNOWN,
	atomicMass: 316,
	atomicNumber: 119,
	commonOxidationStates: [1, 3],
	electronConfiguration: "8s1",
	electronsPerShell: [2, 8, 18, 32, 32, 18, 8, 1],
	group: 1,
	elementCategory: ElementCategories.UNKNOWN,
	name: "ununennium",
	period: 8,
	special: true,
	state: States.UNKNOWN,
	symbol: "Uue"
};

export default ununennium;
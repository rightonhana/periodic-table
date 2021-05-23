import ElementData from "../types/ElementData";
import States from "../enums/States";
import ElementCategories from "../enums/ElementCategories";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const unbinilium: ElementData = {
	acidBaseProperties: AcidBaseProperties.UNKNOWN,
	atomicMass: 327,
	atomicNumber: 120,
	commonOxidationStates: [1, 2, 4],
	electronConfiguration: "8s2",
	electronsPerShell: [2, 8, 18, 32, 32, 18, 8, 2],
	group: 2,
	elementCategory: ElementCategories.UNKNOWN,
	name: "unbinilium",
	period: 8,
	special: true,
	state: States.UNKNOWN,
	symbol: "Ubn"
};

export default unbinilium;
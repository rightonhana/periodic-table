import ElementData from "../types/ElementData";
import States from "../enums/States";
import ElementCategories from "../enums/ElementCategories";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const livermorium: ElementData = {
	acidBaseProperties: AcidBaseProperties.UNKNOWN,
	atomicMass: 293,
	atomicNumber: 116,
	commonOxidationStates: [2, 4],
	electronConfiguration: "[Rn] 7s2 5f14 6d10 7p4",
	electronsPerShell: [2, 8, 18, 32, 32, 18, 6],
	group: 16,
	elementCategory: ElementCategories.UNKNOWN,
	name: "livermorium",
	period: 7,
	special: true,
	state: States.SOLID,
	symbol: "Lv"
};

export default livermorium;
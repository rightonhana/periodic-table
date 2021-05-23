import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import ElementCategories from "../enums/ElementCategories";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const nihonium: ElementData = {
	acidBaseProperties: AcidBaseProperties.UNKNOWN,
	atomicMass: 286,
	atomicNumber: 113,
	commonOxidationStates: [-1, 1, 3, 5],
	crystalStructure: CrystalStructures.HCP,
	electronConfiguration: "[Rn] 7s2 5f14 6d10 7p1",
	electronsPerShell: [2, 8, 18, 32, 32, 18, 3],
	group: 13,
	elementCategory: ElementCategories.UNKNOWN,
	name: "nihonium",
	period: 7,
	special: true,
	state: States.SOLID,
	symbol: "Nh"
};

export default nihonium;
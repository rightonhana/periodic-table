import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";
import ElementCategories from "../enums/ElementCategories";

export const zinc: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID_BASE,
	atomicMass: 65.39,
	atomicNumber: 30,
	boilingTemperature: 907,
	commonOxidationStates: [2],
	crystalStructure: CrystalStructures.HCP,
	electronConfiguration: "[Ar] 4s2 3d10",
	electronsPerShell: [2, 8, 18, 2],
	fusionTemperature: 419.58,
	group: 12,
	elementCategory: ElementCategories.POST_TRANSITION_METAL,
	name: "zinc",
	period: 4,
	special: false,
	state: States.SOLID,
	symbol: "Zn"
};

export default zinc;
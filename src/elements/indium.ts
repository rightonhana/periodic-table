import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";
import ElementCategories from "../enums/ElementCategories";

export const indium: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID_BASE,
	atomicMass: 114.82,
	atomicNumber: 49,
	boilingTemperature: 2080,
	commonOxidationStates: [3],
	crystalStructure: CrystalStructures.TETR,
	electronConfiguration: "[Kr] 5s2 4d10 5p1",
	electronsPerShell: [2, 8, 18, 18, 3],
	fusionTemperature: 156.61,
	group: 13,
	elementCategory: ElementCategories.POST_TRANSITION_METAL,
	name: "indium",
	period: 5,
	special: false,
	state: States.SOLID,
	symbol: "In"
};

export default indium;
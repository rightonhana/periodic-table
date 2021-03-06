import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";
import ElementCategories from "../enums/ElementCategories";

export const polonium: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID_BASE,
	atomicMass: 209,
	atomicNumber: 84,
	boilingTemperature: 962,
	commonOxidationStates: [2, 4],
	crystalStructure: CrystalStructures.SC,
	electronConfiguration: "[Xe] 6s2 4f14 5d10 6p4",
	electronsPerShell: [2, 8, 18, 32, 18, 6],
	fusionTemperature: 254,
	group: 16,
	elementCategory: ElementCategories.POST_TRANSITION_METAL,
	name: "polonium",
	period: 6,
	special: false,
	state: States.SOLID,
	symbol: "Po"
};

export default polonium;
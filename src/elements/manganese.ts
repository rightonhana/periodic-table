import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";
import ElementCategories from "../enums/ElementCategories";

export const manganese: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID,
	atomicMass: 54.93805,
	atomicNumber: 25,
	boilingTemperature: 1962,
	commonOxidationStates: [2, 3, 4, 6, 7],
	crystalStructure: CrystalStructures.BCC,
	electronConfiguration: "[Ar] 4s2 3d5",
	electronsPerShell: [2, 8, 13, 2],
	fusionTemperature: 1244,
	group: 7,
	elementCategory: ElementCategories.TRANSITION_METAL,
	name: "manganese",
	period: 4,
	special: false,
	state: States.SOLID,
	symbol: "Mn"
};

export default manganese;
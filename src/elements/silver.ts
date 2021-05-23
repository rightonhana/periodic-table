import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";
import ElementCategories from "../enums/ElementCategories";

export const silver: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID_BASE,
	atomicMass: 107.8682,
	atomicNumber: 47,
	boilingTemperature: 2212,
	commonOxidationStates: [1],
	crystalStructure: CrystalStructures.FCC,
	electronConfiguration: "[Kr] 5s2 4d9",
	electronsPerShell: [2, 8, 18, 18, 1],
	fusionTemperature: 961.93,
	group: 11,
	elementCategory: ElementCategories.TRANSITION_METAL,
	name: "silver",
	period: 5,
	special: false,
	state: States.SOLID,
	symbol: "Ag"
};

export default silver;
import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";
import ElementCategories from "../enums/ElementCategories";

export const ruthenium: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID,
	atomicMass: 101.07,
	atomicNumber: 44,
	boilingTemperature: 3900,
	commonOxidationStates: [2, 3, 4, 6, 8],
	crystalStructure: CrystalStructures.HCP,
	electronConfiguration: "[Kr] 5s2 4d6",
	electronsPerShell: [2, 8, 18, 15, 1],
	fusionTemperature: 2310,
	group: 8,
	elementCategory: ElementCategories.TRANSITION_METAL,
	name: "ruthenium",
	period: 5,
	special: false,
	state: States.SOLID,
	symbol: "Ru"
};

export default ruthenium;
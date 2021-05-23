import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import ElementCategories from "../enums/ElementCategories";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const rutherfordium: ElementData = {
	acidBaseProperties: AcidBaseProperties.UNKNOWN,
	atomicMass: 261,
	atomicNumber: 104,
	boilingTemperature: 5500,
	commonOxidationStates: [3, 4],
	crystalStructure: CrystalStructures.HCP,
	electronConfiguration: "[Rn] 7s2 5f14 6d2",
	electronsPerShell: [2, 8, 18, 32, 32, 10, 2],
	fusionTemperature: 2100,
	group: 4,
	elementCategory: ElementCategories.TRANSITION_METAL,
	name: "rutherfordium",
	period: 7,
	special: true,
	state: States.SOLID,
	symbol: "Rf"
};

export default rutherfordium;
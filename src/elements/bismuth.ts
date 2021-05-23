import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";
import ElementCategories from "../enums/ElementCategories";

export const bismuth: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID,
	atomicMass: 208.98037,
	atomicNumber: 83,
	boilingTemperature: 962,
	commonOxidationStates: [3, 5],
	crystalStructure: CrystalStructures.RHO,
	electronConfiguration: "[Xe] 6s2 4f14 5d10 6p3",
	electronsPerShell: [2, 8, 18, 32, 18, 5],
	fusionTemperature: 271.3,
	group: 15,
	elementCategory: ElementCategories.POST_TRANSITION_METAL,
	name: "bismuth",
	period: 6,
	special: false,
	state: States.SOLID,
	symbol: "Bi"
};

export default bismuth;
import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";
import ElementCategories from "../enums/ElementCategories";

export const technetium: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID,
	atomicMass: 98,
	atomicNumber: 43,
	boilingTemperature: 4277,
	commonOxidationStates: [7],
	crystalStructure: CrystalStructures.HCP,
	electronConfiguration: "[Kr] 5s2 4d5",
	electronsPerShell: [2, 8, 18, 13, 2],
	fusionTemperature: 2172,
	group: 7,
	elementCategory: ElementCategories.TRANSITION_METAL,
	name: "technetium",
	period: 5,
	special: true,
	state: States.SOLID,
	symbol: "Tc"
};

export default technetium;
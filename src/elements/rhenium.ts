import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";
import ElementCategories from "../enums/ElementCategories";

export const rhenium: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID,
	atomicMass: 186.207,
	atomicNumber: 75,
	boilingTemperature: 5627,
	commonOxidationStates: [-1, 2, 4, 6, 7],
	crystalStructure: CrystalStructures.HCP,
	electronConfiguration: "[Xe] 6s2 4f14 5d5",
	electronsPerShell: [2, 8, 18, 32, 13, 2],
	fusionTemperature: 3180,
	group: 7,
	elementCategory: ElementCategories.TRANSITION_METAL,
	name: "rhenium",
	period: 6,
	special: false,
	state: States.SOLID,
	symbol: "Re"
};

export default rhenium;
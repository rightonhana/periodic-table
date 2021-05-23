import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";
import ElementCategories from "../enums/ElementCategories";

export const scandium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 44.9559,
	atomicNumber: 21,
	boilingTemperature: 2836,
	crystalStructure: CrystalStructures.HCP,
	electronConfiguration: "[Ar] 4s2 3d1",
	electronsPerShell: [2, 8, 9, 2],
	fusionTemperature: 1541,
	group: 3,
	elementCategory: ElementCategories.TRANSITION_METAL,
	name: "scandium",
	period: 4,
	special: false,
	state: States.SOLID,
	symbol: "Sc"
};

export default scandium;
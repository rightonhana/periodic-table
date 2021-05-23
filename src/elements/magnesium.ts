import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import ElementCategories from "../enums/ElementCategories";

export const magnesium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 24.3050,
	atomicNumber: 12,
	boilingTemperature: 1090,
	commonOxidationStates: [2],
	crystalStructure: CrystalStructures.HCP,
	electronConfiguration: "[Ne] 3s2",
	electronsPerShell: [2, 8, 2],
	fusionTemperature: 648.8,
	group: 2,
	elementCategory: ElementCategories.ALKALINE_EARTH_METAL,
	name: "magnesium",
	period: 3,
	special: false,
	state: States.SOLID,
	symbol: "Mg"
};

export default magnesium;
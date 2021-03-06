import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import ElementCategories from "../enums/ElementCategories";

export const beryllium: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID_BASE,
	atomicMass: 9.012182,
	atomicNumber: 4,
	boilingTemperature: 2970,
	commonOxidationStates: [2],
	crystalStructure: CrystalStructures.HCP,
	electronConfiguration: "1s2 2s2",
	electronsPerShell: [2, 2],
	fusionTemperature: 1.278,
	group: 2,
	elementCategory: ElementCategories.ALKALINE_EARTH_METAL,
	name: "beryllium",
	period: 2,
	special: false,
	state: States.SOLID,
	symbol: "Be"
};

export default beryllium;
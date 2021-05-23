import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";
import ElementCategories from "../enums/ElementCategories";

export const barium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 137.327,
	atomicNumber: 56,
	boilingTemperature: 1640,
	commonOxidationStates: [2],
	crystalStructure: CrystalStructures.BCC,
	electronConfiguration: "[Xe] 6s2",
	electronsPerShell: [2, 8, 18, 18, 8, 2],
	fusionTemperature: 725,
	group: 2,
	elementCategory: ElementCategories.ALKALINE_EARTH_METAL,
	name: "barium",
	period: 6,
	special: false,
	state: States.SOLID,
	symbol: "Ba"
};

export default barium;
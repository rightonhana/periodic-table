import ElementData from "../types/ElementData";
import CrystalStructures from "../enums/CrystalStructures";
import States from "../enums/States";
import ElementCategories from "../enums/ElementCategories";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const dubnium: ElementData = {
	acidBaseProperties: AcidBaseProperties.UNKNOWN,
	atomicMass: 262,
	atomicNumber: 105,
	boilingTemperature: 5700,
	commonOxidationStates: [3, 4],
	crystalStructure: CrystalStructures.BCC,
	electronConfiguration: "[Rn] 7s2 5f14 6d3",
	electronsPerShell: [2, 8, 18, 32, 32, 11, 2],
	fusionTemperature: 3000,
	group: 5,
	elementCategory: ElementCategories.TRANSITION_METAL,
	name: "dubnium",
	period: 7,
	special: true,
	state: States.SOLID,
	symbol: "Db"
};

export default dubnium;
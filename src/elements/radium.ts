import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";
import ElementCategories from "../enums/ElementCategories";

export const radium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 226.025,
	atomicNumber: 88,
	boilingTemperature: 1140,
	commonOxidationStates: [2],
	crystalStructure: CrystalStructures.BCC,
	electronConfiguration: "[Rn] 7s2",
	electronsPerShell: [2, 8, 18, 32, 18, 8, 2],
	fusionTemperature: 700,
	group: 2,
	elementCategory: ElementCategories.ALKALINE_EARTH_METAL,
	name: "radium",
	period: 7,
	special: false,
	state: States.SOLID,
	symbol: "Ra"
};

export default radium;
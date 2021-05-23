import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";
import ElementCategories from "../enums/ElementCategories";

export const cesium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 132.90543,
	atomicNumber: 55,
	boilingTemperature: 669.3,
	commonOxidationStates: [1],
	crystalStructure: CrystalStructures.BCC,
	electronConfiguration: "[Xe] 6s1",
	electronsPerShell: [2, 8, 18, 18, 8, 1],
	fusionTemperature: 28.40,
	group: 1,
	elementCategory: ElementCategories.ALKALI_METAL,
	name: "cesium",
	period: 6,
	special: false,
	state: States.LIQUID,
	symbol: "Cs"
};

export default cesium;
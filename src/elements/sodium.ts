import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import ElementCategories from "../enums/ElementCategories";

export const sodium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 22.989768,
	atomicNumber: 11,
	boilingTemperature:882.9,
	commonOxidationStates: [1],
	crystalStructure: CrystalStructures.BCC,
	electronConfiguration: "[Ne] 3s1",
	electronsPerShell: [2, 8, 1],
	fusionTemperature: 97.81,
	group: 1,
	elementCategory: ElementCategories.ALKALI_METAL,
	name: "sodium",
	period: 3,
	special: false,
	state: States.SOLID,
	symbol: "Na"
};

export default sodium;
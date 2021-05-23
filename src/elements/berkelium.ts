import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import ElementCategories from "../enums/ElementCategories";

export const berkelium: ElementData = {
	acidBaseProperties: AcidBaseProperties.UNKNOWN,
	atomicMass: 247,
	atomicNumber: 97,
	boilingTemperature: 2627,
	commonOxidationStates: [3, 4],
	crystalStructure: CrystalStructures.HEX,
	electronConfiguration: "[Rn] 7s2 5f9",
	electronsPerShell: [2, 8, 18, 32, 27, 8, 2],
	fusionTemperature: 1050,
	group: "3 VIII",
	elementCategory: ElementCategories.ACTINIDE,
	name: "berkelium",
	period: 7,
	special: false,
	state: States.SOLID,
	symbol: "Bk"
};

export default berkelium;
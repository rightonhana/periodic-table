import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import ElementCategories from "../enums/ElementCategories";

export const promethium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 145,
	atomicNumber: 61,
	boilingTemperature: 3000,
	commonOxidationStates: [3],
	crystalStructure: CrystalStructures.HEX,
	electronConfiguration: "[Xe] 6s2 4f5",
	electronsPerShell: [2, 8, 18, 23, 8, 2],
	fusionTemperature: 1042,
	group: "3 IV",
	elementCategory: ElementCategories.LANTHANIDE,
	name: "promethium",
	period: 6,
	special: false,
	state: States.SOLID,
	symbol: "Pm"
};

export default promethium;
import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import ElementCategories from "../enums/ElementCategories";

export const neodymium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 144.24,
	atomicNumber: 60,
	boilingTemperature: 3074,
	commonOxidationStates: [3, 4],
	crystalStructure: CrystalStructures.HEX,
	electronConfiguration: "[Xe] 6s2 4f4",
	electronsPerShell: [2, 8, 18, 22, 8, 2],
	fusionTemperature: 1010,
	group: "3 III",
	elementCategory: ElementCategories.LANTHANIDE,
	name: "neodymium",
	period: 6,
	special: false,
	state: States.SOLID,
	symbol: "Nd"
};

export default neodymium;
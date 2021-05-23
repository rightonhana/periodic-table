import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import ElementCategories from "../enums/ElementCategories";

export const dysprosium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 162.50,
	atomicNumber: 66,
	boilingTemperature: 2567,
	commonOxidationStates: [3],
	crystalStructure: CrystalStructures.HEX,
	electronConfiguration: "[Xe] 6s2 4f10",
	electronsPerShell: [2, 8, 18, 28, 8, 2],
	fusionTemperature: 1412,
	group: "3 IX",
	elementCategory: ElementCategories.LANTHANIDE,
	name: "dysprosium",
	period: 6,
	special: false,
	state: States.SOLID,
	symbol: "Dy"
};

export default dysprosium;
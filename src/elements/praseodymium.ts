import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import ElementCategories from "../enums/ElementCategories";

export const praseodymium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 140.90765,
	atomicNumber: 59,
	boilingTemperature: 3520,
	commonOxidationStates: [3, 4],
	crystalStructure: CrystalStructures.HEX,
	electronConfiguration: "[Xe] 6s2 4f3",
	electronsPerShell: [2, 8, 18, 21, 8, 2],
	fusionTemperature: 931,
	group: "3 II",
	elementCategory: ElementCategories.LANTHANIDE,
	name: "praseodymium",
	period: 6,
	special: false,
	state: States.SOLID,
	symbol: "Pr"
};

export default praseodymium;
import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import ElementCategories from "../enums/ElementCategories";

export const erbium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 167.26,
	atomicNumber: 68,
	boilingTemperature: 2868,
	commonOxidationStates: [3],
	crystalStructure: CrystalStructures.HEX,
	electronConfiguration: "[Xe] 6s2 4f12",
	electronsPerShell: [2, 8, 18, 30, 8, 2],
	fusionTemperature: 1529,
	group: "3 XI",
	elementCategory: ElementCategories.LANTHANIDE,
	name: "erbium",
	period: 6,
	special: false,
	state: States.SOLID,
	symbol: "Er"
};

export default erbium;
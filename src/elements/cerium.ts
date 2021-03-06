import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import ElementCategories from "../enums/ElementCategories";

export const cerium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 140.116,
	atomicNumber: 58,
	boilingTemperature: 3443,
	commonOxidationStates: [3, 4],
	crystalStructure: CrystalStructures.FCC,
	electronConfiguration: "[Xe] 6s2 4f2",
	electronsPerShell: [2, 8, 18, 19, 9, 2],
	fusionTemperature: 799,
	group: "3 I",
	elementCategory: ElementCategories.LANTHANIDE,
	name: "cerium",
	period: 6,
	special: false,
	state: States.SOLID,
	symbol: "Ce"
};

export default cerium;
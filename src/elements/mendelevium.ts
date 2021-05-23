import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import ElementCategories from "../enums/ElementCategories";

export const mendelevium: ElementData = {
	acidBaseProperties: AcidBaseProperties.UNKNOWN,
	atomicMass: 258,
	atomicNumber: 101,
	commonOxidationStates: [2, 3],
	crystalStructure: CrystalStructures.UK,
	electronConfiguration: "[Rn] 7s2 5f13",
	electronsPerShell: [2, 8, 18, 32, 31, 8, 2],
	fusionTemperature: 827,
	group: "3 XII",
	elementCategory: ElementCategories.ACTINIDE,
	name: "mendelevium",
	period: 7,
	special: false,
	state: States.SOLID,
	symbol: "Md"
};

export default mendelevium;
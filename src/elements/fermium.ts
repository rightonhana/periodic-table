import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import ElementCategories from "../enums/ElementCategories";

export const fermium: ElementData = {
	acidBaseProperties: AcidBaseProperties.UNKNOWN,
	atomicMass: 257,
	atomicNumber: 100,
	commonOxidationStates: [2, 3],
	crystalStructure: CrystalStructures.UK,
	electronConfiguration: "[Rn] 7s2 5f12",
	electronsPerShell: [2, 8, 18, 32, 30, 8, 2],
	fusionTemperature: 1527,
	group: "3 XI",
	elementCategory: ElementCategories.ACTINIDE,
	name: "fermium",
	period: 7,
	special: false,
	state: States.SOLID,
	symbol: "Fm"
};

export default fermium;
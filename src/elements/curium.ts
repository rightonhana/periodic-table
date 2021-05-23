import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import ElementCategories from "../enums/ElementCategories";

export const curium: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID_BASE,
	atomicMass: 247,
	atomicNumber: 96,
	boilingTemperature: 3100,
	commonOxidationStates: [3, 4],
	crystalStructure: CrystalStructures.FCC,
	electronConfiguration: "[Rn] 7s2 6d1 5f7",
	electronsPerShell: [2, 8, 18, 32, 25, 9, 2],
	fusionTemperature: 1340,
	group: "3 VII",
	elementCategory: ElementCategories.ACTINIDE,
	name: "curium",
	period: 7,
	special: false,
	state: States.SOLID,
	symbol: "Cm"
};

export default curium;
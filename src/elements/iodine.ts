import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";
import ElementCategories from "../enums/ElementCategories";

export const iodine: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID,
	atomicMass: 126.90447,
	atomicNumber: 53,
	boilingTemperature: 184.35,
	commonOxidationStates: [-1, 1, 3, 5, 7],
	crystalStructure: CrystalStructures.ORTH,
	electronConfiguration: "[Kr] 5s2 4d10 5p5",
	electronsPerShell: [2, 8, 18, 18, 7],
	fusionTemperature: 113.5,
	group: 17,
	elementCategory: ElementCategories.REACTIVE_NONMETAL,
	name: "iodine",
	period: 5,
	special: false,
	state: States.SOLID,
	symbol: "I"
};

export default iodine;
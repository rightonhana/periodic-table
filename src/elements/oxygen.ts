import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import ElementCategories from "../enums/ElementCategories";

export const oxygen: ElementData = {
	acidBaseProperties: AcidBaseProperties.NEUTRAL,
	atomicMass: 15.9994,
	atomicNumber: 8,
	boilingTemperature: -182.962,
	commonOxidationStates: [-2],
	crystalStructure: CrystalStructures.SC,
	electronConfiguration: "1s2 2s2 2p4",
	electronsPerShell: [2, 6],
	fusionTemperature: -218.4,
	group: 16,
	elementCategory: ElementCategories.REACTIVE_NONMETAL,
	name: "oxygen",
	period: 2,
	special: false,
	state: States.GAS,
	symbol: "O",
};

export default oxygen;
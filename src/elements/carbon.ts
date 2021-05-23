import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import ElementCategories from "../enums/ElementCategories";

export const carbon: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID,
	atomicMass: 12.011,
	atomicNumber: 6,
	boilingTemperature: 3727,
	commonOxidationStates: [2, 4],
	crystalStructure: CrystalStructures.HEX,
	electronConfiguration: "1s2 2s2 2p2",
	electronsPerShell: [2, 4],
	fusionTemperature: 3652,
	group: 14,
	elementCategory: ElementCategories.REACTIVE_NONMETAL,
	name: "carbon",
	period: 2,
	special: false,
	state: States.SOLID,
	symbol: "C"
};

export default carbon;
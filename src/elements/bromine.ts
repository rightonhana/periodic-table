import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";
import ElementCategories from "../enums/ElementCategories";

export const bromine: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID,
	atomicMass: 79.904,
	atomicNumber: 35,
	boilingTemperature: 58.78,
	commonOxidationStates: [-1, 1, 3, 5, 7],
	crystalStructure: CrystalStructures.ORTH,
	electronConfiguration: "[Ar] 4s2 3d10 4p5",
	electronsPerShell: [2, 8, 18, 7],
	fusionTemperature: -7.2,
	group: 17,
	elementCategory: ElementCategories.REACTIVE_NONMETAL,
	name: "bromine",
	period: 4,
	special: false,
	state: States.LIQUID,
	symbol: "Br"
};

export default bromine;
import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";
import ElementCategories from "../enums/ElementCategories";

export const selenium: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID,
	atomicMass: 78.96,
	atomicNumber: 34,
	boilingTemperature: 684.9,
	commonOxidationStates: [-2, 4, 6],
	crystalStructure: CrystalStructures.HEX,
	electronConfiguration: "[Ar] 4s2 3d10 4p4",
	electronsPerShell: [2, 8, 18, 6],
	fusionTemperature: 217,
	group: 16,
	elementCategory: ElementCategories.REACTIVE_NONMETAL,
	name: "selenium",
	period: 4,
	special: false,
	state: States.SOLID,
	symbol: "Se"
};

export default selenium;
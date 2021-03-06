import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import ElementCategories from "../enums/ElementCategories";

export const hydrogen: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID_BASE,
	atomicMass: 1.00794,
	atomicNumber: 1,
	boilingTemperature: -252.87,
	commonOxidationStates: [1],
	crystalStructure: CrystalStructures.HEX,
	electronConfiguration: "1s1",
	electronsPerShell: [1],
	fusionTemperature: -259.34,
	group: 1,
	elementCategory: ElementCategories.REACTIVE_NONMETAL,
	name: "hydrogen",
	period: 1,
	special: false,
	state: States.GAS,
	symbol: "H"
};

export default hydrogen;
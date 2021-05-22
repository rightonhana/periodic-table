import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const einsteinium: ElementData = {
	acidBaseProperties: AcidBaseProperties.UNKNOWN,
	atomicMass: 252,
	atomicNumber: 99,
	boilingTemperature: 996,
	commonOxidationStates: [3],
	crystalStructure: CrystalStructures.HEX,
	electronConfiguration: "[Rn] 7s2 5f11",
	electronsPerShell: [2, 8, 18, 32, 29, 8, 2],
	fusionTemperature: 860,
	group: "3 X",
	metalMetalloidNonmetal: "actinide",
	name: "einsteinium",
	period: 7,
	special: false,
	state: States.SOLID,
	symbol: "Es"
};

export default einsteinium;
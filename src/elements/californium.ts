import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const californium: ElementData = {
	acidBaseProperties: AcidBaseProperties.UNKNOWN,
	atomicMass: 251,
	atomicNumber: 98,
	boilingTemperature: 1472,
	commonOxidationStates: [3],
	crystalStructure: CrystalStructures.HEX,
	electronConfiguration: "[Rn] 7s2 5f10",
	electronsPerShell: [2, 8, 18, 32, 28, 8, 2],
	fusionTemperature: 900,
	group: "3 IX",
	metalMetalloidNonmetal: "actinide",
	name: "californium",
	period: 7,
	special: false,
	state: States.SOLID,
	symbol: "Cf"
};

export default californium;
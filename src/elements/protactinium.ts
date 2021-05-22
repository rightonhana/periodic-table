import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const protactinium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 231.0359,
	atomicNumber: 91,
	boilingTemperature: 4027,
	commonOxidationStates: [3, 4, 5],
	crystalStructure: CrystalStructures.TETR,
	electronConfiguration: "[Rn] 7s2 6d1 5f2",
	electronsPerShell: [2, 8, 18, 32, 20, 9, 2],
	fusionTemperature: 1600,
	group: "3 II",
	metalMetalloidNonmetal: "actinide",
	name: "protactinium",
	period: 7,
	special: false,
	state: States.SOLID,
	symbol: "Pa"
};

export default protactinium;
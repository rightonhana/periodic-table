import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const actinium: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID,
	atomicMass: 227.028,
	atomicNumber: 89,
	boilingTemperature: 3200,
	commonOxidationStates: [3],
	crystalStructure: CrystalStructures.FCC,
	electronConfiguration: "[Rn] 7s2 6d1",
	electronsPerShell: [2, 8, 18, 32, 18, 9, 2],
	fusionTemperature: 1050,
	group: 3,
	metalMetalloidNonmetal: "actinide",
	name: "actinium",
	period: 7,
	special: false,
	state: States.SOLID,
	symbol: "Ac"
};

export default actinium;
import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const molybdenum: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID,
	atomicMass: 95.94,
	atomicNumber: 42,
	boilingTemperature: 4612,
	commonOxidationStates: [2, 3, 4, 5, 6],
	crystalStructure: CrystalStructures.BCC,
	electronConfiguration: "[Kr] 5s2 4d4",
	electronsPerShell: [2, 8, 18, 13, 1],
	fusionTemperature: 2617,
	group: 6,
	metalMetalloidNonmetal: "transition metal",
	name: "molybdenum",
	period: 5,
	special: false,
	state: States.SOLID,
	symbol: "Mo"
};

export default molybdenum;
import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const sulfur: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID,
	atomicMass: 32.066,
	atomicNumber: 16,
	boilingTemperature: 444.674,
	commonOxidationStates: [-2, 2, 4, 6],
	crystalStructure: CrystalStructures.ORTH,
	electronConfiguration: "[Ne] 3s2 3p4",
	electronsPerShell: [2, 8, 6],
	fusionTemperature: 112.8,
	group: 16,
	metalMetalloidNonmetal: "reactive nonmetal",
	name: "sulfur",
	period: 3,
	special: false,
	state: States.SOLID,
	symbol: "S"
};

export default sulfur;
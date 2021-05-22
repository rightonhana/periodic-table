import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const nitrogen: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID,
	atomicMass: 14.00674,
	atomicNumber: 7,
	boilingTemperature: -195.8,
	commonOxidationStates: [-3, -2, -1, 1, 2, 3, 4, 5],
	crystalStructure: CrystalStructures.HEX,
	electronConfiguration: "1s2 2s2 2p3",
	electronsPerShell: [2, 5],
	fusionTemperature: -218.4,
	group: 15,
	metalMetalloidNonmetal: "reactive nonmetal",
	name: "nitrogen",
	period: 2,
	special: false,
	state: States.GAS,
	symbol: "N"
};

export default nitrogen;
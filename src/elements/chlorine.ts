import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const chlorine: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID,
	atomicMass: 35.4527,
	atomicNumber: 17,
	boilingTemperature: -34.6,
	commonOxidationStates: [-1, 1, 3, 5, 7],
	crystalStructure: CrystalStructures.ORTH,
	electronConfiguration: "[Ne] 3s2 3p5",
	electronsPerShell: [2, 8, 7],
	fusionTemperature: -100.98,
	group: 17,
	metalMetalloidNonmetal: "reactive nonmetal",
	name: "chlorine",
	period: 3,
	special: false,
	state: States.GAS,
	symbol: "Cl"
};

export default chlorine;
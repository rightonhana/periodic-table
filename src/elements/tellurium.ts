import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const tellurium: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID,
	atomicMass: 127.60,
	atomicNumber: 52,
	boilingTemperature: 989.8,
	commonOxidationStates: [-2, 4, 6],
	crystalStructure: CrystalStructures.HEX,
	electronConfiguration: "[Kr] 5s2 4d10 5p4",
	electronsPerShell: [2, 8, 18, 18, 6],
	fusionTemperature: 449.5,
	group: 16,
	metalMetalloidNonmetal: "metalloid",
	name: "tellurium",
	period: 5,
	special: false,
	state: States.SOLID,
	symbol: "Te"
};

export default tellurium;
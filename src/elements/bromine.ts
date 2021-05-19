import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const bromine: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID,
	atomicMass: 79.904,
	atomicNumber: 35,
	boilingTemperature: 58.78,
	commonOxidationStates: [-1, 1, 3, 5, 7],
	crystalStructure: CrystalStructures.ORTH,
	electronConfiguration: "[Ar] 4s2 3d10 4p5",
	fusionTemperature: -7.2,
	group: 17,
	metalMetalloidNonmetal: "reactive nonmetal",
	name: "bromine",
	period: 4,
	special: false,
	state: States.LIQUID,
	symbol: "Br"
};

export default bromine;
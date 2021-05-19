import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const selenium: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID,
	atomicMass: 78.96,
	atomicNumber: 34,
	boilingTemperature: 684.9,
	commonOxidationStates: [-2, 4, 6],
	crystalStructure: CrystalStructures.HEX,
	electronConfiguration: "[Ar] 4s2 3d10 4p4",
	fusionTemperature: 217,
	group: 16,
	metalMetalloidNonmetal: "reactive nonmetal",
	name: "selenium",
	period: 4,
	special: false,
	state: States.SOLID,
	symbol: "Se"
};

export default selenium;
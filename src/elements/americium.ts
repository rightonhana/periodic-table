import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const americium: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID_BASE,
	atomicMass: 243,
	atomicNumber: 95,
	boilingTemperature: 2607,
	commonOxidationStates: [3, 4, 5, 6],
	crystalStructure: CrystalStructures.HEX,
	electronConfiguration: "[Rn] 7s2 5f7",
	fusionTemperature: 994,
	group: "3 VI",
	metalMetalloidNonmetal: "actinide",
	name: "americium",
	period: 7,
	special: false,
	state: States.SOLID,
	symbol: "Am"
};

export default americium;
import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const samarium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 145,
	atomicNumber: 62,
	boilingTemperature: 1794,
	commonOxidationStates: [2, 3],
	crystalStructure: CrystalStructures.HEX,
	electronConfiguration: "[Xe] 6s2 4f6",
	fusionTemperature: 1074,
	group: "3 V",
	metalMetalloidNonmetal: "lan­thanide",
	name: "samarium",
	period: 6,
	special: false,
	state: States.SOLID,
	symbol: "Sm"
};

export default samarium;
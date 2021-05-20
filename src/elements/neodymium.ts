import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const neodymium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 144.24,
	atomicNumber: 60,
	boilingTemperature: 3074,
	commonOxidationStates: [3, 4],
	crystalStructure: CrystalStructures.HEX,
	electronConfiguration: "[Xe] 6s2 4f4",
	fusionTemperature: 1010,
	group: "3 III",
	metalMetalloidNonmetal: "lan­thanide",
	name: "neodymium",
	period: 6,
	special: false,
	state: States.SOLID,
	symbol: "Nd"
};

export default neodymium;
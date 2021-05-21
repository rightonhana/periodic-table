import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const terbium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 158.92534,
	atomicNumber: 65,
	boilingTemperature: 3230,
	commonOxidationStates: [3, 4],
	crystalStructure: CrystalStructures.HEX,
	electronConfiguration: "[Xe] 6s2 4f9",
	fusionTemperature: 1356,
	group: "3 VIII",
	metalMetalloidNonmetal: "lan­thanide",
	name: "terbium",
	period: 6,
	special: false,
	state: States.SOLID,
	symbol: "Tb"
};

export default terbium;
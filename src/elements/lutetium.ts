import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const lutetium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 174.967,
	atomicNumber: 71,
	boilingTemperature: 3402,
	commonOxidationStates: [3],
	crystalStructure: CrystalStructures.HEX,
	electronConfiguration: "[Xe] 6s2 4f14 5d1",
	electronsPerShell: [2, 8, 18, 32, 9, 2],
	fusionTemperature: 1663,
	group: "3 XIV",
	metalMetalloidNonmetal: "lan­thanide",
	name: "lutetium",
	period: 6,
	special: false,
	state: States.SOLID,
	symbol: "Lu"
};

export default lutetium;
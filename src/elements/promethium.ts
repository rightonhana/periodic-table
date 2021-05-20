import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const promethium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 145,
	atomicNumber: 61,
	boilingTemperature: 3000,
	commonOxidationStates: [3],
	crystalStructure: CrystalStructures.HEX,
	electronConfiguration: "[Xe] 6s2 4f5",
	fusionTemperature: 1042,
	group: "3 IV",
	metalMetalloidNonmetal: "lan­thanide",
	name: "promethium",
	period: 6,
	special: false,
	state: States.SOLID,
	symbol: "Pm"
};

export default promethium;
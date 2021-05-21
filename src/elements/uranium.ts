import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const uranium: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID_BASE,
	atomicMass: 238.0289,
	atomicNumber: 92,
	boilingTemperature: 3818,
	commonOxidationStates: [3, 4, 5, 6],
	crystalStructure: CrystalStructures.SC,
	electronConfiguration: "[Rn] 7s2 6d1 5f3",
	fusionTemperature: 1132.3,
	group: "3 III",
	metalMetalloidNonmetal: "actinide",
	name: "uranium",
	period: 7,
	special: false,
	state: States.SOLID,
	symbol: "U"
};

export default uranium;
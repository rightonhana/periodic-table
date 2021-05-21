import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const mendelevium: ElementData = {
	acidBaseProperties: AcidBaseProperties.UNKNOWN,
	atomicMass: 258,
	atomicNumber: 101,
	commonOxidationStates: [2, 3],
	crystalStructure: CrystalStructures.UK,
	electronConfiguration: "[Rn] 7s2 5f13",
	fusionTemperature: 827,
	group: "3 XII",
	metalMetalloidNonmetal: "actinide",
	name: "mendelevium",
	period: 7,
	special: false,
	state: States.SOLID,
	symbol: "Md"
};

export default mendelevium;
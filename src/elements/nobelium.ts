import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const nobelium: ElementData = {
	acidBaseProperties: AcidBaseProperties.UNKNOWN,
	atomicMass: 259,
	atomicNumber: 102,
	commonOxidationStates: [2, 3],
	crystalStructure: CrystalStructures.UK,
	electronConfiguration: "[Rn] 7s2 5f14",
	electronsPerShell: [2, 8, 18, 32, 32, 8, 2],
	fusionTemperature: 827,
	group: "3 XIII",
	metalMetalloidNonmetal: "actinide",
	name: "nobelium",
	period: 7,
	special: false,
	state: States.SOLID,
	symbol: "No"
};

export default nobelium;
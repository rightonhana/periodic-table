import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const fermium: ElementData = {
	acidBaseProperties: AcidBaseProperties.UNKNOWN,
	atomicMass: 257,
	atomicNumber: 100,
	commonOxidationStates: [2, 3],
	crystalStructure: CrystalStructures.UK,
	electronConfiguration: "[Rn] 7s2 5f12",
	fusionTemperature: 1527,
	group: "3 XI",
	metalMetalloidNonmetal: "actinide",
	name: "fermium",
	period: 7,
	special: false,
	state: States.SOLID,
	symbol: "Fm"
};

export default fermium;
import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const lawrencium: ElementData = {
	acidBaseProperties: AcidBaseProperties.UNKNOWN,
	atomicMass: 260,
	atomicNumber: 103,
	commonOxidationStates: [3],
	crystalStructure: CrystalStructures.FCC,
	electronConfiguration: "[Rn] 7s2 5f14 6d1",
	electronsPerShell: [2, 8, 18, 32, 32, 8, 3],
	fusionTemperature: 1627,
	group: "3 XIV",
	metalMetalloidNonmetal: "actinide",
	name: "lawrencium",
	period: 7,
	special: false,
	state: States.SOLID,
	symbol: "Lr"
};

export default lawrencium;
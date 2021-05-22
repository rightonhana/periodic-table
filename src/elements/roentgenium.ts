import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";

export const roentgenium: ElementData = {
	atomicMass: 272,
	atomicNumber: 111,
	commonOxidationStates: [-1, 1, 3, 5],
	crystalStructure: CrystalStructures.BCC,
	electronConfiguration: "[Rn] 7s2 5f14 6d9",
	electronsPerShell: [2, 8, 18, 32, 32, 17, 2],
	group: 11,
	metalMetalloidNonmetal: "unknown",
	name: "roentgenium",
	period: 7,
	special: true,
	state: States.SOLID,
	symbol: "Rg"
};

export default roentgenium;
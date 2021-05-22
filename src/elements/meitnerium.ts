import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";

export const meitnerium: ElementData = {
	atomicMass: 278,
	atomicNumber: 109,
	commonOxidationStates: [1, 3, 4, 6, 8, 9],
	crystalStructure: CrystalStructures.FCC,
	electronConfiguration: "[Rn] 7s2 5f14 6d7",
	electronsPerShell: [2, 8, 18, 32, 32, 15, 2],
	group: 9,
	metalMetalloidNonmetal: "unknown",
	name: "meitnerium",
	period: 7,
	special: true,
	state: States.SOLID,
	symbol: "mt"
};

export default meitnerium;
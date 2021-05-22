import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";

export const hassium: ElementData = {
	atomicMass: 265,
	atomicNumber: 108,
	commonOxidationStates: [4],
	crystalStructure: CrystalStructures.HCP,
	electronConfiguration: "[Rn] 7s2 5f14 6d6",
	electronsPerShell: [2, 8, 18, 32, 32, 14, 2],
	group: 8,
	metalMetalloidNonmetal: "transition metal",
	name: "hassium",
	period: 7,
	special: true,
	state: States.SOLID,
	symbol: "Hs"
};

export default hassium;
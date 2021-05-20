import ElementData from "../types/ElementData";
import States from "../enums/States";

export const oganesson: ElementData = {
	atomicMass: 294,
	atomicNumber: 118,
	commonOxidationStates: [-1, 0, 1, 2, 4, 6],
	electronConfiguration: "[Rn] 7s2 5f14 6d10 7p6",
	group: 18,
	metalMetalloidNonmetal: "unknown",
	name: "oganesson",
	period: 7,
	special: true,
	state: States.SOLID,
	symbol: "Og"
};

export default oganesson;
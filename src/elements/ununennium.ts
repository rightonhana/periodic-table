import ElementData from "../types/ElementData";
import States from "../enums/States";

export const ununennium: ElementData = {
	atomicMass: 316,
	atomicNumber: 119,
	commonOxidationStates: [1, 3],
	electronConfiguration: "8s1",
	electronsPerShell: [2, 8, 18, 32, 32, 18, 8, 1],
	group: 1,
	metalMetalloidNonmetal: "unknown",
	name: "ununennium",
	period: 8,
	special: true,
	state: States.UNKNOWN,
	symbol: "Uue"
};

export default ununennium;
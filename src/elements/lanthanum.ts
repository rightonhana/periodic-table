import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const lanthanum: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 138.9055,
	atomicNumber: 57,
	boilingTemperature: 3464,
	commonOxidationStates: [3],
	crystalStructure: CrystalStructures.DHCP,
	electronConfiguration: "[Xe] 6s2 5d1",
	electronsPerShell: [2, 8, 18, 18, 9, 2],
	fusionTemperature: 918,
	group: 3,
	metalMetalloidNonmetal: "lan­thanide",
	name: "lanthanum",
	period: 6,
	special: false,
	state: States.SOLID,
	symbol: "La"
};

export default lanthanum;
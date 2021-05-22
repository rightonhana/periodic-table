import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const gadolinium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 157.25,
	atomicNumber: 64,
	boilingTemperature: 3273,
	commonOxidationStates: [3],
	crystalStructure: CrystalStructures.HEX,
	electronConfiguration: "[Xe] 6s2 4f8",
	electronsPerShell: [2, 8, 18, 25, 9, 2],
	fusionTemperature: 1313,
	group: "3 VII",
	metalMetalloidNonmetal: "lan­thanide",
	name: "gadolinium",
	period: 6,
	special: false,
	state: States.SOLID,
	symbol: "Gd"
};

export default gadolinium;
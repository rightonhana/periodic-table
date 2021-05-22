import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const cobalt: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID_BASE,
	atomicMass: 58.93320,
	atomicNumber: 27,
	boilingTemperature: 2870,
	commonOxidationStates: [2, 3],
	crystalStructure: CrystalStructures.HCP,
	electronConfiguration: "[Ar] 4s2 3d7",
	electronsPerShell: [2, 8, 15, 2],
	fusionTemperature: 1495,
	group: 9,
	metalMetalloidNonmetal: "transition metal",
	name: "cobalt",
	period: 4,
	special: false,
	state: States.SOLID,
	symbol: "Co"
};

export default cobalt;
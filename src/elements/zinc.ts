import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const zinc: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID_BASE,
	atomicMass: 65.39,
	atomicNumber: 30,
	boilingTemperature: 907,
	commonOxidationStates: [2],
	crystalStructure: CrystalStructures.HCP,
	electronConfiguration: "[Ar] 4s2 3d10",
	fusionTemperature: 419.58,
	group: 12,
	metalMetalloidNonmetal: "post-​transition metal",
	name: "zinc",
	period: 4,
	special: false,
	state: States.SOLID,
	symbol: "Zn"
};

export default zinc;
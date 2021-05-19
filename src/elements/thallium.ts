import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const thallium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 204.3833,
	atomicNumber: 81,
	boilingTemperature: 1457,
	commonOxidationStates: [1, 3],
	crystalStructure: CrystalStructures.HCP,
	electronConfiguration: "[Xe] 6s2 4f14 5d10 6p1",
	fusionTemperature: 303.5,
	group: 13,
	metalMetalloidNonmetal: "post-​transition metal",
	name: "thallium",
	period: 6,
	special: false,
	state: States.SOLID,
	symbol: "Ti"
};

export default thallium;
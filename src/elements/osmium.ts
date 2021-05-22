import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const osmium: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID,
	atomicMass: 190.2,
	atomicNumber: 76,
	boilingTemperature: 5027,
	commonOxidationStates: [2, 3, 4, 6, 8],
	crystalStructure: CrystalStructures.HCP,
	electronConfiguration: "[Xe] 6s2 4f14 5d6",
	electronsPerShell: [2, 8, 18, 32, 14, 2],
	fusionTemperature: 3045,
	group: 8,
	metalMetalloidNonmetal: "transition metal",
	name: "osmium",
	period: 6,
	special: false,
	state: States.SOLID,
	symbol: "Os"
};

export default osmium;
import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const hafnium: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID_BASE,
	atomicMass: 178.49,
	atomicNumber: 72,
	boilingTemperature: 4602,
	commonOxidationStates: [4],
	crystalStructure: CrystalStructures.HCP,
	electronConfiguration: "[Xe] 6s2 4f14 5d2",
	electronsPerShell: [2, 8, 18, 32, 10, 2],
	fusionTemperature: 2227,
	group: 4,
	metalMetalloidNonmetal: "transition metal",
	name: "hafnium",
	period: 6,
	special: false,
	state: States.SOLID,
	symbol: "Hf"
};

export default hafnium;
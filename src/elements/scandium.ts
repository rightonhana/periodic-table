import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const scandium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 44.9559,
	atomicNumber: 21,
	boilingTemperature: 2836,
	crystalStructure: CrystalStructures.HCP,
	electronConfiguration: "[Ar] 4s2 3d1",
	fusionTemperature: 1541,
	group: 3,
	metalMetalloidNonmetal: "transition metal",
	name: "scandium",
	period: 4,
	special: false,
	state: States.SOLID,
	symbol: "Sc"
};

export default scandium;
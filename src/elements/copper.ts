import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const copper: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 63.546,
	atomicNumber: 29,
	boilingTemperature: 2567,
	crystalStructure: CrystalStructures.FCC,
	electronConfiguration: "[Ar] 4s2 3d9",
	electronsPerShell: [2, 8, 18, 1],
	fusionTemperature: 1083.4,
	group: 11,
	metalMetalloidNonmetal: "transition metal",
	name: "copper",
	period: 4,
	special: false,
	state: States.SOLID,
	symbol: "Cu"
};

export default copper;
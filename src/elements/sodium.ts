import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const sodium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 22.989768,
	atomicNumber: 11,
	boilingTemperature:882.9,
	commonOxidationStates: [1],
	crystalStructure: CrystalStructures.BCC,
	electronConfiguration: "[Ne] 3s1",
	fusionTemperature: 97.81,
	group: 1,
	metalMetalloidNonmetal: "alkali metal",
	name: "sodium",
	period: 3,
	special: false,
	state: States.SOLID,
	symbol: "Na"
};

export default sodium;
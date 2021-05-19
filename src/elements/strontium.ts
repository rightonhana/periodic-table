import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const strontium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 87.62,
	atomicNumber: 38,
	boilingTemperature: 1384,
	commonOxidationStates: [2],
	crystalStructure: CrystalStructures.FCC,
	electronConfiguration: "[Kr] 5s2",
	fusionTemperature: 769,
	group: 2,
	metalMetalloidNonmetal: "alkaline earth metal",
	name: "strontium",
	period: 5,
	special: false,
	state: States.SOLID,
	symbol: "Sr"
};

export default strontium;
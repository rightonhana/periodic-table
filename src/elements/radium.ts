import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const radium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 226.025,
	atomicNumber: 88,
	boilingTemperature: 1140,
	commonOxidationStates: [2],
	crystalStructure: CrystalStructures.BCC,
	electronConfiguration: "[Rn] 7s2",
	fusionTemperature: 700,
	group: 2,
	metalMetalloidNonmetal: "alkaline earth metal",
	name: "radium",
	period: 7,
	special: false,
	state: States.SOLID,
	symbol: "Ra"
};

export default radium;
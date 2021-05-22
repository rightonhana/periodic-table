import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const rubidium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 85.4578,
	atomicNumber: 37,
	boilingTemperature: 686,
	commonOxidationStates: [1],
	crystalStructure: CrystalStructures.BCC,
	electronConfiguration: "[Kr] 5s1",
	electronsPerShell: [2, 8, 18, 8, 1],
	fusionTemperature: 38.89,
	group: 1,
	metalMetalloidNonmetal: "alkali metal",
	name: "rubidium",
	period: 5,
	special: false,
	state: States.SOLID,
	symbol: "Rb"
};

export default rubidium;
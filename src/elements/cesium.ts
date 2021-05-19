import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const cesium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 132.90543,
	atomicNumber: 55,
	boilingTemperature: 669.3,
	commonOxidationStates: [1],
	crystalStructure: CrystalStructures.BCC,
	electronConfiguration: "[Xe] 6s1",
	fusionTemperature: 28.40,
	group: 1,
	metalMetalloidNonmetal: "alkali metal",
	name: "cesium",
	period: 6,
	special: false,
	state: States.LIQUID,
	symbol: "Cs"
};

export default cesium;
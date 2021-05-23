import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";
import ElementCategories from "../enums/ElementCategories";

export const lithium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 6.941,
	atomicNumber: 3,
	boilingTemperature: 1342,
	commonOxidationStates: [1],
	crystalStructure: CrystalStructures.BCC,
	electronConfiguration: "1s2 2s1",
	electronsPerShell: [2, 1],
	fusionTemperature: 180.54,
	group: 1,
	elementCategory: ElementCategories.ALKALI_METAL,
	name: "lithium",
	period: 2,
	special: false,
	state: States.SOLID,
	symbol: "Li"
};

export default lithium;
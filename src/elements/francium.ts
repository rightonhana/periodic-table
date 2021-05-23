import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";
import ElementCategories from "../enums/ElementCategories";

export const francium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 223,
	atomicNumber: 87,
	boilingTemperature: 677,
	commonOxidationStates: [1],
	crystalStructure: CrystalStructures.BCC,
	electronConfiguration: "[Rn] 7s1",
	electronsPerShell: [2, 8, 18, 32, 18, 8, 1],
	fusionTemperature: 27,
	group: 1,
	elementCategory: ElementCategories.ALKALI_METAL,
	name: "francium",
	period: 7,
	special: false,
	state: States.LIQUID,
	symbol: "Fr"
};

export default francium;
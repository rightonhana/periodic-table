import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";
import ElementCategories from "../enums/ElementCategories";

export const tin: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID_BASE,
	atomicMass: 118.710,
	atomicNumber: 50,
	boilingTemperature: 2270,
	commonOxidationStates: [2, 4],
	crystalStructure: CrystalStructures.TETR,
	electronConfiguration: "[Kr] 5s2 4d10 5p2",
	electronsPerShell: [2, 8, 18, 18, 4],
	fusionTemperature: 231.97,
	group: 14,
	elementCategory: ElementCategories.POST_TRANSITION_METAL,
	name: "tin",
	period: 5,
	special: false,
	state: States.SOLID,
	symbol: "Sn"
};

export default tin;
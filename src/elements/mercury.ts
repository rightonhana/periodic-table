import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";
import ElementCategories from "../enums/ElementCategories";

export const mercury: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 200.59,
	atomicNumber: 80,
	boilingTemperature: 356.58,
	commonOxidationStates: [1, 2],
	crystalStructure: CrystalStructures.RHO,
	electronConfiguration: "[Xe] 6s2 4f14 5d10",
	electronsPerShell: [2, 8, 18, 32, 18, 2],
	fusionTemperature: -38.87,
	group: 12,
	elementCategory: ElementCategories.POST_TRANSITION_METAL,
	name: "mercury",
	period: 6,
	special: false,
	state: States.LIQUID,
	symbol: "Hg"
};

export default mercury;
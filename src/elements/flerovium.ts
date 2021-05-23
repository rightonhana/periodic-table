import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import ElementCategories from "../enums/ElementCategories";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const flerovium: ElementData = {
	acidBaseProperties: AcidBaseProperties.UNKNOWN,
	atomicMass: 289,
	atomicNumber: 114,
	commonOxidationStates: [0, 1, 2, 4, 6],
	crystalStructure: CrystalStructures.FCC,
	electronConfiguration: "[Rn] 7s2 5f14 6d10 7p2",
	electronsPerShell: [2, 8, 18, 32, 32, 18, 4],
	group: 14,
	elementCategory: ElementCategories.POST_TRANSITION_METAL,
	name: "flerovium",
	period: 7,
	special: true,
	state: States.LIQUID,
	symbol: "Fl"
};

export default flerovium;
import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import ElementCategories from "../enums/ElementCategories";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const seaborgium: ElementData = {
	acidBaseProperties: AcidBaseProperties.UNKNOWN,
	atomicMass: 263,
	atomicNumber: 106,
	commonOxidationStates: [5, 6],
	crystalStructure: CrystalStructures.BCC,
	electronConfiguration: "[Rn] 7s2 5f14 6d4",
	electronsPerShell: [2, 8, 18, 32, 32, 12, 2],
	group: 6,
	elementCategory: ElementCategories.TRANSITION_METAL,
	name: "seaborgium",
	period: 7,
	special: true,
	state: States.SOLID,
	symbol: "Sg"
};

export default seaborgium;
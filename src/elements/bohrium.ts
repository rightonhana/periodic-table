import ElementData from "../types/ElementData";
import CrystalStructures from "../enums/CrystalStructures";
import States from "../enums/States";
import ElementCategories from "../enums/ElementCategories";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const bohrium: ElementData = {
	acidBaseProperties: AcidBaseProperties.UNKNOWN,
	atomicMass: 264,
	atomicNumber: 107,
	commonOxidationStates: [5, 7],
	crystalStructure: CrystalStructures.HCP,
	electronConfiguration: "[Rn] 7s2 5f14 6d5",
	electronsPerShell: [2, 8, 18, 32, 32, 13, 2],
	group: 7,
	elementCategory: ElementCategories.TRANSITION_METAL,
	name: "bohrium",
	period: 7,
	special: true,
	state: States.SOLID,
	symbol: "Bh"
};

export default bohrium;
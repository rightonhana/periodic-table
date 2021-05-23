import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";
import ElementCategories from "../enums/ElementCategories";

export const vanadium: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID_BASE,
	atomicMass: 50.9415,
	atomicNumber: 23,
	boilingTemperature: 3380,
	commonOxidationStates: [2, 3, 4, 5],
	crystalStructure: CrystalStructures.BCC,
	electronConfiguration: "[Ar] 4s2 3d3",
	electronsPerShell: [2, 8, 11, 2],
	fusionTemperature: 1890,
	group: 5,
	elementCategory: ElementCategories.TRANSITION_METAL,
	name: "vanadium",
	period: 4,
	special: false,
	state: States.SOLID,
	symbol: "V"
};

export default vanadium;
import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";
import ElementCategories from "../enums/ElementCategories";

export const tungsten: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID,
	atomicMass: 183.85,
	atomicNumber: 74,
	boilingTemperature: 5660,
	commonOxidationStates: [2, 3, 4, 5, 6],
	crystalStructure: CrystalStructures.BCC,
	electronConfiguration: "[Xe] 6s2 4f14 5d4",
	electronsPerShell: [2, 8, 18, 32, 12, 2],
	fusionTemperature: 3410,
	group: 6,
	elementCategory: ElementCategories.TRANSITION_METAL,
	name: "tungsten",
	period: 6,
	special: false,
	state: States.SOLID,
	symbol: "W"
};

export default tungsten;
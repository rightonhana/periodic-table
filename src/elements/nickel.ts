import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";
import ElementCategories from "../enums/ElementCategories";

export const nickel: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 58.69,
	atomicNumber: 28,
	boilingTemperature: 2732,
	commonOxidationStates: [2, 3],
	crystalStructure: CrystalStructures.FCC,
	electronConfiguration: "[Ar] 4s2 3d8",
	electronsPerShell: [2, 8, 16, 2],
	fusionTemperature: 1453,
	group: 10,
	elementCategory: ElementCategories.TRANSITION_METAL,
	name: "nickel",
	period: 4,
	special: false,
	state: States.SOLID,
	symbol: "Ni",
};

export default nickel;
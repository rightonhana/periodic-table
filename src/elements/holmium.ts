import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import ElementCategories from "../enums/ElementCategories";

export const holmium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 164.93032,
	atomicNumber: 67,
	boilingTemperature: 2700,
	commonOxidationStates: [3],
	crystalStructure: CrystalStructures.HEX,
	electronConfiguration: "[Xe] 6s2 4f11",
	electronsPerShell: [2, 8, 18, 29, 8, 2],
	fusionTemperature: 1474,
	group: "3 X",
	elementCategory: ElementCategories.LANTHANIDE,
	name: "holmium",
	period: 6,
	special: false,
	state: States.SOLID,
	symbol: "Ho"
};

export default holmium;
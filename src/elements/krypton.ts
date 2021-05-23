import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";
import ElementCategories from "../enums/ElementCategories";

export const krypton: ElementData = {
	acidBaseProperties: AcidBaseProperties.NEUTRAL,
	atomicMass: 83.80,
	atomicNumber: 36,
	boilingTemperature: 152.30,
	crystalStructure: CrystalStructures.FCC,
	electronConfiguration: "[Ar] 4s2 3d10 4p6",
	electronsPerShell: [2, 8, 18, 8],
	fusionTemperature: -156.6,
	group: 18,
	elementCategory: ElementCategories.NOBLE_GAS,
	name: "krypton",
	period: 4,
	special: false,
	state: States.GAS,
	symbol: "Kr"
};

export default krypton;
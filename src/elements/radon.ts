import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";
import ElementCategories from "../enums/ElementCategories";

export const radon: ElementData = {
	acidBaseProperties: AcidBaseProperties.NEUTRAL,
	atomicMass: 222,
	atomicNumber: 86,
	boilingTemperature: -61.8,
	crystalStructure: CrystalStructures.FCC,
	electronConfiguration: "[Xe] 6s2 4f14 5d10 6p6",
	electronsPerShell: [2, 8, 18, 32, 18, 8],
	fusionTemperature: -71,
	group: 18,
	elementCategory: ElementCategories.NOBLE_GAS,
	name: "radon",
	period: 6,
	special: false,
	state: States.GAS,
	symbol: "Rn"
};

export default radon;
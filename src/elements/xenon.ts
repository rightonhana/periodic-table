import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";
import ElementCategories from "../enums/ElementCategories";

export const xenon: ElementData = {
	acidBaseProperties: AcidBaseProperties.NEUTRAL,
	atomicMass: 131.29,
	atomicNumber: 54,
	boilingTemperature: -152.30,
	crystalStructure: CrystalStructures.FCC,
	electronConfiguration: "[Kr] 5s2 4d10 5p6",
	electronsPerShell: [2, 8, 18, 18, 8],
	fusionTemperature: -156.6,
	group: 18,
	elementCategory: ElementCategories.NOBLE_GAS,
	name: "xenon",
	period: 5,
	special: false,
	state: States.GAS,
	symbol: "Xe"
};

export default xenon;
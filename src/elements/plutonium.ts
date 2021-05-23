import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import ElementCategories from "../enums/ElementCategories";

export const plutonium: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID_BASE,
	atomicMass: 244,
	atomicNumber: 94,
	boilingTemperature: 3232,
	commonOxidationStates: [3, 4, 5, 6],
	crystalStructure: CrystalStructures.HEX,
	electronConfiguration: "[Rn] 7s2 5f6",
	electronsPerShell: [2, 8, 18, 32, 24, 8, 2],
	fusionTemperature: 641,
	group: "3 V",
	elementCategory: ElementCategories.ACTINIDE,
	name: "plutonium",
	period: 7,
	special: false,
	state: States.SOLID,
	symbol: "Pu"
};

export default plutonium;
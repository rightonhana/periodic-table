import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import ElementCategories from "../enums/ElementCategories";

export const ytterbium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 173.04,
	atomicNumber: 70,
	boilingTemperature: 1196,
	commonOxidationStates: [2, 3],
	crystalStructure: CrystalStructures.FCC,
	electronConfiguration: "[Xe] 6s2 4f14",
	electronsPerShell: [2, 8, 18, 32, 8, 2],
	fusionTemperature: 819,
	group: "3 XIII",
	elementCategory: ElementCategories.LANTHANIDE,
	name: "ytterbium",
	period: 6,
	special: false,
	state: States.SOLID,
	symbol: "Yb"
};

export default ytterbium;
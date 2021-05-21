import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const thorium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 232.0381,
	atomicNumber: 90,
	boilingTemperature: 3800,
	commonOxidationStates: [4],
	crystalStructure: CrystalStructures.FCC,
	electronConfiguration: "[Rn] 7s2 6d2",
	fusionTemperature: 1750,
	group: "3 I",
	metalMetalloidNonmetal: "actinide",
	name: "thorium",
	period: 7,
	special: false,
	state: States.SOLID,
	symbol: "Th"
};

export default thorium;
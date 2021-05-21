import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const holmium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 164.93032,
	atomicNumber: 67,
	boilingTemperature: 2700,
	commonOxidationStates: [3],
	crystalStructure: CrystalStructures.HEX,
	electronConfiguration: "[Xe] 6s2 4f11",
	fusionTemperature: 1474,
	group: "3 X",
	metalMetalloidNonmetal: "lan­thanide",
	name: "holmium",
	period: 6,
	special: false,
	state: States.SOLID,
	symbol: "Ho"
};

export default holmium;
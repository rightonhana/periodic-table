import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const nickel: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 58.69,
	atomicNumber: 28,
	boilingTemperature: 2732,
	commonOxidationStates: [2, 3],
	crystalStructure: CrystalStructures.FCC,
	electronConfiguration: "[Ar] 4s2 3d8",
	fusionTemperature: 1453,
	group: 10,
	metalMetalloidNonmetal: "transition metal",
	name: "nickel",
	period: 4,
	special: false,
	state: States.SOLID,
	symbol: "Ni",
};

export default nickel;
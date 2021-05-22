import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const iridium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 192.22,
	atomicNumber: 77,
	boilingTemperature: 4130,
	commonOxidationStates: [2, 3, 4, 6],
	crystalStructure: CrystalStructures.FCC,
	electronConfiguration: "[Xe] 6s2 4f14 5d7",
	electronsPerShell: [2, 8, 18, 32, 15, 2],
	fusionTemperature: 2410,
	group: 9,
	metalMetalloidNonmetal: "transition metal",
	name: "iridium",
	period: 6,
	special: false,
	state: States.SOLID,
	symbol: "Ir"
};

export default iridium;
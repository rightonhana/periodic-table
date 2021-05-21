import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const thulium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 168.9342,
	atomicNumber: 69,
	boilingTemperature: 1950,
	commonOxidationStates: [2, 3],
	crystalStructure: CrystalStructures.HEX,
	electronConfiguration: "[Xe] 6s2 4f13",
	fusionTemperature: 1545,
	group: "3 XII",
	metalMetalloidNonmetal: "lan­thanide",
	name: "thulium",
	period: 6,
	special: false,
	state: States.SOLID,
	symbol: "Tm"
};

export default thulium;
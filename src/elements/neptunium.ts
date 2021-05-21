import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const neptunium: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID_BASE,
	atomicMass: 237.048,
	atomicNumber: 93,
	boilingTemperature: 3902,
	commonOxidationStates: [3, 4, 5, 6],
	crystalStructure: CrystalStructures.TETR,
	electronConfiguration: "[Rn] 7s2 6d1 5f4",
	fusionTemperature: 640,
	group: "3 IV",
	metalMetalloidNonmetal: "actinide",
	name: "neptunium",
	period: 7,
	special: false,
	state: States.SOLID,
	symbol: "Np"
};

export default neptunium;
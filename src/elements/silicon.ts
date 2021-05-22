import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const silicon: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID_BASE,
	atomicMass: 28.0855,
	atomicNumber: 14,
	boilingTemperature: 2355,
	commonOxidationStates: [4],
	crystalStructure: CrystalStructures.DC,
	electronConfiguration: "[Ne] 3s2 3p2",
	electronsPerShell: [2, 8, 4],
	fusionTemperature: 1410,
	group: 14,
	metalMetalloidNonmetal: "metalloid",
	name: "silicon",
	period: 3,
	special: false,
	state: States.SOLID,
	symbol: "Si"
};

export default silicon;
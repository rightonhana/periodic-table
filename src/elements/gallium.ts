import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const gallium: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID_BASE,
	atomicMass: 69.723,
	atomicNumber: 31,
	boilingTemperature: 2403,
	commonOxidationStates: [3],
	crystalStructure: CrystalStructures.ORTH,
	electronConfiguration: "[Ar] 4s2 3d10 4p1",
	fusionTemperature: 29.78,
	group: 13,
	metalMetalloidNonmetal: "post-​transition metal",
	name: "gallium",
	period: 4,
	special: false,
	state: States.LIQUID,
	symbol: "Ga"
};

export default gallium;
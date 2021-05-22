import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const lead: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID_BASE,
	atomicMass: 207.2,
	atomicNumber: 82,
	boilingTemperature: 1740,
	commonOxidationStates: [2, 4],
	crystalStructure: CrystalStructures.FCC,
	electronConfiguration: "[Xe] 6s2 4f14 5d10 6p2",
	electronsPerShell: [2, 8, 18, 32, 18, 4],
	fusionTemperature: 327.502,
	group: 14,
	metalMetalloidNonmetal: "post-​transition metal",
	name: "lead",
	period: 6,
	special: false,
	state: States.SOLID,
	symbol: "Pb"
};

export default lead;
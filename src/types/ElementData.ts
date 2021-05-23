import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";
import States from "../enums/States";
import ElementCategories from "../enums/ElementCategories";

export type ElementData = {
	acidBaseProperties: AcidBaseProperties;
	atomicMass: number;
	atomicNumber: number;
	boilingTemperature?: number;
	commonOxidationStates?: number[];
	crystalStructure?: CrystalStructures;
	electronConfiguration: string;
	electronsPerShell: number[];
	fusionATM?: number;
	fusionTemperature?: number;
	group: number | string;
	elementCategory: ElementCategories;
	name: string;
	period: number;
	special: boolean;
	state: States;
	symbol: string;
	//TODO: block: p, s, f, d
	//TODO: density
}

export default ElementData;
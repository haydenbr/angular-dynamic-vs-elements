import { CharacterDataService } from './character-data.service';
import { ListDataService } from './list-data.service';
import { LocationDataService } from './location-data.service';
import { VehicleDataService } from './vehicle-data.service';
import { WeaponDataService } from './weapon-data.service';

export { CharacterDataService } from './character-data.service';
export { ListDataService } from './list-data.service';
export { LocationDataService } from './location-data.service';
export { VehicleDataService } from './vehicle-data.service';
export { WeaponDataService } from './weapon-data.service';

export const SERVICES = [
	CharacterDataService,
	ListDataService,
	LocationDataService,
	VehicleDataService,
	WeaponDataService
];

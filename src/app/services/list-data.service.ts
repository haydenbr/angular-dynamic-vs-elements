import { shuffle } from 'lodash';

import { CharacterDataService } from './character-data.service';
import { LocationDataService } from './location-data.service';
import { VehicleDataService } from './vehicle-data.service';
import { WeaponDataService } from './weapon-data.service';

import { Injectable } from '@angular/core';

@Injectable()
export class ListDataService {

	constructor(
		private characterDataSvc: CharacterDataService,
		private locationDataSvc: LocationDataService,
		private vehicleDataSvc: VehicleDataService,
		private weaponDataSvc: WeaponDataService,
	) { }

	getData() {
		return shuffle([].concat(
			this.characterDataSvc.getData(),
			this.locationDataSvc.getData(),
			this.vehicleDataSvc.getData(),
			this.weaponDataSvc.getData()
		));
	}
}

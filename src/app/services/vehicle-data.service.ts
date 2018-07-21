import { Injectable } from '@angular/core';

const data = [];

@Injectable()
export class VehicleDataService {
	getData() {
		return data;
	}
}

import { Injectable } from '@angular/core';

const data = [];

@Injectable()
export class LocationDataService {
	getData() {
		return data;
	}
}

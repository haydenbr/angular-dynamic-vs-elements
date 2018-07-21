import { Injectable } from '@angular/core';

const data = [];

@Injectable()
export class WeaponDataService {
	getData() {
		return data;
	}
}

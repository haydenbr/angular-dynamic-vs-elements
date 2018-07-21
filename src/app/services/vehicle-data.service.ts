import { Injectable } from '@angular/core';

const data = [
	{
		type: 'vehicle',
		name: 'Millennium Falcon',
		imageUrl: 'assets/falcon.jpg',
		description: 'Despite her humble origins and shabby exterior, the Millennium Falcon has played a role in some of the greatest victories of the Rebel Alliance and the New Republic. The Falcon looks like a worn-out junker, but beneath her hull she’s full of surprises. A succession of owners, including Lando Calrissian and Han Solo, have made special modifications that boosted the freighter’s speed, shielding and firepower to impressive – and downright illegal – levels. The price of such tinkering? The Falcon can be unpredictable, with her hyperdrive particularly balky. Despite her flaws, she’s beloved by her owners – Han Solo and Chewbacca spent years searching the galaxy for the ship they once called home, rejoicing when they finally reclaimed her.'
	},
	{
		type: 'vehicle',
		name: 'Swoop',
		imageUrl: 'assets/swoop.jpg',
		description: 'Swoops are repulsorlift vehicles that are more powerful (and dangerous) than speeder bikes. Swoop racing is a popular spectator sport on many planets, with fans loving the sport’s excitement as well as its outlaw image. During his search for his mother on Tatooine, Anakin Skywalker borrowed a swoop from Owen Lars. Later, Hondo Ohnaka’s pirates used swoops to patrol their territory on Florrum.'
	},
	{
		type: 'vehicle',
		name: 'AT-hauler',
		imageUrl: 'assets/at-hauler.jpg',
		description: 'A specialized cargo vehicle, the AT-hauler deploys walkers on the battlefield. It can carry enormous loads thanks to powerful engines and heavy-duty cargo lifter arms augmented with tensile fields. A pilot handles flight operations, while a co-pilot takes responsibility for any cargo. Tobias Beckett’s gang steals an AT-hauler on Mimban to use in an audacious heist on Vandor.'
	},
	{
		type: 'vehicle',
		name: 'AT-DT Walker',
		imageUrl: 'assets/at-dt.jpg',
		description: 'A stout two-legged walker, the All Terran Defense Turret, or AT-DT, is a mobile artillery piece designed to protect infantry and Imperial installations during ground combat. The AT-DT’s head is protected by extra layers of armor plating and shielding against artillery flashback.'
	},
	{
		type: 'vehicle',
		name: 'TIE/rb Heavy Starfighter',
		imageUrl: 'assets/tie-brute.jpg',
		description: 'The TIE/rb heavy starfighter, nicknamed the “TIE Brute,” boasts heavier armor and firepower than a standard TIE, with pivoting twin laser cannons arrayed on an outrigger. An MGX-300 integrated droid intelligence assists the pilot with operations.'
	}
];

@Injectable()
export class VehicleDataService {
	getData() {
		return data;
	}
}

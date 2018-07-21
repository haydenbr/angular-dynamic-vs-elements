import { Injectable } from '@angular/core';

const data = [
	{
		type: 'character',
		name: 'Han Solo',
		bio: 'Han Solo rose from an impoverished childhood on the mean streets of Corellia to become one of the heroes of the Rebel Alliance. As captain of the Millennium Falcon, Han and his co-pilot Chewbacca came to believe in the cause of galactic freedom, joining Luke Skywalker and Princess Leia Organa in the fight against the Empire. After the Battle of Endor, Han faced difficult times in a chaotic galaxy, leading to a shattering confrontation with his estranged son Ben.',
		imageUrl: 'assets/han.jpg',
		movies: [
			{
				title: 'Star Wars: Episode IV A New Hope',
				link: 'https://www.starwars.com/films/star-wars-episode-iv-a-new-hope'
			},
			{
				title: 'Star Wars: Episode V The Empire Strikes Back',
				link: 'https://www.starwars.com/films/star-wars-episode-v-the-empire-strikes-back'
			},
			{
				title: 'Star Wars: Episode VI Return of the Jedi',
				link: 'https://www.starwars.com/films/star-wars-episode-vi-return-of-the-jedi'
			},
			{
				title: 'Star Wars: Episode VII The Force Awakens',
				link: 'https://www.starwars.com/films/star-wars-episode-vii-the-force-awakens'
			},
			{
				title: 'Solo: A Star Wars Story',
				link: 'https://www.starwars.com/films/solo'
			}
		]
	},
	{
		type: 'character',
		name: 'Chewbacca',
		bio: 'During his long life Chewbacca has been many things: Wookiee warrior, ace smuggler and rebel hero. Chewie fought with the Republic on Kashyyyk during the Clone Wars, then befriended Han Solo while in Imperial captivity on Mimban. After adventures on Vandor and Kessel, he became Han’s co-pilot aboard the Millennium Falcon, and eventually helped the Alliance restore freedom to the galaxy. Known for his short temper and accuracy with a bowcaster, Chewie also had a big heart – and unflagging loyalty to his friends. He stuck with Han through years of turmoil, and flew the Falcon alongside Rey after the Corellian’s death.',
		imageUrl: 'assets/chewbacca.jpg',
		movies: [
			{
				title: 'Star Wars: Episode IV A New Hope',
				link: 'https://www.starwars.com/films/star-wars-episode-iv-a-new-hope'
			},
			{
				title: 'Star Wars: Episode V The Empire Strikes Back',
				link: 'https://www.starwars.com/films/star-wars-episode-v-the-empire-strikes-back'
			},
			{
				title: 'Star Wars: Episode VI Return of the Jedi',
				link: 'https://www.starwars.com/films/star-wars-episode-vi-return-of-the-jedi'
			},
			{
				title: 'Star Wars: Episode III Revenge of the Sith,',
				link: 'https://www.starwars.com/films/star-wars-episode-iii-revenge-of-the-sith'
			},
			{
				title: 'Star Wars: Episode VII The Force Awakens',
				link: 'https://www.starwars.com/films/star-wars-episode-vii-the-force-awakens'
			},
			{
				title: 'Star Wars: Episode VIII The Last Jedi',
				link: 'https://www.starwars.com/films/star-wars-episode-viii-the-last-jedi'
			},
			{
				title: 'Solo: A Star Wars Story',
				link: 'https://www.starwars.com/films/solo'
			}
		]
	},
	{
		type: 'character',
		name: 'Lando Calrissian',
		bio: 'Lando Calrissian made a name for himself as captain of the Millennium Falcon and a sportsman seeking a fortune at the galaxy’s sabacc tables. After he lost his beloved ship to Han Solo, he spent years living the high life and pursuing get-rich-quick schemes, with uneven results. He went semi-respectable as the administrator of Cloud City, only to be drawn into the fight against the Empire. His quick wit and daring helped the Alliance destroy the second Death Star, completing Lando’s evolution from smooth-talking smuggler to galactic hero.',
		imageUrl: 'assets/lando.jpg',
		movies: [
			{
				title: 'Star Wars: Episode V The Empire Strikes Back',
				link: 'https://www.starwars.com/films/star-wars-episode-v-the-empire-strikes-back'
			},
			{
				title: 'Star Wars: Episode VI Return of the Jedi',
				link: 'https://www.starwars.com/films/star-wars-episode-vi-return-of-the-jedi'
			},
			{
				title: 'Solo: A Star Wars Story',
				link: 'https://www.starwars.com/films/solo'
			}
		]
	},
	{
		type: 'character',
		name: 'Qi’ra',
		bio: 'Despite her youth, Qi’ra is Dryden Vos’s most trusted lieutenant, and an increasingly important Crimson Dawn operative. She has risen far above the bleak conditions of her youth on Corellia, where she lived in the sewers with the notorious White Worms gang.',
		imageUrl: 'assets/qira.jpg',
		movies: [
			{
				title: 'Solo: A Star Wars Story',
				link: 'https://www.starwars.com/films/solo'
			}
		]
	},
	{
		type: 'character',
		name: 'Tobias Beckett',
		bio: 'A native of Glee Anselm, Tobias Beckett is a professional thief who’s planned and carried out any number of heists with his crew. Beckett is always aware of the angles and uncertainties – and ready to unholster his blasters if something goes wrong. That’s always a possibility -- Beckett has learned the hard way that trust has its limits.',
		imageUrl: 'assets/tobias.jpg',
		movies: [
			{
				title: 'Solo: A Star Wars Story',
				link: 'https://www.starwars.com/films/solo'
			}
		]
	},
	{
		type: 'character',
		name: 'L3-37',
		bio: 'A self-made droid built from astromech and protocol parts, L3-37 is an enlightened navigator who cares deeply about droid rights. Her ability to connect directly with the Millennium Falcon’s navicomputer lets the freighter plot faster routes than those traveled by more cautious ships. L3-37’s habit of speaking her mind and her relentless advocacy for mechanicals can alienate organic beings.',
		imageUrl: 'assets/l3-37.jpg',
		movies: [
			{
				title: 'Solo: A Star Wars Story',
				link: 'https://www.starwars.com/films/solo'
			}
		]
	}
];

@Injectable()
export class CharacterDataService {
	getData() {
		return data;
	}
}

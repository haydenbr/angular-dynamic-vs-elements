import { Injectable } from '@angular/core';

const data = [
	{
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
		name: 'Qi’ra',
		bio: 'Despite her youth, Qi’ra is Dryden Vos’s most trusted lieutenant, and an increasingly important Crimson Dawn operative. She has risen far above the bleak conditions of her youth on Corellia, where she lived in the sewers with the notorious White Worms gang.',
		imageUrl: 'assets/qira.jpg',
		movies: [
			{
				title: 'Solo: A Star Wars Story',
				link: 'https://www.starwars.com/films/solo'
			}
		]
	}
];

@Injectable()
export class DataService {
	getData() {
		return data;
	}
}

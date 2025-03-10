// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Gwen!',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Good Morning,',
	greetingAfternoon: 'Good Afternoon,',
	greetingEvening: 'Good Evening,',
	greetingNight: 'Go to Sleep, ',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'f3b93d2989d96725df0e74d799cc26fb', // Write here your API Key
	weatherIcons: 'White', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'F', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '34.037571',
	defaultLongitude: '-84.575104',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'YouTube',
			icon: 'youtube',
			link: 'https://youtube.com/',
		},
		{
			id: '2',
			name: 'TikTok',
			icon: 'music-2',
			link: 'https://tiktok.com/',
		},
		{
			id: '5',
			name: 'GMail',
			icon: 'mail',
			link: 'https://mail.google.com/',
		},
		{
			id: '3',
			name: 'D2L',
			icon: 'graduation-cap',
			link: 'https://kennesaw.view.usg.edu/d2l/home',
		},
		{
			id: '6',
			name: 'Outlook',
			icon: 'mail-search',
			link: 'https://outlook.office.com/mail/',
		},
		{
			id: '4',
			name: 'Owl Express',
			icon: 'bird',
			link: 'https://owlexpress.kennesaw.edu/prodban/twbkwbis.P_WWWLogin',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'monitor',
			id: '1',
			links: [
				{
					name: 'MAL',
					link: 'https://myanimelist.net/animelist/MeAGwen',
				},
				{
					name: 'ARGH',
					link: 'https://www.reddit.com/r/Piracy/wiki/megathread/',
				},
				{
					name: 'HiAnime',
					link: 'https://hianime.to/user/watch-list',
				},
				{
					name: 'Media Sheet',
					link: 'https://docs.google.com/spreadsheets/d/12Uxd3Oaw_Qf1PqNR-1zcK3D_OVbfbZf-OD9nJXemJbE/edit?gid=0#gid=0',
				},
			],
		},
		{
			icon: 'glasses',
			id: '2',
			links: [
				{
					name: 'GitHub',
					link: 'https://github.com/MeAGwen',
				},
				{
					name: 'Gankster',
					link: 'https://valorant.gankster.gg/scrims',
				},
				{
					name: 'Valoplant',
					link: 'https://valoplant.gg/',
				},
				{
					name: 'Tracker',
					link: 'https://tracker.gg/valorant/profile/riot/100rr%20kittygirl%23gwen/overview',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};

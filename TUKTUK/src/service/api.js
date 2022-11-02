const api = [
	{
		id: 0,
        video:	require('../../assets/boys.mp4'),	
		poster: require('../../assets/t.jpg'),
		user: {
			username: 'toto01',
			description: 'test de description 1',
			music: 'son original',
			avatar: require('../../assets/pfp.jpg')
		},
		count: {
			like: '1.1M',
			comment: '4080',
			share: '2800'
		}
	},
	{
		id: 1,
        video:	require('../../assets/bald.mp4'),		
		poster: require('../../assets/t.jpg'),
		user: {
			username: 'luismariz',
			description:
				'é que eu fui chutar o balde e tinha concreto dentro #foryoupage #fyp',
			music: 'som original',
			avatar: require('../../assets/pfp.jpg')
		},
		count: {
			like: '380K',
			comment: '2388',
			share: '535'
		}
	}
]

export default api
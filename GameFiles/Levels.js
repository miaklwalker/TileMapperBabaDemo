export const GameInfo = {
	Rules: ['you', 'push', 'win', 'stop', 'sink', 'defeat'],
	Sprites: {
		baba: {
			left:[[239,0,24,24],[263,0,24,24],[287,0,24,24],[311,0,24,24],[336,0,24,24]],
			right:[[2,2,21,22],[25,3,23,20],[48,1,25,23],[74,0,21,25],[95,2,26,21]],
			up:[[122,0,20,23],[145,0,23,23],[171,0,19,23],[195,0,19,22],[216,0,23,23]],
			down:[[359, 0, 25, 25],[381,0,25,25],[406,0,25,25],[431,0,25,25],[455,0,25,25]],
		},
		rock: [[360, 504, 27, 25]],
		wall: [[390, 1518, 12, 12]],
		flag: [[143, 503, 25, 25]],
		water: [[270, 1200, 25, 25]],
		skull: [[265, 360, 25, 25]],
	},
	textSprites: {
		baba: [[145,647,21,25],[145,671,21,25],[145,695,21,25]],
		rock: [[241,792,23,25],[240,816,23,25],[240,840,23,25]],
		wall: [[624,792,23,24],[624,815,23,24],[624,840,23,24]],
		flag: [[48,720,23,25],[49,744,23,25],[47,768,23,25]],
		is: [[410,719,23,25],[409,743,23,25],[409,767,23,25]],
		stop: [[240,1009,24,24],[239,1032,24,24],[240,1056,24,24]],
		push: [[0,1007,24,25],[0,1032,25,25],[0,1056,24,25]],
		win: [[360,1007,24,24],[360,1032,24,24],[360,1056,24,24]],
		you: [[432,1007,24,24],[431,1032,25,24],[432,1056,24,24]],
		water: [[647,791,24,25],[647,815,24,25],[647,839,24,25]],
		sink: [[168,1007,24,25],[167,1032,24,25],[168,1056,24,24]],
		skull: [[359,791,24,25],[360,815,24,25],[359,839,24,25]],
		defeat: [[96,936,24,25],[96,960,24,25],[96,984,24,25]],
	},
	drawn: {
		level: false,
		background: false,
		nouns: false,
		verbs: false,
		is: false,
		sprite: false,
	},
	Sprite: {
		baba: 'white',
		rock: 'goldenrod',
		wall: 'Gray',
		flag: 'yellow',
		floor: 'darkSlateGray',
		water: 'skyBlue',
		skull: 'Red',
	},
	Text: {
		baba: 'Hotpink',
		you: 'Hotpink',
		flag: 'yellow',
		win: 'yellow',
		wall: 'lightgray',
		stop: 'lightGray',
		rock: 'saddleBrown',
		push: 'saddleBrown',
		is: 'white',
		water: 'skyBlue',
		sink: 'skyBlue',
		skull: 'Red',
		defeat: 'Red',
	},

	Levels: {
		debug: {
			blocks: {
				horizantal: [
					[4, 9, 9, 'wall'],
					[10, 4, 11, 'water'],
				],
				Vertical: [[10, 10, 15, 'rock']],
				Sprites: [[12, 15, 'baba']],
				Verbs: [
					[6, 15, 'stop'],
					[5, 16, 'you'],
					[16, 15, 'push'],
					[16, 17, 'sink'],
				],
				Nouns: [
					[4, 15, 'wall'],
					[5, 14, 'baba'],
					[14, 15, 'rock'],
					[14, 17, 'water'],
				],
				is: [[5, 15], [15, 15], [15, 17]],
			},
			tiles: 20,
		},
		0: {
			blocks: {
				horizantal: [
					[4, 8, 15, 'wall'],
					[4, 12, 15, 'wall'],
				],
				Vertical: [[9, 9, 12, 'rock']],

				Sprites: [
					[5, 10, 'baba'],
					[13, 10, 'flag'],
				],
				Verbs: [
					[14, 6, 'win'],
					[6, 6, 'you'],
					[6, 14, 'stop'],
					[14, 14, 'push'],
				],
				Nouns: [
					[12, 6, 'flag'],
					[4, 6, 'baba'],
					[4, 14, 'wall'],
					[12, 14, 'rock'],
				],
				is: [[13, 6], [5, 6], [5, 14], [13, 14]],
			},
			tiles: 20,
		},

		1: {
			blocks: {
				horizantal: [
					[9, 3, 16, 'wall'],
					[5, 11, 16, 'wall'],
					[5, 7, 10, 'wall'],
					[9, 17, 16, 'wall'],
				],
				Vertical: [
					[9, 4, 7, 'wall'],
					[15, 4, 12, 'wall'],
					[5, 8, 12, 'wall'],
					[9, 12, 17, 'wall'],
					[15, 12, 17, 'wall'],
				],

				Sprites: [
					[11, 9, 'flag'],
					[13, 14, 'baba'],
				],
				Verbs: [
					[13, 7, 'win'],
					[6, 15, 'you'],
					[11, 15, 'stop'],
				],
				Nouns: [
					[7, 9, 'flag'],
					[6, 13, 'baba'],
					[11, 13, 'wall'],
				],
				is: [[11, 5], [6, 14], [11, 14]],
			},
			tiles: 20,
		},
		2: {
			blocks: {
				horizantal: [
					[9, 3, 17, 'flag'],
					[5, 11, 16, 'flag'],
					[5, 7, 10, 'flag'],
					[9, 17, 14, 'flag'],
					[13, 16, 17, 'flag'],
				],
				Vertical: [
					[9, 4, 7, 'flag'],
					[16, 4, 12, 'flag'],
					[5, 8, 12, 'flag'],
					[9, 12, 17, 'flag'],
					[16, 12, 16, 'flag'],
				],

				Sprites: [, [13, 14, 'wall']],
				Verbs: [
					[13, 7, 'win'],
					[6, 15, 'you'],
					[11, 15, 'stop'],
				],
				Nouns: [
					[7, 9, 'baba'],
					[6, 13, 'wall'],
					[11, 13, 'flag'],
				],
				is: [[11, 5], [6, 14], [11, 14]],
			},
			tiles: 20,
		},
		3: {
			blocks: {
				horizantal: [
					[0, 3, 2, 'wall'],
					[7, 2, 15, 'wall'],
					[4, 9, 8, 'wall'],
					[11, 9, 18, 'wall'],
					[8, 9, 11, 'water'],
					[4, 17, 18, 'wall'],
					[6, 16, 8, 'water'],
					[5, 15, 8, 'water'],
					[5, 14, 8, 'water'],
				],
				Vertical: [
					[2, 0, 4, 'wall'],
					[7, 3, 9, 'wall'],
					[14, 3, 9, 'wall'],
					[4, 10, 18, 'wall'],
					[17, 10, 18, 'wall'],
					[11, 10, 13, 'wall'],
					[11, 14, 18, 'wall'],
					[9, 13, 14, 'wall'],
				],

				Sprites: [
					[9, 4, 'baba'],
					[12, 4, 'rock'],
					[12, 6, 'rock'],
					[5, 16, 'flag'],
				],
				Verbs: [
					[0, 2, 'you'],
					[1, 2, 'stop'],
					[6, 8, 'sink'],
					[15, 11, 'push'],
					[15, 14, 'win'],
				],
				Nouns: [
					[0, 0, 'baba'],
					[1, 0, 'wall'],
					[6, 6, 'water'],
					[13, 11, 'rock'],
					[13, 14, 'flag'],
				],
				is: [[1, 1], [0, 1], [6, 7], [14, 11], [14, 14]],
			},
			tiles: 20,
		},
		4: {
			blocks: {
				horizantal: [
					[12, 7, 21, 'skull'],
					[12, 16, 21, 'skull'],
					[3, 18, 6, 'skull'],
					[7, 18, 10, 'skull'],
				],
				Vertical: [
					[12, 7, 16, 'skull'],
					[20, 7, 16, 'skull'],
					[3, 18, 25, 'skull'],
					[9, 18, 25, 'skull'],
					[5, 15, 18, 'skull'],
					[7, 15, 18, 'skull'],
				],

				Sprites: [
					[6, 20, 'baba'],
					[6, 15, 'rock'],
					[6, 16, 'rock'],
					[6, 17, 'rock'],
					[17, 14, 'flag'],
				],
				Verbs: [
					[2, 1, 'you'],
					[2, 0, 'win'],
					[4, 10, 'push'],
					[14, 12, 'defeat'],
				],
				Nouns: [
					[0, 0, 'flag'],
					[14, 10, 'skull'],
					[2, 10, 'rock'],
					[0, 1, 'baba'],
				],
				is: [[1, 0], [1, 1], [3, 10], [14, 11]],
			},
			tiles: 25,
		},
	},
};

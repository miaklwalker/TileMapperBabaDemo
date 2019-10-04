import { drawBackground } from '../draw/DrawBackground.js';
import { GameInfo } from '../GameFiles/Levels.js';
import { makeLevel } from '../blockMakers/MakeLevel.js';
import { drawBlocks } from '../draw/DrawBlocks.js';
import { blockLogic } from '../blockFunctions/BlockLogic.js';
import { controls } from '../functions/Controls.js';
import { setRules } from '../GameFiles/Rules.js';
import { Restart } from '../functions/Restart.js';
import { MessageQueue } from '../MessageCenter/MessageQueue.js';
import gameWin from '../functions/gameWin.js';
import { tilemapperInit } from '../TileMapper/src/components/Functions/tileMapperInit.js';
import { tileFormatOutput } from '../TileMapper/src/components/class/tileMapper.js';

export const Level = {num: 0,msgCenter: new MessageQueue(),};

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');
let tilemapper
canvas.width = window.innerHeight;
canvas.height = window.innerHeight * 0.9;


function setup() {
	if(localStorage.getItem("saveGame")!=null){
		Level.num = localStorage.getItem("saveGame")
	}
	const {tiles} = GameInfo.Levels[Level.num]
	tilemapper = tilemapperInit(canvas,context,[tiles,tiles])

	tilemapper.addNewTypes(GameInfo.Sprite)
	tilemapper.output = 'Object'
	tilemapper.makeSelectElement('types',tilemapper.types)
	controls.addControls();
	draw();
}
function draw() {
	if (Level.num < 5||Level.num==='debug') {
		const {tiles} = GameInfo.Levels[Level.num]
		context.drawImage(drawBackground(canvas, 'black'), 0, 0);
		makeLevel();
		drawBlocks(canvas, context,tiles);
		tilemapper.makeGrid()
		tilemapper.drawSelection()
		blockLogic();
		Level.msgCenter.dispatch();
		setRules();
		Restart();
		loop(draw);
	} else {
		gameWin(canvas, context);
	}
}

function loop(name) {
	requestAnimationFrame(name);
}
setup();



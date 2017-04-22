// INIT
var canvas = document.getElementById("startVillage");
var context = canvas.getContext("2d");

var map00=[
	[0,0,101,0,0,0,0,0,0,0,0,0,0,0,0,101,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,101,0,0,0,0],
	[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,1,1,0,0,0,0,0,0,0,0,101,101,0,0,0,0],
	[0,0,0,0,0,1,1,1,0,55,0,0,0,0,101,0,0,0,0,0],
	[0,0,0,0,0,0,0,1,1,101,101,101,101,101,101,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,99],
	[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,101,0,0,0,0,0,1,0,0,0,0,0,0,101,0,0,0,0],
	[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,101,0,0,0,0],
	[1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,101,0,0,0,0],
	[0,0,0,0,1,1,0,0,1,0,0,0,0,0,101,101,0,0,0,0],
	[0,0,0,0,0,1,1,1,1,0,0,0,0,0,101,0,0,0,0,0],
	[0,0,101,0,0,0,0,1,1,101,101,101,101,101,101,0,0,0,0,0],
	[0,0,101,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,101,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
	[0,0,101,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],
	[0,0,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var map01=[
	[3,3,101,0,3,3,3,0,0,0,0,0,0,0,0,101,0,0,0,0],
	[0,0,102,3,3,0,0,0,0,0,0,0,0,0,0,101,0,0,0,0],
	[4,4,102,1,1,0,0,0,0,0,0,0,0,0,0,101,0,0,0,0],
	[0,0,4,3,1,1,0,0,0,0,0,0,0,0,101,101,0,0,0,0],
	[101,101,4,3,0,1,1,1,0,0,0,0,0,0,101,0,0,0,0,0],
	[102,102,4,3,0,0,0,1,1,101,102,102,102,102,102,0,0,0,0,0],
	[0,0,4,3,0,0,0,0,1,0,0,0,0,0,3,3,3,0,0,0],
	[0,0,4,3,0,0,0,0,1,1,4,4,4,4,4,4,4,0,0,0],
	[0,0,4,3,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],
	[0,0,4,3,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,4,0,0,0,0,0,1,0,0,0,0,0,0,101,0,0,0,0],
	[0,0,4,0,0,0,0,0,1,0,0,0,0,0,0,101,0,0,0,0],
	[1,1,4,4,4,3,3,3,1,0,0,0,0,0,0,101,0,0,0,0],
	[0,0,4,0,1,1,0,0,1,0,0,0,0,0,101,101,0,0,0,0],
	[0,0,4,0,0,1,1,1,1,0,0,0,0,0,101,0,0,0,0,0],
	[0,0,4,0,0,0,0,1,1,5,5,5,101,101,101,0,0,0,0,0],
	[0,0,4,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,102,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
	[0,0,102,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],
	[0,0,102,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];



// 占쎌겱占쎌삺筌랃옙 占쎄퐨占쎈섧
var nowMap;
nowMap = map00;



const UNIT = 64;
const IMG_U = 96;
const MAPIMG_U = 64;
const MOVE_U = 16;

const ARROW_LEFT = 37;
const ARROW_UP = 38;
const ARROW_RIGHT = 39;
const ARROW_DOWN = 40;

const EAST_DIRECTION = 0;
const WEST_DIRECTION = 1;
const SOUTH_DIRECTION = 2;
const NORTH_DIRECTION = 3;

// map[] : value 2 -> stone
const MAP_GRASS = 0;
const MAP_ROAD01 = 1;
const MAP_STONE = 101;
const MAP_SAND = 3;
const MAP_SANDROAD01 = 4;
const MAP_SANDSTONE = 102;

var grass = new Image();
var road01 = new Image();
var stone = new Image();
var sand = new Image();
var sandRoad01 = new Image();
var sandStone = new Image();

var player = new Image();

// character motion

const MOTION00 = 0;
const MOTION01 = 1;
const MOTION02 = 2;
const MOTION03 = 3;
var motionIdx = MOTION00;


grass.src = './img/tileImage.png';
road01.src = './img/tileImage.png';
stone.src = './img/tileImage.png';
sand.src = './img/tileImage.png';
sandRoad01.src = './img/tileImage.png';
sandStone.src = './img/tileImage.png';

player.src = './img/eagle.png';

// Map coordinate
var mapX = 0;
var mapY = 0;

var x_start = 0;
var x_end = 0;
var x_char = 0;

var y_start = 0;
var y_end = 0;
var y_char = 0;

// Character coordinate
var charX = 0;
var charY = 0;
//var nowX = charX-(charX%UNIT);
//var nowY = charY-(charY%UNIT);






// Character direction
var charDirection = SOUTH_DIRECTION;
// dialog李?-yoda-
var chat=document.getElementById("dialog");

function key(){
	if(event.keyCode == ARROW_LEFT){
		if( (charX <= 0)
			|| nowMap[((charY-(charY%UNIT)) / UNIT)][ Math.ceil((charX-UNIT) / UNIT) ] > 100
			|| nowMap[ Math.ceil(charY / UNIT) ][ Math.ceil((charX-UNIT) / UNIT)] > 100 ){
		}else{
			charX -= MOVE_U;
		}
        charDirection = WEST_DIRECTION;

	}
	if(event.keyCode == ARROW_UP){
		if( (charY < MOVE_U )
			|| nowMap[ Math.ceil( (charY - UNIT) / UNIT) ][((charX-(charX%UNIT)) / UNIT)] > 100
			|| nowMap[ Math.ceil( (charY - UNIT) / UNIT) ][ Math.ceil(charX / UNIT) ] > 100 ){
		}else{
			charY -= MOVE_U;
		}
        charDirection = NORTH_DIRECTION;
	}
	if(event.keyCode == ARROW_RIGHT){
		if( (charX > (19 * UNIT - MOVE_U) )
			|| nowMap[((charY-(charY%UNIT)) / UNIT)][((charX-(charX%UNIT) + UNIT) / UNIT)] > 100
			|| nowMap[ Math.ceil(charY / UNIT) ][((charX-(charX%UNIT) + UNIT) / UNIT)] > 100 ){
		}else{
			charX += MOVE_U;
		}
        charDirection = EAST_DIRECTION;
	}
	if(event.keyCode == ARROW_DOWN){
		if( (charY > (19 * UNIT - MOVE_U) )
			|| nowMap[ ( (charY-(charY%UNIT)+UNIT) / UNIT) ][ ( (charX - (charX%UNIT) ) / UNIT)] > 100 
			|| nowMap[ ( (charY-(charY%UNIT)+UNIT) / UNIT) ][ Math.ceil( charX / UNIT ) ] > 100 ){
		}else{
			charY += MOVE_U;
		}
        charDirection = SOUTH_DIRECTION;
	}
	
	// npc ?욎뿉 ?덈떎??媛?뺥븯??npc瑜?蹂닿퀬 ?뷀꽣 ?꾨Ⅴ硫?dialog ?앹꽦
	if(event.keyCode==13){
		if(nowMap[charY/UNIT][charX/UNIT]==55 && charDirection == SOUTH_DIRECTION && textOn==0){
			console.log(textOn);
			chat.style="block";
			createDiag( individual );
			textOn = 1;
			console.log(textOn);
		}else if(textOn == 1){
			console.log("?닿쾶 ?ㅽ뻾??2");
			textSkip();
		}
		}else if(textOn == 3){
			console.log(textOn);
			console.log("?닿쾶 ?ㅽ뻾??");
			textEnd();
		}
}
	
	// map01嚥∽옙 占쎌뵠占쎈짗
	if( nowMap[(charY / UNIT)][(charX / UNIT)]==99 ){
		nowMap=map01;
		charX= (0*UNIT);
		charY= (0*UNIT);
			
	}
	
	
	
	
    console.log(`[Absolute coordinate] (X, Y) = (${charX / UNIT}, ${charY / UNIT})`);
    
}

function drawMap(){
	mapX=0;
	mapY=0;

    // 10x10癲ル슢??옙??뇦猿볦삕 占쎌녃域뱄퐢?랃옙援?옙?울옙?낅쐻?좑옙 癲ル슢??린?됱삕占쎈??얠쉩?앭뜝占?占쎈쐻占쎈윥占쎈꺊占쎈쐻占쎈윥占쎈떍,占쎈쐻占쎈윞占쎈쭫占쎈쐻占쎈윪占쎌젳
    if( charX/UNIT < 5) {
        // 0,0 ?좎럥?삣뜝?덉쐾占쎈쇊?좎뜴?앾옙?ο옙留띰옙?앾옙?ο쭪?λ쐻占쎈윪?닿엥?앾옙?ι뜮?얠삕占쎌맶占쎈쐻?좑옙 占쎈쐻占쎈윪占쎈㎡占쎈쎗占쎈즴筌?！琉껓옙堉뱄옙?삣뜝?덉쑅?좎럡??옙?앾옙?ο옙留띰옙?앾옙?ο옙?끻뜝?뚯쟼占쎈쐻?좑옙.
        x_start = 0;
        x_end = x_start + 10;
        x_char = charX;
    } else if( charX/UNIT >= 5 && charX/UNIT < 16) {
        // X?좎럥?삣뜝?덉쑅?좎럡愿댐옙?앾옙?ο옙留뜹뜝?덉맶占쎈쐻?좑옙 占쎈쐻占쎈윥占쏙옙?遺얘턁筌?ŀ?앾옙猷욑옙留?좎럩留띰옙?앾옙?ο쭪?λ쐻占쎈윪?대먯삕占쎌맶?좎럥?ε뜝?꾧뉘占쎈쐻占쎈윪占쎈츐占쎈쐻占쎈윥占쎌넅占쎈쐻占쎈윪?댐옙 占쎈쐻占쎈윥占쎈㎍占쎈쐻占쎈윥占쎌몝占쎈쐻占쎈윥占쎈뱜占쎌녇占쎄틓占쎈뮝?좎럩援⑨옙?앾옙?⑼옙紐앾옙?앾옙?ο옙留뜹뜝?덉맶占쎈쐻?좑옙 4占쎈쐻占쎈윥占쎈㎍占쎈쐻占쎈윥占쎌몗占쎈쐻占쎈짗占쎌굲 占쎈쐻占쎈윥占쎈㎍占쎈쐻占쎈윥占쎌몝?낉옙占쎄턁占쎈벨?숋옙援뀐┼??뀖占쎌냷鶯ㅼ룇占썩뫁履롳옙?ワ옙留?옙??옙?앾옙?ο옙留띰옙?앾옙?ο쭪?λ쐻占쎈윪?댐옙 5占쎈쐻占쎈윥占쎈㎍占쎈쐻占쎈윥占쎌몗占쎈쐻占쎈짗占쎌굲 占쎈쐻占쎈윪占쎈㎡占쎈쎗占쎈즴筌?！琉껓옙堉뱄옙?삣뜝?덉쑅?좎럡??옙?앾옙?ο옙留띰옙?앾옙?ο옙?끻뜝?뚯쟼占쎈쐻?좑옙.
        x_start = (charX-(charX%UNIT))/UNIT - 5
        x_end = (charX-(charX%UNIT))/UNIT + 5
        x_char = (charX%UNIT) + 5 * UNIT;
    } else {    // X >= 16
        // 10 ?좎럥?삣뜝?덉쐾占쎈쇊?좎뜴?앾옙?ο옙留띰옙?앾옙?ο쭪?λ쐻占쎈윪?닿엥?앾옙?ι뜮?얠삕占쎌맶占쎈쐻?좑옙 占쎈쐻占쎈윪占쎈㎡占쎈쎗占쎈즴筌?！琉껓옙堉뱄옙?삣뜝?덉쑅?좎럡??옙?앾옙?ο옙留띰옙?앾옙?ο옙?끻뜝?뚯쟼占쎈쐻?좑옙.
        x_start = 10;
        x_end = 20;
        x_char = charX - 10 * UNIT;
    }

    if(charY/UNIT < 5) {
        // 0,0 ?좎럥?삣뜝?덉쐾占쎈쇊?좎뜴?앾옙?ο옙留띰옙?앾옙?ο쭪?λ쐻占쎈윪?닿엥?앾옙?ι뜮?얠삕占쎌맶占쎈쐻?좑옙 占쎈쐻占쎈윪占쎈㎡占쎈쎗占쎈즴筌?！琉껓옙堉뱄옙?삣뜝?덉쑅?좎럡??옙?앾옙?ο옙留띰옙?앾옙?ο옙?끻뜝?뚯쟼占쎈쐻?좑옙.
        y_start = 0;
        y_end = y_start + 10;
        y_char = charY;
    } else if( charY/UNIT >= 5 && charY/UNIT < 16) {
        // Y?좎럥?삣뜝?덉쑅?좎럡愿댐옙?앾옙?ο옙留뜹뜝?덉맶占쎈쐻?좑옙 占쎈쐻占쎈윥占쏙옙?遺얘턁筌?ŀ?앾옙猷욑옙留?좎럩留띰옙?앾옙?ο쭪?λ쐻占쎈윪?대먯삕占쎌맶?좎럥?ε뜝?꾧뉘占쎈쐻占쎈윪占쎈츐占쎈쐻占쎈윥占쎌넅占쎈쐻占쎈윪?댐옙 占쎈쐻占쎈윥占쎈㎍占쎈쐻占쎈윥占쎌몝癲ル슢?㏆옙留삣뜝?뚮㎍占쎈쐻占쎈윥占쎌몗占쎈쐪筌먦룂??4占쎈쐻占쎈윥占쎈㎍占쎈쐻占쎈윥占쎌몗占쎈쐻占쎈짗占쎌굲 占쎈쐻占쎈윥占쎈㎍占쎈쐻占쎈윥占쎌몗占쎈쐻占쎈윥占쎈?占쎈쐻占쎈윥占쎈㎍占쎈쐻占쎈윥占쎌몝占쎈쐻占쎈윞占쎈쑓占쎈쐻占쎈윥占쎈㎍占쎈쐻占쎈윥占쎌몗占쎈쐪筌먦룂??5占쎈쐻占쎈윥占쎈㎍占쎈쐻占쎈윥占쎌몗占쎈쐻占쎈짗占쎌굲 占쎈쐻占쎈윪占쎈㎡占쎈쎗占쎈즴筌?！琉껓옙堉뱄옙?삣뜝?덉쑅?좎럡??옙?앾옙?ο옙留띰옙?앾옙?ο옙?끻뜝?뚯쟼占쎈쐻?좑옙.
        y_start = (charY-(charY%UNIT))/UNIT - 5
        y_end = (charY-(charY%UNIT))/UNIT + 5
        y_char = (charY%UNIT) + (5 * UNIT);
    } else {    // Y >= 16
        // 10 ?좎럥?삣뜝?덉쐾占쎈쇊?좎뜴?앾옙?ο옙留띰옙?앾옙?ο쭪?λ쐻占쎈윪?닿엥?앾옙?ι뜮?얠삕占쎌맶占쎈쐻?좑옙 占쎈쐻占쎈윪占쎈㎡占쎈쎗占쎈즴筌?！琉껓옙堉뱄옙?삣뜝?덉쑅?좎럡??옙?앾옙?ο옙留띰옙?앾옙?ο옙?끻뜝?뚯쟼占쎈쐻?좑옙.
        y_start = 10;
        y_end = 20;
        y_char = charY - 10 * UNIT;
    }
	
    // 占쎈뙑?⑤슦占쎌?쨨?됯램?뺧옙援℡뜝占?占쎈쐻占쎈윥占쎈젇占쎈쐻占쎈윪?억옙 癲ル슢??린琉룸쐻占쎈짗占쎌굲?좎럥??占쎌쐺獄쏅챷援▼뜝?덈돱占쎈섀占쎈Ŋ??
	for(var i = y_start; i < y_end ; i++){
		for(var j=x_start, mapX = 0; j < x_end ; j++){
            switch(nowMap[i][j]) {
            	case MAP_GRASS:
                    context.drawImage(grass, 0, 32, MAPIMG_U, MAPIMG_U, mapX, mapY, UNIT, UNIT);
                    break;
                case MAP_ROAD01:
                    context.drawImage(road01, 64, 32, MAPIMG_U, MAPIMG_U, mapX, mapY, UNIT, UNIT);
                    break;
                case MAP_STONE:
                    context.drawImage(stone, 192, 32, MAPIMG_U, MAPIMG_U, mapX, mapY, UNIT, UNIT);
                    break;
                case MAP_SAND:
                    context.drawImage(sand, 0, 128, MAPIMG_U, MAPIMG_U, mapX, mapY, UNIT, UNIT);
                    break;
                case MAP_SANDROAD01:
                    context.drawImage(sandRoad01, 64, 128, MAPIMG_U, MAPIMG_U, mapX, mapY, UNIT, UNIT);
                    break;
                case MAP_SANDSTONE:
                    context.drawImage(sandStone, 128, 128, MAPIMG_U, MAPIMG_U, mapX, mapY, UNIT, UNIT);
                    break;
            }
            mapX += UNIT;
		}
		mapY += UNIT;
	}

    

}


function drawChar(){
	switch(charDirection) {
    case SOUTH_DIRECTION:
    	switch(motionIdx){
    		case MOTION00: context.drawImage(player, IMG_U*0, IMG_U*0, IMG_U, IMG_U, x_char, y_char, UNIT, UNIT); break;
    		case MOTION01: context.drawImage(player, IMG_U*1, IMG_U*0, IMG_U, IMG_U, x_char, y_char, UNIT, UNIT); break;
    		case MOTION02: context.drawImage(player, IMG_U*2, IMG_U*0, IMG_U, IMG_U, x_char, y_char, UNIT, UNIT); break;
    		case MOTION03: context.drawImage(player, IMG_U*3, IMG_U*0, IMG_U, IMG_U, x_char, y_char, UNIT, UNIT); break;
    	}
        break;
    case WEST_DIRECTION:
    	switch(motionIdx){
    		case MOTION00: context.drawImage(player, IMG_U*0, IMG_U*1, IMG_U, IMG_U, x_char, y_char, UNIT, UNIT); break;
    		case MOTION01: context.drawImage(player, IMG_U*1, IMG_U*1, IMG_U, IMG_U, x_char, y_char, UNIT, UNIT); break;
    		case MOTION02: context.drawImage(player, IMG_U*2, IMG_U*1, IMG_U, IMG_U, x_char, y_char, UNIT, UNIT); break;
    		case MOTION03: context.drawImage(player, IMG_U*3, IMG_U*1, IMG_U, IMG_U, x_char, y_char, UNIT, UNIT); break;
    	}
        break;
    case EAST_DIRECTION:
    	switch(motionIdx){
    		case MOTION00: context.drawImage(player, IMG_U*0, IMG_U*2, IMG_U, IMG_U, x_char, y_char, UNIT, UNIT); break;
    		case MOTION01: context.drawImage(player, IMG_U*1, IMG_U*2, IMG_U, IMG_U, x_char, y_char, UNIT, UNIT); break;
    		case MOTION02: context.drawImage(player, IMG_U*2, IMG_U*2, IMG_U, IMG_U, x_char, y_char, UNIT, UNIT); break;
    		case MOTION03: context.drawImage(player, IMG_U*3, IMG_U*2, IMG_U, IMG_U, x_char, y_char, UNIT, UNIT); break;
    	}
        break;
    case NORTH_DIRECTION:
    	switch(motionIdx){
    		case MOTION00: context.drawImage(player, IMG_U*0, IMG_U*3, IMG_U, IMG_U, x_char, y_char, UNIT, UNIT); break;
    		case MOTION01: context.drawImage(player, IMG_U*1, IMG_U*3, IMG_U, IMG_U, x_char, y_char, UNIT, UNIT); break;
    		case MOTION02: context.drawImage(player, IMG_U*2, IMG_U*3, IMG_U, IMG_U, x_char, y_char, UNIT, UNIT); break;
    		case MOTION03: context.drawImage(player, IMG_U*3, IMG_U*3, IMG_U, IMG_U, x_char, y_char, UNIT, UNIT); break;
    	}
        break;
	}

}




	setInterval(function fps(){
		context.clearRect(0, 0, canvas.width, canvas.height);
		drawMap();
		drawChar();
	}, 51);
	setInterval(function motionFps(){
		motionIdx=(motionIdx+1)%4
	}, 150);

	// dialog ?뺤쓽 -yoda-
 	var text00 = '?쇨낀?쇨낀 ?쇳뵾?쇳뵾?쇳뵾?쇳뵾?쇨낀?쇳뵾怨?愿?⑹씠??吏깆㎟留⑥씤???ㅽ븯?⑤꽕 ?꾪뛾???ㅽ븯??吏깆㎟. 二쇰쭚?숈븞 ?꾩????덈릺??誘몄븞?⑸땲???щ옉?⑸땲??  '; 
	// (1) text瑜??쒕떒?댁뵫 履쇨컿??
 	individual = text00.split('');
 	function textEnd(){
		charDirection = NORTH_DIRECTION;
		chat.style.display="none";
		$('#dialog').html("");
		textOn = 0;
 	}
 	function textSkip(){
 		?ㅽ궢?쒕떎.
 		
 	}
 	
	function createDiag ( dialog ) {
		for(k = 0; k < dialog.length; k++) {
			(function(k){
	  			setTimeout(function(){
	  			// (2) 50*k?쒓컙 留덈떎 湲???섎굹瑜?dialog???쒖떆?섍쿋?? 	
	   			 	$('#dialog').text($('#dialog').text()+dialog[k]);
	  			}, 50*k);  
			}(k));
		}
		
	}	
	var textOn=0;
	

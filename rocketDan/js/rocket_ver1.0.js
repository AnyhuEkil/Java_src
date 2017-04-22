$(function(){

});

/*	1장. 객체의 오의를 깨닫다. */
/*	2장. 주화입마에 빠지다. */
/*	3장. 코딩 ? 환골탈태 : 폐인 */

// 기본 키 설정 /위 아래,위위아래, 위 아래,
//	방향키,a키:메뉴, z키:ok, x키:back
document.addEventListener("keydown", ykeyRokect);
/*
var rightPressed=false;
var leftPressed=false;
var downPressed=false;
var upPressed=false;
var aPressed=false;
var zPressed=false;
var xPressed=false;
*/
function ykeyRokect(event){
	if(event.keyCode){
		console.log(String.fromCharCode(event.keyCode)+":"+event.keyCode);
	}
	if(event.keyCode == 38){
		upPressed();
    }
	else if(event.keyCode == 40){
		downPressed();
    }
    if(event.keyCode == 37){
    	leftPressed();
    }
    else if(event.keyCode == 39){
    	rightPressed();
    }
    if(event.keyCode == 65){ 	//a키
    	aPressed();
    }
    else if(event.keyCode == 90){ //z키
    	zPressed();
    }
    else if(event.keyCode == 88){ //x키
    	xPressed();
    }
}
/* 일단 보류(호버효과 나중에 추가 예정.)
function upPressed(){
	if (yListForm==1){
		// 직접 색변화방법.()
		if (yListCount > 1){
			yLocNth = "."+yWinLoc+":nth-child("+(yListCount)+")"; //키누르기 전 위치 제이쿼리 형태로 변환.
			$(yLocNth).css(yListBeforecss);	// 키누르기 전 위치에 전에 저장한 css를 입힘.
			yListCount -= 1;
			yLocNth = "."+yWinLoc+":nth-child("+yListCount+")";	//키누른후 위치 제이쿼리형태
			yListBeforecss = $(yLocNth).css();	//이동전의 색을 저장함
			$(yLocNth).css({background:"purple",color:"black"});//키누른 후 위치에 정해놓은 색입힘.
			console.log(yLocNth);
			여기서부터 추가변경해야됨.!!downPressed() 포함.!!
			yMl2nd--;
		}
	}
}

function downPressed(){
	if (yListForm==1){
		if (yListCount < $(yWinLoc).length){
			yLocationNth = "."+yWinLoc+":nth-child("+yBclCount+")";
			$(yLocationNth).css({background:"gold",color:"white"});
			yBclCount += 1;
			yLocationNth = yLocation+":nth-child("+yBclCount+")";
			$(yLocationNth).css({background:"purple",color:"black"});
			console.log(yLocationNth);
			yMl2nd++;
		}
	}
}
*/

function upPressed(){
	if(yListCount>1){
		yMouseY-=yMouseLoc[1];
		$("#whyMouse").css({top:yMouseY});
		yListCount--;
		console.log(yListCount);
	}
//	$("#whyMouse").offset(yMouseLoc[0]);
//	yMouseLoc[1]
}
function downPressed(){
	if(yListCount<$(yWinLoc[2]).length){
		yMouseY+=yMouseLoc[1];
		$("#whyMouse").css({top:yMouseY});
		yListCount++;
		console.log(yListCount);
	}
//	yMouseLoc[1]
}
function leftPressed(){
	
}

function rightPressed(){
	
}

// a키 발생시 함수
function aPressed(){
	console.log(yWinLoc[0]);
	if(yWinLoc[0] == "whyTopMap"){  //맵화면에서 활성화
		yBattle.yBtmCommand();		// 실행을 메뉴창으로 변경해야됨.
	}
	else{
		console.log("메뉴키를 사용할수 없는상태입니다.");
	}
	console.log(yWinLoc[0]);
}

function zPressed(){
	// yWinLoc값과yListCount를 이용해서 자동으로 값을 부를 방법이 있을꺼같은데..일단은 노가다 ㄱㄱ
	if(yWinLoc[0] == "whyBcListbox"){
		if(yListCount==1){
			yBattle.yBcSkillbox();//좌표값의 함수 실행.
		}
		else if(yListCount==2){
			yBattle.yBcAcomonbox();
		}
		else if(yListCount==3){
			yBattle.yBcItembox();
		}
		else if(yListCount==4){
			yBattle.yBcRun();
		}
	}
	else if(yWinLoc[0]=="whyBcSkillbox"){
		yBattle.yBcSkill(yListCount);
	}
	else if(yWinLoc[0]=="whyBcSkillbox"){
		yBattle.yBcSkill(yListCount);
	}
	else if(yWinLoc[0]=="whyBcSkillbox"){
		yBattle.yBcSkill(yListCount);
	}
	else if(yWinLoc[0]=="whyBcSkillbox"){
		yBattle.yBcSkill(yListCount);
	}
}

function xPressed(){
	if(yWinLoc[0] == "whyBcSkillbox"){
		
	}
	else if(yWinLoc[0] == "whyBcAcomonbox"){
		
	}
}






// 변수들 전체 정의~!!!
var yWinLoc = [];	//현재 화면 위치(함수쪽? vs div? 결정해야됨.) /
yWinLoc[0] = "whyTopMap"; //임시로 배틀화면으로 초기값 설정놓음. 

function yWinLocFun(loc){
	yWinLoc[0] = loc;	//class이름
	yWinLoc[1] = "."+loc;	//.class이름
	yWinLoc[2] = "."+$("."+loc).children().attr("class"); //.(class자손이름)
//	yMouseLocFun(yWinLoc[2]);
	yMouseLoc[0] = $(yWinLoc[2]).offset();	// 커서가 갈곳 위치
	yMouseLoc[1] = $(yWinLoc[2]).height();	// 커서가 갈곳 높이
	yMouseLoc[2] = $(yWinLoc[2]).width();	// 커서가 갈곳 너비
	yMouseY = $(yWinLoc[2]).offset().top;	// 커서가 갈곳 top값
	yMouseX = $(yWinLoc[2]).offset().left;	// 커서가 갈곳 left값
	$("#whyMouse").offset(yMouseLoc[0]);	// 커서 위치
	$("#whyMouse").height(yMouseLoc[1]);	// 커서 높이
	$("#whyMouse").width(yMouseLoc[2]); 	// 커서 너비
}
var yMouseLoc=[]; // [0]offset(); [1]height(); [2]width(); 값을 취할것임.
var yMouseX;
var yMouseY;


/*	아직 사용안함... 뭔가 떠올를듯 떠오르지 않음.ㅠ
//함수 실행을 위한 함수 좌표.
//yFunLoc[0] = 전체화면,	yFunLoc[1] = 탑박스,	yFunLoc[2] = 바텀박스, yFunLoc[3] = 전체창, yFunLoc[3] = 전체창
//함수 실행용 좌표 항상 0번은 상위 클래스 좌표
var yFunLoc=[]; 
	yFunLoc[0]="whyMainBox";
	yFunLoc[1]=[];
		yFunLoc[1][0]="whyTopbox";
		yFunLoc[1][1]="whyTbBattle";
		yFunLoc[1][2]="event";
		yFunLoc[1][3]="map";
	yFunLoc[2]=[];
		yFunLoc[2][0]="whyBottombox";
		yFunLoc[2][1]="whyBtTextbox";
		yFunLoc[2][2]="whyBbCommand";
	yFunLoc[3]=[];
		yFunLoc[3][0]="whyAllbox";
	yFunLoc[4]=[];
		yFunLoc[4][0]="noname40";
*/

// 리스트 폼 0:디폴트, 1:list형, 2:table형
var yListForm = 0;
yListForm = 1; // 임시로 리스트 폼을 1로 해놓음.
// 리스트 카운트
var yListCount = 0;	//리스트 순서(nth기준)
//var yListBeforecss;	//그전 css속성
//var yLocNth;	// "."+yWinLoc+":nth-child("+(yListCount)+")";형태의 값
		
// 화면전환 함수 실행.
var yBattle={
	yBtmCommand : function(){
		$(".whyTopMap").css({display:"none"});  //맵팀 캔버스 끄기
		$(".whyBtmTextbox").css({display:"none"});  //맵팀 캔버스 끄기
		$(".whyTopBattle").css({display:"block"});	//해당 클래스 이름을 변수로 가져올 방법이 있을꺼같음.. 나중에 추가
		$(".whyBtmCommand").css({display:"block"});	//해당 클래스 이름을 변수로 가져올 방법이 있을꺼같음.. 나중에 추가
		yWinLocFun("whyBcListbox"); //커서 위치 및 현재 위치 함수 소환.
		yListCount = 1; //리스트 초기값 선언.
	},
	yBcSkillbox : function(){
		$(".whyBcListbox").css({display:"none"});
		$(".whyBcSkillbox").css({display:"block"});
		yWinLocFun("whyBcSkillbox");
		yListCount = 1; 
	},
	yBcAcomonbox : function(){
		$(".whyBcListbox").css({display:"none"});
		$(".whyBcAcomonbox").css({display:"block"});
		yWinLocFun("whyBcAcomonbox");
		yListCount = 1; 
	},
	yBcItembox : function(){
		$(".whyBcListbox").css({display:"none"});
		$(".whyBcItembox").css({display:"block"});
		yWinLocFun("whyBcItembox");
		yListCount = 1; 
	},
	yBcRun : function(){
		$(".whyBcListbox").css({display:"none"});
		$(".whyBcRun").css({display:"block"});
		yWinLocFun("whyBcRun")
		yListCount = 1;
	},
	yBcSkill : function(num){
		alert(num+"번째 스킬발동");
	}
};
	

var yMap={
	yTopMap : function(){	
		$(".whyTopBattle").css({display:"none"});
		$(".whyTopMap").css({display:"block"});  //맵팀 캔버스 끄기
	}
};



// 재현이 작업

function Pokemon(pokemonNo, name, monLevel, monExperience, monPropNo, healthPoint, attackStr, shield, status){
	this.pokemonNo = pokemonNo;
	this.name = name; 
	this.monLevel = monLevel; 
	this.monExperience = monExperience; 
	this.monPropNo = monPropNo;
	this.healthPoint = healthPoint;
	this.attackStr = attackStr;
	this.shield = shield;
	this.status = status;

}

function BagConsumerables( mintNo, pokeBallNo, golds  ){
	this.mintNo = mintNo; 
	this.pokeBallNo = pokeBallNo;
	this.golds = golds;
//	var consumerableItems = ["mint", "pokeBall", "golds"];
	this.consumingItem = function(item){
		if(item == "mint"){
			if(this.mintNo >0){
				this.mintNo--;
				console.log("system- "+ item +" " + this.mintNo + "개 남았습니다.");
			}
			if(this.mintNo ==0){
				console.log("system- mint 없다 ㅜㅜ");
			}
		}

		if(item == "pokeBall"){
			if(this.pokeBallNo >0){
				this.pokeBallNo--;
				console.log("system- "+ item +" " + this.pokeBallNo + "개 남았습니다.");
			}
			if(this.pokeBallNo ==0){
				console.log("system- pokeBallNo 없다 ㅜㅜ");
			}
		}
		/* if(item == "golds"){
			if(this.golds >0){
				console.log("system- "+ item +" " + this.golds + "골드 남았...");
				this.mintNo--;
			}
			if(this.mintNo ==0)
				console.log("system- mint 없다 ㅜㅜ");
		} */
	};
	
	
}
/* function itemAvailable(item){
	if(item ==1){
		console.log("하나남으셨습니다! 상점에서 refill해주세요! ");
	}
	if(item ==0){
		console.log("아이템이 없습니다!");
	}	
} */




var pokemons =[];
var monProps = ["물","바람","풀","불","흙"];
	// pokemonNo name monLevel monExperience monPropNo healthPoint attackStr shield status
	//monProps = ["물","바람","풀","불","흙"]  "물"<"바람"<"풀"<"불"<"흙"<"물"
	// jb < yn < jb < gy < jw < jb  ... 먹이사슬 외에는 평범하게고우.
pokemons.push(new Pokemon(0, "jbMon", 1, 0, 0, 50, 19, 3 ,"이상없음"));  
pokemons.push(new Pokemon(1, "ynMon", 1, 0, 1, 60, 18, 6 ,"이상없음"));  // 포켓몬번호 이름 체력 기본공격력 기본방어력
pokemons.push(new Pokemon(2, "gyMon", 1, 0, 3, 43, 20, 3 ,"이상없음"));  // 일반공격이 1이면 스킬공격은 최소 1.2 최대1.7랜덤
pokemons.push(new Pokemon(3, "jwMon", 1, 0, 4, 54, 16, 4 ,"이상없음"));  //  pokemons[].pokemonNo
pokemons.push(new Pokemon(4, "jhMon", 1, 0, 2, 45, 22, 2 ,"이상없음"));  

var bagConsumerables = new BagConsumerables( 5, 4, 30000); //초기: 민트5개, 몬볼4개, 3만골드.


//////////////////////////////
///////////////// Working Functions
/* whyQ 어디에 쓰는것인고?
var divGoBackToMenu = document.createElement("div");
divGoBackToMenu.innerHTML = "메뉴창으로";
divGoBackToMenu.setAttribute("id", "goBackToMenu_jb");

function goBackToMenu(){
	$("#attackOptions_jb, #bagOptions_jb, #pokeBookOptions_jb, #runAway_jb").css("display","block");
	$("#normalAtt_jb, #skillAtt_jb, #goBackToMenu_jb,  #bagMint_jb, #throwBall_jb, #meditation_jb," 
			+"#pokeId00, #pokeId01, #pokeId02, #pokeId03, #pokeId04").css("display","none");	
}
*/
function coolTimeCalc(){
	userTurn = (coolTime01> coolTime02)?  false : true;// 내 쿨타임이 더 큰경우 ; 상대턴.
	console.log("==== 유저턴 확인하기: " + userTurn );
}

function winOrLose(){     // 이기거나 졋을떄 display 확인후-> 모든것 초기화.
	if( this.healthPoint02 <= 0){
		console.log(" enemy loses ");
		this.status02 = "notAvailable!ㅠㅠ";
		
		if((this.monExperience01 +30) >= 100){
			this.monExperience01 -= 70;
			this.monLevel01++;
			console.log("LEVEL UP! 체20, 공5, 방1 씩 증가!!");
			this.initMyHealthPoint += 20; 
			this.attackStr01 += 5;
			this.shield01 += 1;
			updatePokemons();
		}
		else{
			this.monExperience01 += 30;
			updatePokemons();  
		}
		console.log("경험치 오르나?  현재 나의 몬스터"+pokemons[this.pokemonNo01].name
				+"\n레벨: " +pokemons[this.pokemonNo01].monLevel 
				+ " 경험치: "+ pokemons[this.pokemonNo01].monExperience + " /100 "
				+ "\n 체: "+pokemons[this.pokemonNo01].healthPoint
				+ " 공: "+pokemons[this.pokemonNo01].attackStr
				+ " 방: "+pokemons[this.pokemonNo01].shield
				);
		return goBackToMenu();
		
	}
		
	if( this.healthPoint01 <= 0){
		console.log(" user loses ");
		this.status01 = "notAvailable!ㅠㅠ";
		pokemons[this.pokemonNo01].monExperience = (this.monExperience01 -10 < 0)? this.monExperience01 : this.monExperience01 -10;
		
		console.log("경험치 떨어지나?  현재 나의 몬스터"+pokemons[this.pokemonNo01].name
				+"\n레벨: " +pokemons[this.pokemonNo01].monLevel 
				+ " 경험치: "+ pokemons[this.pokemonNo01].monExperience + " /100 " );
		updatePokemons();
		return goBackToMenu();
		
	}
}

function updatePokemons(){
	propBonusAttRelease(this.monPropNo01, this.monPropNo02); // 원상태로 복귀.
	
	pokemons[this.pokemonNo01].pokemonNo = this.pokemonNo01;
	pokemons[this.pokemonNo01].name = this.name01;
	pokemons[this.pokemonNo01].attackStr = this.attackStr01;
	pokemons[this.pokemonNo01].shield = this.shield01;      
	/////////위에것들은 글쎄... 안변할텐데. 일단 놔두기로..
	
	if(pokemons[this.pokemonNo01].monLevel == this.monLevel01){
		pokemons[this.pokemonNo01].healthPoint = this.healthPoint01;
	}
	else{
		pokemons[this.pokemonNo01].monLevel++;
		pokemons[this.pokemonNo01].healthPoint = this.initMyHealthPoint;
	}
	pokemons[this.pokemonNo01].monExperience = this.monExperience01;
	console.log("내상태요? "+this.status01);
	console.log("적상태요? "+this.status02);
	pokemons[this.pokemonNo01].status = this.status01;
	
	coolTime01 =0;
	coolTime02 =0;
	propBonusOnce = true;

}

var propBonusOnce;
function propBonusAtt(prop01, prop02){
	
	if(propBonusOnce ){
		if((prop01+1)%5 == prop02){
			console.log("prop02우세.");
			this.attackStr01 *= 0.9;
			this.attackStr02 *= 1.1;
			console.log("내 감소된 공격력: "+this.attackStr01);
			console.log("상대 증가된 공격력: "+this.attackStr02);
		}
		if((prop02+1)%5 == prop01){
			console.log("prop01우세.");
			this.attackStr01 *= 1.1;
			this.attackStr02 *= 0.9;
			console.log("내 증가된 공격력: "+this.attackStr01);
			console.log("상대 감소된 공격력: "+this.attackStr02);
		}
	}
	propBonusOnce = false;
	
}

function propBonusAttRelease(prop01, prop02){   // update전  원상태로 복귀.
	if(propBonusOnce== false ){
		if(prop01 == prop02){
			console.log("평범하게 고우.");
		}	
		if((prop01+1)%5 == prop02){
			console.log("prop02우세해제.");
			this.attackStr01 /= 0.9;
			this.attackStr02 /= 1.1;
			console.log("내 증가된 공격력 해제: "+this.attackStr01 );
			console.log("상대 감소된 공격력 해제: "+this.attackStr02 );
		}
		if((prop02+1)%5 == prop01){
			console.log("prop01우세해제.");
			this.attackStr01 /= 1.1;
			this.attackStr02 /= 0.9;
			console.log("내 감소된 공격력 해제: "+this.attackStr01 );
			console.log("상대 증가된 공격력 해제: "+this.attackStr02 );
		}
	}
}


function tackle(){  	// 몸통박치기
	var showMove ="";
	if(userTurn==false){		//상대방턴인경우
		console.log("원래 내몬스터의 체력: " + this.healthPoint01 
				+ " 속성: "+ monProps[this.monPropNo02]
				+ "\n상대.공:"+this.attackStr02 
				+" 내.방:"+this.shield01 );
		this.healthPoint01 -= (this.attackStr02 - this.shield01);
		coolTime02 +=2;
		console.log("현재 내몬스터의 체력: "+this.healthPoint01 +"  쿨탐: "+ coolTime02);
		showMove = this.name02+"의 몸통박치기!";
	}
	else{	// 왠만하면 주인공 턴으로... 같거나 쿨탐적을경우.
		console.log("원래 상대몬스터의 체력: " + this.healthPoint02 
				+ " 속성: "+ monProps[this.monPropNo01]
				+ "\n내.공:"+this.attackStr01 
				+" 상대.방:"+this.shield02 );
		this.healthPoint02 -= (this.attackStr01 - this.shield02);
		coolTime01 +=2;
		console.log("현재 상대몬스터의 체력: "+this.healthPoint02 +"  쿨탐: "+ coolTime01);
		showMove = this.name01+"의 몸통박치기!";
	}
	console.log(showMove);
	winOrLose();
	coolTimeCalc();
}

function skillAttack(){  // 스킬공격 
	var showMove ="";
	var criticalAttack01 = this.attackStr01*(1+(Math.random()*0.5 + 0.2)).toFixed(2) ; 
	var criticalAttack02 = this.attackStr02*(1+(Math.random()*0.5 + 0.2)).toFixed(2); 
						// 스킬공격은 최대 1.5배 크리공격으로 할당. 소수점 2자리까지.
	if(userTurn==false){			//상대방턴인경우
		console.log("원래 내몬스터의 체력: " + this.healthPoint01 
				+ " 속성: "+ monProps[this.monPropNo02]
				+ "\n상대.공:"+criticalAttack02 
				+" 내.방:"+this.shield01 );
		this.healthPoint01 -= (criticalAttack02 - this.shield01);  
		coolTime02 +=3;
		console.log("현재 내몬스터의 체력: "+this.healthPoint01 +"  쿨탐: "+ coolTime02);
		showMove = this.name02+"의 스킬공격!";
	}
	else{
		console.log("원래 상대몬스터의 체력: " + this.healthPoint02
				+ " 속성: "+ monProps[this.monPropNo01]
				+ "\n내.공:"+criticalAttack01 
				+" 상대.방:"+this.shield02 );
		this.healthPoint02 -= (criticalAttack01 - this.shield02);
		coolTime01 +=3;
		console.log("현재 상대몬스터의 체력: "+this.healthPoint02 +"  쿨탐: "+ coolTime01);
		showMove = this.name01+"의 스킬공격!";
	}
	console.log(showMove);
	winOrLose();
	coolTimeCalc();
}

function createAttOptionsOnce(){
	coolTimeCalc();
	if(userTurn == false){
		console.log("현재 당신의 턴이 아닙니다!"
				+"\n내 쿨탐= "+coolTime01+ " : 상대방쿨탐 = "+ coolTime02 );
		return;
	}
	$("#attackOptions_jb, #bagOptions_jb,#pokeBookOptions_jb,#runAway_jb").css("display","none"); 
	
//whyQ삭제	var normalAtt = document.createElement("div");
	var skillAtt = document.createElement("div");
	
//	normalAtt skillAtt
	if( $("#normalAtt_jb").html() == null){
		normalAtt.innerHTML = "몸통박치기!";
		normalAtt.setAttribute("id","normalAtt_jb");
		document.body.insertBefore(normalAtt, document.getElementById("bagOptions_jb"));	
		skillAtt.innerHTML = "스킬공격!";
		skillAtt.setAttribute("id", "skillAtt_jb");
		document.body.insertBefore(skillAtt, document.getElementById("bagOptions_jb"));	
		document.body.insertBefore(divGoBackToMenu, document.getElementById("bagOptions_jb"));	
	}

	normalAtt.onclick = function(){ tackle(); }
	skillAtt.onclick = function(){ skillAttack(); }
	divGoBackToMenu.onclick = function(){ goBackToMenu(); }  //divGoBackToMenu   , #goBackToMenu_jb 
	$("#normalAtt_jb, #skillAtt_jb, #goBackToMenu_jb").css({
		"display":"table-cell",
		"background":"#883050",
		"width":"150px", 
		"height": "50px", 
		"text-align":"center", 
		"vertical-align": "middle",
		"clear":"both"
	});
	$("#bagOptions_jb,#pokeBookOptions_jb,#runAway_jb").css("display","none");

}


function checkBaggage(toDo){ // (일단 주인공만)가방뒤지기 - turn소모없이 체력회복, 몬스터볼던지기, 명상하기 등..
	var showMove ="";
	if(toDo =="mint"){
		console.log("민트먹기전: "+ this.healthPoint01);
		showMove = "먹을수 없습니다. \n\t(설명: 민트먹을시 원래체력보다 많아질경우, 민트없는경우.)"
		if(bagConsumerables.mintNo > 0 && (this.healthPoint01+25) < this.initMyHealthPoint ){
			bagConsumerables.consumingItem("mint");
			this.healthPoint01 += 25;  //민트먹고 체력 25회복. 아이템소모대신 쿨타임소모X
			showMove = this.name01 +" 현재체력:"+ this.healthPoint01;	
		}
	}
	else if(toDo =="catchWild"){
		var chanceToCatch = Math.trunc(Math.random()*0.6*100)/100;	
			//상대체력60%이하일때 운좋으면 잡기형식.	
		console.log("잡을확률"+chanceToCatch + 
					"\n체력비율" + (this.healthPoint02 / this.initEnemyHealthPoint));
		bagConsumerables.consumingItem("pokeBall");
		if(bagConsumerables.pokeBallNo > 0){
						
			if( (this.healthPoint02 / this.initEnemyHealthPoint ) < chanceToCatch ){
				// 체력백분율보다 random이 더 클경우 잡기가능.
				this.healthPoint02 = 0 ;
				showMove = "#### "+this.name02+"를 잡았다!";
			}
			else{  // 못잡을경우.
				coolTime01 +=3;
				showMove = "#### "+this.name02+" 잡기 실패!";
			}
		}
	}// catchWild END.
	else if(toDo =="meditation"){ // 명상하고 체력 13회복. 쿨타임+1대신 아이템소모X 소량회복. 
		showMove = "명상을 할수없습니다. \n\t(설명: 명상하면 전체체력보다 많아질경우.)"
		if((this.healthPoint01+13) < this.initMyHealthPoint){
			this.healthPoint01 += 13;
			coolTime01 +=1;
			showMove = this.name01+"명상하기! 현재체력: "+ this.healthPoint01;
		}
	}
	console.log(showMove);
	coolTimeCalc();
}// checkBaggage END.



function createBagOptionsOnce(){
	coolTimeCalc();
 	if(userTurn == false){
 		console.log("현재 당신의 턴이 아닙니다!"
 				+"\n내 쿨탐= "+coolTime01+ " : 상대방쿨탐 = "+ coolTime02 );
 		return;
 	}
 	$("#attackOptions_jb, #bagOptions_jb,#pokeBookOptions_jb,#runAway_jb").css("display","none"); 
 	
	var divMint = document.createElement("div");  // createElement로 동적 div만들기. -민트먹기
	var divPkBall = document.createElement("div"); // createElement로 동적 div만들기. -포켓볼던지기
	var divMeditation = document.createElement("div"); // createElement로 동적 div만들기. -명상하기
	if( ($("#bagMint_jb").html() == null) ){
		divMint.innerHTML =" 민트먹기 ";
		divMint.setAttribute("id","bagMint_jb");
		document.body.insertBefore(divMint, document.getElementById("pokeBookOptions_jb") );	
	 	divPkBall.innerHTML =" 포켓볼 던지기 ";
		divPkBall.setAttribute("id","throwBall_jb");
		document.body.insertBefore(divPkBall, document.getElementById("pokeBookOptions_jb") );	
		divMeditation.innerHTML =" 명상하기 ";
		divMeditation.setAttribute("id","meditation_jb");
		document.body.insertBefore(divMeditation, document.getElementById("pokeBookOptions_jb") );	
		document.body.insertBefore(divGoBackToMenu, document.getElementById("pokeBookOptions_jb") );	
	}  
	

	divMint.onclick = function(){ checkBaggage("mint"); }
	divPkBall.onclick = function(){ checkBaggage("catchWild"); }
	divMeditation.onclick = function(){ checkBaggage("meditation"); }
	divGoBackToMenu.onclick = function(){ goBackToMenu(); }  //  divGoBackToMenu    , #goBackToMenu_jb  
	
	$("#bagMint_jb, #throwBall_jb, #meditation_jb, #goBackToMenu_jb").css({
		"display":"table-cell",
		"background":"lightblue",
		"width":"150px", 
		"height": "50px", 
		"text-align":"center", 
		"vertical-align": "middle",
	});
	
}


function escapeFromEnemy(){
	
}


function tagMyMon(obj){	
	/* console.log( parseInt(this.getAttribute("id").substr(this.getAttribute("id").length -2)) );
	console.log( window.pokemonNo02  ); */
	if(confirm("태그하시겟습니까?")){
		var chanceToChange = 0.3;  //######### 지금만설정
		console.log("몬스터에게도 거절의사가 잇다면? "+chanceToChange);
		if(chanceToChange < 0.4){ // 40%확률로 야생포켓몬과 만남. 
			turnMoves(parseInt(obj.getAttribute("id").substr(obj.getAttribute("id").length -2)), window.pokemonNo02);
			coolTime01 = 0;           //########### 지금만 0 원래는 2. 태그하고 공격할수잇는가? 없는가?
			coolTime02 = 0;
		}
		goBackToMenu();
	}
	
}


function checkPokemonStatus(idNum){
	// pokemonNo name monLevel monExperience monPropNo healthPoint attackStr shield status
	//monProps = ["물","바람","풀","불","흙"]  "물"<"바람"<"풀"<"불"<"흙"<"물"
	console.log("=================");
	console.log("pokemonNo: "+ pokemons[idNum].pokemonNo 
			+ " pokemon prop: " + monProps[pokemons[idNum].monPropNo]);
	console.log("name: "+ pokemons[idNum].name);
	console.log("monLevel: "+ pokemons[idNum].monLevel);
	console.log("monExperience: "+ pokemons[idNum].monExperience);
	console.log("healthPoint: "+ pokemons[idNum].healthPoint);
	console.log("attackStr: "+ pokemons[idNum].attackStr);
	console.log("shield: "+ pokemons[idNum].shield);
	console.log("status: "+ pokemons[idNum].status);
	console.log("=================");

	console.log("===== 가방검사 ======  // 나중에 분리할예정.");
	console.log("bagConsumerables.mintNo: " + bagConsumerables.mintNo);
	console.log("bagConsumerables.pokeBallNo: " + bagConsumerables.pokeBallNo);
	console.log("bagConsumerables.golds: " + bagConsumerables.golds);
	console.log("====== END ======");
	
}

//jb yn gy jw jh
function createPokemonStatusOnce(){
	 coolTimeCalc();
 	if(userTurn == false){
 		console.log("현재 당신의 턴이 아닙니다!"
 				+"\n내 쿨탐= "+coolTime01+ " : 상대방쿨탐 = "+ coolTime02 );
 		return;
 	}
 	$("#attackOptions_jb, #bagOptions_jb,#pokeBookOptions_jb,#runAway_jb").css("display","none"); 
 	
	var  pokeIniList = [];  //divNames 겸 idName
	var pokeIniListName = [];  // 메뉴에 보일 Names

	for(name in pokemons){
 		pokeIniList.push("div"+ pokemons[name].name);
 		pokeIniListName.push(pokemons[name].name + "몬!");
 	}
	pokeIniListName[pokeIniListName.length] = "뒤로뒤로!";
 //	console.log(pokeIniListName);
 
 	if($("#pokeId00").html() == null ){
		for(var inx = 0; inx <pokeIniList.length; inx++){  // inx = divJB, divYN....
			pokeIniList[inx] = document.createElement("div");
			pokeIniList[inx].innerHTML = pokeIniListName[inx];
			pokeIniList[inx].setAttribute("id","pokeId0"+pokemons[inx].pokemonNo);
			document.body.insertBefore(pokeIniList[inx], document.getElementById("runAway_jb") );
	
		}
		document.body.insertBefore(divGoBackToMenu, document.getElementById("runAway_jb") );	
	}

 	updatePokemons();
 	for(var ind = 0; ind <pokeIniList.length; ind++){  // inx = divJB, divYN....
		$("#pokeId0"+pokemons[ind].pokemonNo+"").unbind().click(function(ind){
			checkPokemonStatus(parseInt(this.getAttribute("id").substr(this.getAttribute("id").length -2))); 
			tagMyMon(this);

 		});
 		$("#pokeId0"+pokemons[ind].pokemonNo+"").css({
 			"display":"table-cell",
 			"background":"limegreen",
 			"width":"100px", 
 			"height": "50px", 
 			"text-align":"center", 
 			"vertical-align": "middle",
 		});
 	} // createPokemonStatusOnce - forloop END
 	
 	$("#goBackToMenu_jb").unbind().click(function(){ 
		goBackToMenu(); 
		propBonusAtt(window.monPropNo01, window.monPropNo02);
	}); 
 	$(" #goBackToMenu_jb").css({
			"display":"table-cell",
			"background":"limegreen",
			"width":"100px", 
			"height": "50px", 
			"text-align":"center", 
			"vertical-align": "middle",
	});
	
}  //createPokemonStatusOnce END


////////////////////
//////////////////// main battle options.
////////////////////
var userTurn = true;
var coolTime01 = 0; //유저쿨타임.
var coolTime02 = 0;	

function turnMoves( myMon, enemyMon  ){   // ###야생 포켓몬 만난후 메인콘솔창.
	
// 이것들은 누적됨!! 체력, 레벨, 상태이상  쭉쭉!
// pokemonNo name monLevel monExperience monPropNo healthPoint attackStr shield status
//monProps = ["물","바람","풀","불","흙"]  "물"<"바람"<"풀"<"불"<"흙"<"물"
	this.pokemonNo01 = pokemons[myMon].pokemonNo;  // 몬스터번호 선언
	this.pokemonNo02 = pokemons[enemyMon].pokemonNo;  
	this.name01 = pokemons[myMon].name;  // 이름 선언
	this.name02 = pokemons[enemyMon].name;
	this.monLevel01 = pokemons[myMon].monLevel;  // 몬스터레벨 선언
	this.monLevel02 = pokemons[enemyMon].monLevel;  
	this.monExperience01 = pokemons[myMon].monExperience;  // 몬스터경험치 선언
	this.monPropNo01 = pokemons[myMon].monPropNo  //몬스터 속성선언.
	this.monPropNo02 = pokemons[enemyMon].monPropNo
	this.healthPoint01 = pokemons[myMon].healthPoint; // 체력 선언
	this.healthPoint02 = pokemons[enemyMon].healthPoint;
	this.initMyHealthPoint = pokemons[myMon].healthPoint;  // 내 초기체력할당. ->렙업할때 refresh...
	this.initEnemyHealthPoint = pokemons[enemyMon].healthPoint;  // 상대초기체력할당. ->몬볼로 잡을떄 체력%구하려고..
	this.attackStr01 = pokemons[myMon].attackStr; // 공격력 선언
	this.attackStr02 = pokemons[enemyMon].attackStr;
	this.shield01 = pokemons[myMon].shield;  // 방어력선언
	this.shield02 = pokemons[enemyMon].shield;
	this.status01 = pokemons[myMon].status;  // 몬스터상태 선언
	this.status02 = pokemons[enemyMon].status;  
	
	
	userTurn = coolTime01 > coolTime02 ? false : true;
	
	console.log("나: "+ pokemons[myMon].name + "상대: "+pokemons[enemyMon].name );
	console.log("내 포켓몬 체력: "+ pokemons[myMon].healthPoint + "  상대포켓몬 체력: "+pokemons[enemyMon].healthPoint );
	propBonusOnce = true;
	propBonusAtt(this.monPropNo01, this.monPropNo02);
	$("#attackOptions_jb").unbind().click(function(){ 
		createAttOptionsOnce();
	});

	$("#bagOptions_jb").unbind().click(function(){ 
		createBagOptionsOnce();  //createElement 한번만 부르기위한...
	});
	
	$("#pokeBookOptions_jb").unbind().click(function(){ 
		createPokemonStatusOnce();  //createElement 한번만 부르기위한...
	});
	
	$("#runAway_jb").unbind().click(function(){
		
		////#### 도망치기전 확인 div만들엇으면 좋겟다..
		goBackToMenu();
		console.log(" 성공적으로 도망쳤다! ");
		
		/////////////////////////////////////////###### 여기에서 전투 전화면으로 빠져나가기 연동.
		
		console.log(" 새로운 몬스터를 만났다!!!======== ");
		
		encountChance = 0.3;  //######### 지금만설정
		console.log(encountChance);
		if(encountChance < 0.4){ // 40%확률로 야생포켓몬과 만남. 
			var randPokemon = parseInt(Math.random()*4 +1);
			turnMoves(0,randPokemon);   // 일단 0번포켓몬 주인공, 상대는 랜덤으로..### 전투모드 돌입!!!
			coolTime01 =0;
			coolTime02 =0;
		}

	});
	
} //turnMoves END
 

 
 
 
////////////////////////////
////////////////////////////playing game.
////////////////////////////

window.onload = function(){

	var encountChance = Math.random();
	encountChance = 0.3;  //######### 지금만설정
	console.log(encountChance);
	if(encountChance < 0.4){ // 40%확률로 야생포켓몬과 만남. 
		var randPokemon = parseInt(Math.random()*4 +1);
		turnMoves(0,randPokemon);   // 일단 0번포켓몬 주인공, 상대는 랜덤으로..### 전투모드 돌입!!!
	}

		
}







window.onload = function(){
	var encountChance = Math.random();
	encountChance = 0.3;  //######### 지금만설정
	console.log(encountChance);
	if(encountChance < 0.4){ // 40%확률로 야생포켓몬과 만남. 
		var randPokemon = parseInt(Math.random()*4 +1);
		turnMoves(0,randPokemon);   // 일단 0번포켓몬 주인공, 상대는 랜덤으로..### 전투모드 돌입!!!
	}
		
}

















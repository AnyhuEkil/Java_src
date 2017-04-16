$(function(){

});

document.addEventListener("keydown", keyDownHandler);

// 기본 키핸들러(추후 중복시 변경해야할 필요 있을 수 있음.)
// z=90, x=88, c=67 space=32, a=65
function keyDownHandler(e) {
    if(e.keyCode == 39) {
//        rightPressed = true;
    }
    else if(e.keyCode == 37) {
//        leftPressed = true;
    }
    if(e.keyCode == 40) {
//        downPressed = true;
        keyHanddown();
    }
    else if(e.keyCode == 38) {
//        upPressed = true;
        keyHandup();
    }
    if (e.keyCode == 37){
//    	zkeyPressed = true;
    	keyHandzkey();
    }
}
// 위 내용 좀 더 이해해야됨. 왜 true값을 다시 off하지 않는가?
var yLocation;
var yBclCount = 0;
function testEvent(){
//	$(".whyBottomCommand").css({display:"none"});  //맵팀
	$(".whyBottomCommand").css({display:"block"});
	yLocation = ".whyBcList"; //해당 클래스 이름읽는 방법있음?
	yBclCount = 1; //nth-child가 1번부터 이므로 1을씀
	yLocationNth = yLocation+":nth-child("+yBclCount+")";
	alert("!");
	$(yLocationNth).css({background:"purple",color:"black"});
	alert("!!");
}
/*
function a(){
	yLocationNth = yLocation+":nth-child("+yBclCount+")";
	console.log(yLocationNth);
	console.log(yLocation+":nth-child("+yBclCount+")");
	alert("?");
	$('.whyBcList:nth-child(1)').css({background:"purple",color:"black"});	
	alert("??");
}
*/

/* 객체생성 실패.ㅋㅋㅋ
function yBottomCommand(num){
	if (num==0){
		$(".whyBcList").css({display:"none"});
		$(".whyBcFight").css({display:"block"});
		whyBclCount = 0;
	}else if(num==1){
		$(".whyBcList").css({display:"none"});
		$(".whyBcFight").css({display:"block"});
	}else if(num==2){
	$(".whyBcList").css({display:"none"});
	$(".whyBcFight").css({display:"block"});
	}else if(num==3){
		$(".whyBcList").css({display:"none"});
		$(".whyBcList").append("도망칩니다!");
	}
}
*/
function yBcFight(){
	$(".whyBcList").css({display:"none"});
	$(".whyBcFight").css({display:"block"});
	yBclCount = 0;
}
function yBcAcomon(){
	$(".whyBcList").css({display:"none"});
	$(".whyBcAcomon").css({display:"block"});
	yBclCount = 0;
}
function yBcItem(){
	$(".whyBcList").css({display:"none"});
	$(".whyBcItem").css({display:"block"});
	yBclCount = 0;
}
function yBcRun(){
	$(".whyBcList").css({display:"none"});
	$(".whyBcRun").css({display:"block"});
	yBclCount = 0;
}



/*
rightPressed
leftPressed
downPressed
upPressed
zkeyPressed
*/


var yLocationNth;

function keyHandup(){
	// 메뉴창 이동 up이동
	if (yBclCount > 1){
		yLocationNth = yLocation+":nth-child("+yBclCount+")";
		$(yLocationNth).css({background:"gold",color:"white"});	//키누르기 전 위치
		yBclCount -= 1;
		yLocationNth = yLocation+":nth-child("+yBclCount+")";		
		$(yLocationNth).css({background:"purple",color:"black"});//키누른 후 위치
		console.log(yLocationNth);
	}
}
function keyHanddown(){
	if (yBclCount < $(yLocation).length){
		yLocationNth = yLocation+":nth-child("+yBclCount+")";
		$(yLocationNth).css({background:"gold",color:"white"});
		yBclCount += 1;
		yLocationNth = yLocation+":nth-child("+yBclCount+")";
		$(yLocationNth).css({background:"purple",color:"black"});
		console.log(yLocationNth);
	}
}

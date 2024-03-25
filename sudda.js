const HwatooNumberEnum = {
	num1 : 1,
	num2 : 2,
	num3 : 3,
	num4 : 4,
	num5 : 5,
	num6 : 6,
	num7 : 7,
	num8 : 8,
	num9 : 9,
	num10 : 10,
	num0 : 0,
}

const HawtooTypeEnum = {
	HwatooType1 : "광",
	HwatooType2 : "끗",
	HwatooType3 : "띠",
}

const HwatooJokboEnum = {
	JokboType1 : "광땡",
	JokboType2 : "땡",
	JokboType3 : "알리",
	JokboType4 : "독사",
	JokboType5 : "구삥",
	JokboType6 : "장삥",
	JokboType7 : "장사",
	JokboType8 : "세륙",
	JokboType9 : "멍텅구리",
	JokboType10 : "구사",
	JokboType11 : "암행어사",
	JokboType12 : "땡잡이",
	JokboType13 : "끗",
	JokboType14 : "갑오",
	JokboType15 : "망통",
}

const displayStringEnum  = {
	displayStr1 : "<br>",
	displayStr2 : "승자 : ",
	displayStr3 : "승)",
	displayStr4 : "님이 받은 패 :",
	displayStr5 : ", ",
	displayStr6 : "  (",
	displayStr7 : ")",
	displayStr8 : "나가리",
	displayStr9 : "승리",
	displayStr10 : "무승부",
}

// 유저 : 이름/ 패 두장(배열) / 족보이름/ 승리 횟수
function User(name) {
	this.name = name;
	this.paeList = [];
	this.jokbo = new Jokbo();
	this.winCount = 0;
}

// 화투 : 개월 수/ 화투 타입(광, 끗, 띠) / 몇 번째 카드
function Hwatoo(num, type, index) {
	this.num = num;
	this.type = type;
	this.index = index;
}

// 화투 패 뭉치 : 화투들을 담을 리스트, 함수 구현
const hwatooList = {
	list: new Array(),

	// 화투 패 뭉치 초기화
	init : function () {
		this.list.length = 0;
	}, 

	// 화투 삽입
	insert : function(num, type, index) {
		let hwatoo = new Hwatoo(num, type, index);
		this.list.push(hwatoo);
	},

	// 화투 정렬
	sortList : function() {
		this.list.sort((a, b) => {
			if (a.index < b.index) {
				return -1;
			} else if (a.index > b.index) {
				return 1;
			} else {
				return 0;
			}
		})
	}
}

function Jokbo() {
	this.name = "";
	this.priority = 0;
}

// ===================================  변수부 ===================================

/**
* 화투 객체의 인덱스에 넣을 랜덤 인덱스 생성, 이미 있는 인덱스는 제외하고 생성
* @param {object} hwatooList 오브젝트
* @returns {number} randomIndex 인덱스
*/ 

let setRandomIndex = function(hwatooList) {
	for(;;){
		const randomIndex =  Math.floor(Math.random() * 20);
		if(hwatooList.list.find(x => x.index === randomIndex) === undefined) {
			return randomIndex;
		}
	}
}

/**
* 새로운 게임을 하기 위해 화투 리스트를 한 번 초기화하고,
* hwatoo 오브젝트에 num, type, index를 부여한 후,
* hwatooList에 push
* @param {object} hwatooList 오브젝트
*/ 

let initializeHwatooList = function(hwatooList) {
	hwatooList.init();

	hwatooList.insert(HwatooNumberEnum.num1, HawtooTypeEnum.HwatooType1, setRandomIndex(hwatooList));
	hwatooList.insert(HwatooNumberEnum.num1, HawtooTypeEnum.HwatooType3, setRandomIndex(hwatooList));
	
	hwatooList.insert(HwatooNumberEnum.num2, HawtooTypeEnum.HwatooType2, setRandomIndex(hwatooList));
	hwatooList.insert(HwatooNumberEnum.num2, HawtooTypeEnum.HwatooType1, setRandomIndex(hwatooList));

	hwatooList.insert(HwatooNumberEnum.num3, HawtooTypeEnum.HwatooType1, setRandomIndex(hwatooList));
	hwatooList.insert(HwatooNumberEnum.num3, HawtooTypeEnum.HwatooType3, setRandomIndex(hwatooList));

	hwatooList.insert(HwatooNumberEnum.num4, HawtooTypeEnum.HwatooType2, setRandomIndex(hwatooList));
	hwatooList.insert(HwatooNumberEnum.num4, HawtooTypeEnum.HwatooType3, setRandomIndex(hwatooList));

	hwatooList.insert(HwatooNumberEnum.num5, HawtooTypeEnum.HwatooType2, setRandomIndex(hwatooList));
	hwatooList.insert(HwatooNumberEnum.num5, HawtooTypeEnum.HwatooType3, setRandomIndex(hwatooList));

	hwatooList.insert(HwatooNumberEnum.num6, HawtooTypeEnum.HwatooType2, setRandomIndex(hwatooList));
	hwatooList.insert(HwatooNumberEnum.num6, HawtooTypeEnum.HwatooType3, setRandomIndex(hwatooList));

	hwatooList.insert(HwatooNumberEnum.num7, HawtooTypeEnum.HwatooType2, setRandomIndex(hwatooList));
	hwatooList.insert(HwatooNumberEnum.num7, HawtooTypeEnum.HwatooType3, setRandomIndex(hwatooList));

	hwatooList.insert(HwatooNumberEnum.num8, HawtooTypeEnum.HwatooType1, setRandomIndex(hwatooList));
	hwatooList.insert(HwatooNumberEnum.num8, HawtooTypeEnum.HwatooType3, setRandomIndex(hwatooList));

	hwatooList.insert(HwatooNumberEnum.num9, HawtooTypeEnum.HwatooType2, setRandomIndex(hwatooList));
	hwatooList.insert(HwatooNumberEnum.num9, HawtooTypeEnum.HwatooType3, setRandomIndex(hwatooList));

	hwatooList.insert(HwatooNumberEnum.num10, HawtooTypeEnum.HwatooType2, setRandomIndex(hwatooList));
	hwatooList.insert(HwatooNumberEnum.num10, HawtooTypeEnum.HwatooType3, setRandomIndex(hwatooList));

}

let resetPaeList = function(user) {
	user.paeList.pop();
	user.paeList.pop();
}

/**
* 유저에게 화투를 나눠주는 함수
* @param {array} 화투패 리스트
* @returns {object} 화투 오브젝트
*/ 
let getHandHwatoo = function(hwatooList) {
	const returnHwatoo = hwatooList[hwatooList.length - 1];

	hwatooList.pop();

	return returnHwatoo;
}

// 족보 결정
// 받은 두 장의 화투패를 보고 저장해둔 족보를 대입함

/**
* 광땡인지 아닌지 확인하는 함수
* @param {array} 유저의 패 리스트
* @returns {String} 족보 이름
*/
let checkGwangDdaeng = function(paeList) {
	// 38광땡
	if ((paeList[0].num === HwatooNumberEnum.num3 && paeList[0].type === HawtooTypeEnum.HwatooType1) && 
	(paeList[1].num === HwatooNumberEnum.num8 && paeList[1].type === HawtooTypeEnum.HwatooType1)) {
		return String(HwatooNumberEnum.num3) + String(HwatooNumberEnum.num8) + HwatooJokboEnum.JokboType1;
	} // 13광땡
	else if ((paeList[0].num === HwatooNumberEnum.num1 && paeList[0].type === HawtooTypeEnum.HwatooType1) && 
	(paeList[1].num === HwatooNumberEnum.num3 && paeList[1].type === HawtooTypeEnum.HwatooType1)) {
		return String(HwatooNumberEnum.num1) + String(HwatooNumberEnum.num3) + HwatooJokboEnum.JokboType1;
	} // 18광땡
	else if ((paeList[0].num === HwatooNumberEnum.num1 && paeList[0].type === HawtooTypeEnum.HwatooType1) && 
	(paeList[1].num === HwatooNumberEnum.num8 && paeList[1].type === HawtooTypeEnum.HwatooType1)) {
		return String(HwatooNumberEnum.num1) + String(HwatooNumberEnum.num8) + HwatooJokboEnum.JokboType1;
	}
}

/**
* 땡인지 아닌지 확인하는 함수
* @param {array} 유저의 패 리스트
* @returns {String} 족보 이름
*/
let checkDdaeng = function(paeList) {
	if (paeList[0].num === paeList[1].num) {
		if (paeList[0].num === 10) {
			return "장" + HwatooJokboEnum.JokboType2;
		} else {
			return paeList[0].num + HwatooJokboEnum.JokboType2;
		}
	}
}

/**
* 중간족보인지 아닌지 확인하는 함수
* @param {array} 유저의 패 리스트
* @returns {String} 족보 이름
*/
let checkMiddleJokbo = function(paeList) {
	// 알리 (1, 2)
	if (paeList[0].num === HwatooNumberEnum.num1 && 
	paeList[1].num === HwatooNumberEnum.num2) {
		return HwatooJokboEnum.JokboType3;
	} // 독사 (1, 4)
	else if (paeList[0].num === HwatooNumberEnum.num1 && 
	paeList[1].num === HwatooNumberEnum.num4) {
		return HwatooJokboEnum.JokboType4;
	} // 구삥 (1, 9)
	else if (paeList[0].num === HwatooNumberEnum.num1 && 
	paeList[1].num === HwatooNumberEnum.num9) {
		return HwatooJokboEnum.JokboType5;
	} // 장삥 (1, 10)
	else if (paeList[0].num === HwatooNumberEnum.num1 && 
	paeList[1].num === HwatooNumberEnum.num10) {
		return HwatooJokboEnum.JokboType6;
	} // 장사 (4, 9)
	else if (paeList[0].num === HwatooNumberEnum.num4 && 
	paeList[1].num === HwatooNumberEnum.num9) {
		return HwatooJokboEnum.JokboType7;
	} // 세륙 (4, 6)
	else if (paeList[0].num === HwatooNumberEnum.num4 && 
	paeList[1].num === HwatooNumberEnum.num6) {
		return HwatooJokboEnum.JokboType8;
	}
}

/**
* 특수족보인지 아닌지 확인하는 함수
* @param {array} 유저의 패 리스트
* @returns {String} 족보 이름
*/
let checkExtraJokbo = function(paeList) {
	// 멍텅구리 (4끗, 9끗)
	if ((paeList[0].num === HwatooNumberEnum.num4 && paeList[0].type === HawtooTypeEnum.HwatooType2) &&
	(paeList[1].num === HwatooNumberEnum.num9 && paeList[1].type === HawtooTypeEnum.HwatooType2)) {
		return HwatooJokboEnum.JokboType9;
	} // 구사 (4, 9, 둘 다 끗이 아닐 때만)
	else if (paeList[0].num === HwatooNumberEnum.num4 &&
	paeList[1].num === HwatooNumberEnum.num9) {
		return HwatooJokboEnum.JokboType10;
	} // 암행어사 (4끗, 7끗)
	else if ((paeList[0].num === HwatooNumberEnum.num4 && paeList[0].type === HawtooTypeEnum.HwatooType2) &&
	(paeList[1].num === HwatooNumberEnum.num7 && paeList[1].type === HawtooTypeEnum.HwatooType2)) {
		return HwatooJokboEnum.JokboType11;
	}  // 땡잡이 (3광, 7끗)
	else if ((paeList[0].num === HwatooNumberEnum.num3 && paeList[0].type === HawtooTypeEnum.HwatooType1) &&
	(paeList[1].num === HwatooNumberEnum.num7 && paeList[1].type === HawtooTypeEnum.HwatooType2)) {
		return HwatooJokboEnum.JokboType12;
	}
}

/**
* 몇끗인지 확인하는 함수
* @param {array} 유저의 패 리스트
* @returns {String} 족보 이름
*/
let checkAddNum = function(paeList) {
	const addNum = paeList[0].num + paeList[1].num;
	const aN = addNum > 9 ? addNum - 10 : addNum;

	if (aN === HwatooNumberEnum.num9) {
		return HwatooJokboEnum.JokboType14;
	} else if (aN === HwatooNumberEnum.num0) {
		return HwatooJokboEnum.JokboType15;
	} else {
		return aN + HwatooJokboEnum.JokboType13;
	}
}

/**
* 유저의 패를 보고 족보를 반환하는 함수
* @param {object} 유저 오브젝트
* @returns {String} 족보 이름
*/
let insertJokbo = function(user) {
	let tmpUser = Object.assign({}, user);

	tmpUser.paeList.sort((a, b) => {
		if (a.num < b.num) {
			return -1;
		} else if (a.num > b.num) {
			return 1;
		} else {
			if (a.type < b.type) {
				return -1;
			} else if (a.type > b.type) {
				return 1;
			} else {
				return 0;
			}
		}
	})

	let jokbo = "";
	if (checkGwangDdaeng(tmpUser.paeList) !== undefined) {
		jokbo += checkGwangDdaeng(tmpUser.paeList);
	}
	else if (checkDdaeng(tmpUser.paeList) !== undefined) {
		jokbo += checkDdaeng(tmpUser.paeList);
	}
	else if (checkMiddleJokbo(tmpUser.paeList) !== undefined) {
		jokbo += checkMiddleJokbo(tmpUser.paeList);
	}
	else if (checkExtraJokbo(tmpUser.paeList) !== undefined) {
		jokbo += checkExtraJokbo(tmpUser.paeList);
	}
	else if (checkAddNum(tmpUser.paeList) !== undefined) {
		jokbo += checkAddNum(tmpUser.paeList);
	}
	
	return jokbo;
}

/**
* 족보를 보고 우선순위를 반환하는 함수
* @param {String} 족보 이름
* @returns {Number} 우선 순위
*/
let insertPriority = function(jokbo) {
	// 족보에 "광땡" 이라는 글자가 들어갔는 지 확인
	if (jokbo.includes(HwatooJokboEnum.JokboType1)) {
		// 38 광땡이면
		if (jokbo.includes("3")) {
			return 28;
		} // 13 or 18 광땡이면
		else if (jokbo.includes("1")) {
			return 27;
		}
	} // 족보에 "땡" 이라는 글자가 들어갔는 지 확인
	else if (jokbo.includes(HwatooJokboEnum.JokboType2)) {
		if (jokbo.includes("장")) {
			return 26;
		} else {
			return 16 + Number(jokbo[0]);
		}
	} // 알리 확인
	else if (jokbo.includes(HwatooJokboEnum.JokboType3)) {
		return 16;
	} // 독사 확인 
	else if (jokbo.includes(HwatooJokboEnum.JokboType4)) {
		return 15;
	} // 구삥 확인
	else if (jokbo.includes(HwatooJokboEnum.JokboType5)) {
		return 14;
	} // 장삥 확인
	else if (jokbo.includes(HwatooJokboEnum.JokboType6)) {
		return 13;
	} // 장사 확인
	else if (jokbo.includes(HwatooJokboEnum.JokboType7)) {
		return 12;
	} // 세륙 확인
	else if (jokbo.includes(HwatooJokboEnum.JokboType8)) {
		return 11;
	} // 멍텅구리 확인
	else if (jokbo.includes(HwatooJokboEnum.JokboType9)) {
		return 3;
	} // 구사 확인
	else if (jokbo.includes(HwatooJokboEnum.JokboType10)) {
		return 3;
	} // 암행어사 확인
	else if (jokbo.includes(HwatooJokboEnum.JokboType11)) {
		return 1;
	} // 땡잡이 확인
	else if (jokbo.includes(HwatooJokboEnum.JokboType12)) {
		return 0;
	}
	else {
		// 갑오 확인
		if (jokbo.includes(HwatooJokboEnum.JokboType14)) {
			return 9;
		} // 망통 확인
		else if (jokbo.includes(HwatooJokboEnum.JokboType15)) {
			return 0;
		} // 그 외 끗 확인
		else {
			return Number(jokbo[0]);
		}
	}

}

/**
* 나가리 여부를 판단하고 결과를 반환 함수
* @param {object, object} 유저 정보
* @returns {boolean} 나가리 발생 여부
*/
let nagari = function(user1, user2) {
// 멍텅구리가 있는데 광땡이 없을 시
	if ((user1.jokbo.name === HwatooJokboEnum.JokboType9 && user2.jokbo.priority < 27) ||
	(user2.jokbo.name === HwatooJokboEnum.JokboType9 && user1.jokbo.priority < 27)) {
		return true;
	} // 구사가 있는데 땡 이상이 없을 시
	else if ((user1.jokbo.name === HwatooJokboEnum.JokboType10 && user2.jokbo.priority < 17) ||
	(user2.jokbo.name === HwatooJokboEnum.JokboType10 && user1.jokbo.priority < 17)) {
		return true;
	}
}

/**
* 특수상황 여부를 판단하고 결과를 반환 함수
* @param {object, object} 유저 정보
* @returns {Number} 승자 번호 반환 / 1 : user1, 2 : user2
*/
let extraSituation = function(user1, user2) {
	// 암행어사 : 13, 18광땡을 잡음
	if ((user1.jokbo.name === HwatooJokboEnum.JokboType11 && user2.jokbo.priority === 27) ||
	(user2.jokbo.name === HwatooJokboEnum.JokboType11 && user1.jokbo.priority === 27)) {
		// user1이 암행어사일 경우
		if (user1.jokbo.name === HwatooJokboEnum.JokboType11 ) {
			return 1;
		} // user2가 암행어사일 경우
		else {
			return 2;
		}
	} // 땡잡이 : 장땡 미만의 땡을 잡음
	else if ((user1.jokbo.name === HwatooJokboEnum.Jokbotype12 && (user2.jokbo.priority < 26 && user2.jokbo.priority > 16)) ||
	(user2.jokbo.name === HwatooJokboEnum.Jokbotype12 && (user1.jokbo.priority < 26 && user1.jokbo.priority > 16))) {
		// user1이 땡잡이일 경우
		if (user1.jokbo.name === HwatooJokboEnum.Jokbotype12 ) {
			return 1;
		} // user2가 땡잡이일 경우
		else {
			return 2;
		}
	}
}

/**
* 나가리, 특수상황이 없어 게임을 진행하는 함수
* @param {object, object} 유저 정보
* @returns {Nubmer} 무승부 : 0 / 유저1 승리 : 1 / 유저2 승리 : 2 
*/
let getGame = function (user1, user2) {
	if (user1.jokbo.priority > user2.jokbo.priority) {
		return 1;
	}
	else if (user2.jokbo.priority > user1.jokbo.priority) {
		return 2;
	} else {
		return 0;
	}
}

/**
* 유저의 승점을 1점 올려 주는 함수
* @param {object} 유저 정보
*/
let getWinPoint = function(user) {
	user.winCount += 1;
}

/**
* 게임 함수
* @param {object, object, array} 유저 정보, 화투패 리스트
* @returns {Nubmer} 무승부 : 0 / 유저1 승리 : 1 / 유저2 승리 : 2 / 나가리 : 3
*/
let play = function(user1, user2, hwatooList) {
	// =========  화투 패 초기화  =========
	initializeHwatooList(hwatooList);
	hwatooList.sortList();

	// =========  두 유저가 화투를 2장 씩 받음 =========
	user1.paeList.push(getHandHwatoo(hwatooList.list));
	user1.paeList.push(getHandHwatoo(hwatooList.list));
	
	user2.paeList.push(getHandHwatoo(hwatooList.list));
	user2.paeList.push(getHandHwatoo(hwatooList.list));
	
	// ========= 화투 패를 보고 족보와 우선 순위 부여  =========
	user1.jokbo.name = insertJokbo(user1);
	user1.jokbo.priority = insertPriority(user1.jokbo.name);
	
	user2.jokbo.name = insertJokbo(user2);
	user2.jokbo.priority = insertPriority(user2.jokbo.name);
	
	printPaeList(user1);
	printPaeList(user2);

	console.log(Object.values(user1.jokbo));
	console.log(Object.values(user2.jokbo));

	// =========  나가리 여부 확인  =========
	if(nagari(user1, user2)) {
		return 3;
	}
	
	// =========  특수 상황 발생 여부 확인  =========
	if (extraSituation(user1, user2) !== undefined) {
		return extraSituation(user1, user2);
	}

	// ========= 둘 다 없으면 게임 진행  =========
	return getGame(user1, user2);

}

/**
* 플레이어가 받은 패를 출력하는 함수
* @param {object} 유저 오브젝트
*/
let printPaeList = function(user) {
	console.log(user.name + displayStringEnum.displayStr4 + user.paeList[0]["num"] + user.paeList[0]["type"] + 
	displayStringEnum.displayStr5 + user.paeList[1]["num"] + user.paeList[1]["type"] + displayStringEnum.displayStr6
	+ user.jokbo.name + displayStringEnum.displayStr7);
}

/**
* 나가리를 출력하는 함수
*/
let printNaragi = function() {
	console.log(displayStringEnum.displayStr8);
}

/**
* 게임 한 판 승리 유저와 누적 승수를 출력하는 함수
* @param {object} 유저 오브젝트
*/
let printWinnerWinCount = function(user) {
	console.log(displayStringEnum.displayStr2 + user.name + displayStringEnum.displayStr6 + user.winCount + displayStringEnum.displayStr3);
}

/**
* 게임 결과 무승부를 출력하는 함수
*/
let printDraw = function() {
	console.log(displayStringEnum.displayStr10);
}

/**
* 총 게임 승자를 출력하는 함수
* @param {object} 유저 오브젝트
*/
let printWinner = function(user) {
	console.log(user.name + displayStringEnum.displayStr9);
}

// ===================================  함수부 ===================================

let goni = new User("고니");
let agwi = new User("아귀");

let i = 1;
while(true) {
	console.log(`${i} 번째 판`);
	resetPaeList(goni);
	resetPaeList(agwi);
	
	const winPlayer = play(goni,agwi,hwatooList);
	
	if (winPlayer === 1) {
		getWinPoint(goni);
		printWinnerWinCount(goni);
	} else if (winPlayer === 2) {
		getWinPoint(agwi);
		printWinnerWinCount(agwi);
	} else if (winPlayer === 3) {
		printNaragi();
	} else {
		printDraw();
	}

	if (goni.winCount === 10) {
		printWinner(goni);
		break;
	} else if (agwi.winCount === 10) {
		printWinner(agwi);
		break;
	}
	i++;
}
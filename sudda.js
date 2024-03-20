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
		this.jokbo = '';
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

	function Jokbo(name, priority) {
		this.name = name;
		this.priority = priority;
	}

	// ===================================  변수부 ===================================


	let setRandomIndex = function(hwatooList) {
		const randomIndex =  Math.floor(Math.random() * 20);
		if(hwatooList.find((x) => x === randomIndex) === undefined) {
			return randomIndex;
		}
	}

	let initializeHwatooList = function(hwatooList) {
		hwatooList.init;

		hwatooList.insert(HwatooNumberEnum.num1, HawtooTypeEnum.HwatooType1, setRandomIndex(hwatooList.list));
		hwatooList.insert(HwatooNumberEnum.num1, HawtooTypeEnum.HwatooType3, setRandomIndex(hwatooList.list));
		
		hwatooList.insert(HwatooNumberEnum.num2, HawtooTypeEnum.HwatooType2, setRandomIndex(hwatooList.list));
		hwatooList.insert(HwatooNumberEnum.num2, HawtooTypeEnum.HwatooType1, setRandomIndex(hwatooList.list));

		hwatooList.insert(HwatooNumberEnum.num3, HawtooTypeEnum.HwatooType1, setRandomIndex(hwatooList.list));
		hwatooList.insert(HwatooNumberEnum.num3, HawtooTypeEnum.HwatooType3, setRandomIndex(hwatooList.list));

		hwatooList.insert(HwatooNumberEnum.num4, HawtooTypeEnum.HwatooType2, setRandomIndex(hwatooList.list));
		hwatooList.insert(HwatooNumberEnum.num4, HawtooTypeEnum.HwatooType3, setRandomIndex(hwatooList.list));

		hwatooList.insert(HwatooNumberEnum.num5, HawtooTypeEnum.HwatooType2, setRandomIndex(hwatooList.list));
		hwatooList.insert(HwatooNumberEnum.num5, HawtooTypeEnum.HwatooType3, setRandomIndex(hwatooList.list));

		hwatooList.insert(HwatooNumberEnum.num6, HawtooTypeEnum.HwatooType2, setRandomIndex(hwatooList.list));
		hwatooList.insert(HwatooNumberEnum.num6, HawtooTypeEnum.HwatooType3, setRandomIndex(hwatooList.list));

		hwatooList.insert(HwatooNumberEnum.num7, HawtooTypeEnum.HwatooType2, setRandomIndex(hwatooList.list));
		hwatooList.insert(HwatooNumberEnum.num7, HawtooTypeEnum.HwatooType3, setRandomIndex(hwatooList.list));

		hwatooList.insert(HwatooNumberEnum.num8, HawtooTypeEnum.HwatooType1, setRandomIndex(hwatooList.list));
		hwatooList.insert(HwatooNumberEnum.num8, HawtooTypeEnum.HwatooType3, setRandomIndex(hwatooList.list));

		hwatooList.insert(HwatooNumberEnum.num9, HawtooTypeEnum.HwatooType2, setRandomIndex(hwatooList.list));
		hwatooList.insert(HwatooNumberEnum.num9, HawtooTypeEnum.HwatooType3, setRandomIndex(hwatooList.list));

		hwatooList.insert(HwatooNumberEnum.num10, HawtooTypeEnum.HwatooType2, setRandomIndex(hwatooList.list));
		hwatooList.insert(HwatooNumberEnum.num10, HawtooTypeEnum.HwatooType3, setRandomIndex(hwatooList.list));

	}

	// ===================================  함수부 ===================================

	// console.log(hwatooList.list);

	initializeHwatooList(hwatooList);

	for (let i = 0; i < hwatooList.list.length; i++) {
		console.log(Object.entries(hwatooList.list[i]));
		
	}

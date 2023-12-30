var parts = document.getElementsByClassName("part");
var button = document.getElementById("result");
var previousColumnOneElement;
var previousColumnFourElement;

var columnOne = ["Поздравляю тебя с"];
var columnTwo = ["Желаю тебе"];
var columnThree = ["Пусть"];
var columnFour = ["Удачи"];

function showResult() {
	var resultTextContainer = document.getElementById("result-container").children[0]
	resultTextContainer.innerHTML = ""

	if (columnOne.length <= 1 || columnTwo.length <= 1 || columnThree.length <= 1 || columnFour.length <=1) {
		resultTextContainer.innerHTML = "В каждой колонне должен быть выбран хотя бы один элемент"
	} else {
		var resultText;
		var columnOneText = columnOne.join(" ")
		var columnTwoText = "";
		var columnTwoTexta = ""
		var columnTwoTextb = ""
		var columnThreeTexta = ""
		var columnThreeTextb = ""
		var columnThreeText = "";
		var columnFourText = columnFour.join(" ")

		if (columnTwo.length == 2) {
			columnTwoText = columnTwo.join(" ")
		} else {
		for (var i = 0; i < columnTwo.length; i++) {
			if (columnTwo[i] == columnTwo[columnTwo.length - 1]) {
				columnTwoTextb = ", и " + columnTwo[i]
				continue
			}
			if (i == 0) {
				columnTwoTexta = columnTwo[i] + " "
				continue
			}
			columnTwoText = columnTwoText + columnTwo[i].replace("!", "")
			if (columnTwo[i + 1] != columnTwo[columnTwo.length - 1]) {
				columnTwoText = columnTwoText + ", "
			}
		} }

		if (columnThree.length == 2) {
			columnThreeText = columnThree.join(" ")
		} else {
		for (var i = 0; i < columnThree.length; i++) {
			if (columnThree[i] == columnThree[columnThree.length - 1]) {
				columnThreeTextb = ", и " + columnThree[i]
				continue
			}
			if (i == 0) {
				columnThreeTexta = columnThree[i] + " "
				continue
			}
			columnThreeText = columnThreeText + columnThree[i].replace("!", "")
			if (columnThree[i + 1] != columnThree[columnThree.length - 1]) {
				columnThreeText = columnThreeText + ", "
			}
		} }

		resultText = columnOneText + " " + columnTwoTexta + columnTwoText + columnTwoTextb + " " +
		columnThreeTexta + columnThreeText + columnThreeTextb + " " + columnFourText;
		resultTextContainer.innerHTML = resultText;
	}

}

function addToResult(event) {
	var element = event.target

	if (element.tagName == "P") {
		element = element.parentNode
	}

	var text = element.children[0].innerHTML.substring(3)

	if (element.id.includes("r1")) {
		if (previousColumnOneElement != undefined) {
			previousColumnOneElement.style.backgroundColor = "";
			columnOne.pop();
		}
		columnOne.push(text);
		element.style.backgroundColor = "#861423";
		previousColumnOneElement = element;
	};

	if (element.id.includes("r2")) {
		if (columnTwo.includes(text)) {
			columnTwo.splice(columnTwo.indexOf(text), columnTwo.indexOf(text))
			element.style.backgroundColor = "";
		} else {
			columnTwo.push(text);
			element.style.backgroundColor = "#861423";
		};
	};

	if (element.id.includes("r3")) {
		if (columnThree.includes(text)) {
			columnThree.splice(columnThree.indexOf(text), columnThree.indexOf(text))
			element.style.backgroundColor = "";
		} else {
			columnThree.push(text);
			element.style.backgroundColor = "#861423";
		};
	};

	if (element.id.includes("r4")) {
		if (previousColumnFourElement != undefined) {
			previousColumnFourElement.style.backgroundColor = "";
			columnFour.pop();
		}
		columnFour.push(text);
		element.style.backgroundColor = "#861423";
		previousColumnFourElement = element;
	};

};


for (var i = 0; i < parts.length; i++) {
	var resultPart = parts[i];
	resultPart.addEventListener("click", (event) => addToResult(event))
};

result.addEventListener("click", showResult)

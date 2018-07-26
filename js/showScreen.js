let sectionAll = document.querySelectorAll("section");

let withoutFirstSection = document.querySelectorAll("section:not(#number1")

console.log(sectionAll)

// Скрываю все секции кроме первой

for(let i = 0; i < withoutFirstSection.length; i++) {
    withoutFirstSection[i].style.display = "none"
}

function skipTo_2() {
	for(let i = 0; i < sectionAll.length; i++) {
		if(sectionAll[i].classList.contains("section2")) {
			sectionAll[i].style.display = "block"
		} else {
			sectionAll[i].style.display = "none"
		}
	}
}

function skipTo_3() {
	for(let i = 0; i < sectionAll.length; i++) {
		if(sectionAll[i].classList.contains("section3")) {
			sectionAll[i].style.display = "block"
		} else {
			sectionAll[i].style.display = "none"
		}
	}
}

function skipTo_3_2() {
	for(let i = 0; i < sectionAll.length; i++) {
		if(sectionAll[i].classList.contains("section3_2")) {
			sectionAll[i].style.display = "block"
		} else {
			sectionAll[i].style.display = "none"
		}
	}
}

function skipTo_3_3() {
	for(let i = 0; i < sectionAll.length; i++) {
		if(sectionAll[i].classList.contains("section3_3")) {
			sectionAll[i].style.display = "block"
		} else {
			sectionAll[i].style.display = "none"
		}
	}
}

function skipTo_4() {
	for(let i = 0; i < sectionAll.length; i++) {
		if(sectionAll[i].classList.contains("section4")) {
			sectionAll[i].style.display = "block"
		} else {
			sectionAll[i].style.display = "none"
		}
	}
}

function skipTo_5() {
	for(let i = 0; i < sectionAll.length; i++) {
		if(sectionAll[i].classList.contains("section5")) {
			sectionAll[i].style.display = "block"
		} else {
			sectionAll[i].style.display = "none"
		}
	}
}

function skipTo_Home() {
	for(let i = 0; i < sectionAll.length; i++) {
		if(sectionAll[i].classList.contains("section1")) {
			sectionAll[i].style.display = "block"
		} else {
			sectionAll[i].style.display = "none"
		}
	}
}


function skipTo_HomeMod() {
	for(let i = 0; i < sectionAll.length; i++) {
		if(sectionAll[i].classList.contains("section1")) {
			sectionAll[i].style.display = "block"
		} else {
			sectionAll[i].style.display = "none"
		}
	}
}

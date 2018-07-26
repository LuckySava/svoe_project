const switchText = document.getElementById("switch_text"),
	input = document.getElementById("switch"),
	block1 = document.getElementById("block_1");

let arrowBlocks = document.getElementsByClassName("arrows");

for (let arrowBlock of arrowBlocks) {
	let arrowLeft = arrowBlock.querySelector(".arrows_left"),
	arrowLine = arrowBlock.querySelector(".arrows_line_middle"),
	arrowRight = arrowBlock.querySelector('.arrows_right'),
	arrow_text_left = arrowBlock.querySelector(".arrow_text_left"),
	arrow_text_right = arrowBlock.querySelector(".arrow_text_right");

	arrowLeft.addEventListener("mouseover", () => {
		if (arrowLine.classList.contains("activeRight") || arrow_text_right.style.opacity == "1") {
			arrowLine.classList.remove('activeRight');
			arrow_text_right.style.opacity = "0.2"
		}

		arrowLine.classList.add("activeLeft");
		arrow_text_left.style.opacity = "1";
	});

	arrowRight.addEventListener("mouseover", () => {
		if (arrowLine.classList.contains("activeLeft") || arrow_text_left.style.opacity == "1") {
			arrowLine.classList.remove("activeLeft")
			arrow_text_left.style.opacity = "0.2"
		}

		arrowLine.classList.add("activeRight");
		arrow_text_right.style.opacity = "1";
	});
}

input.addEventListener("click", changeBg);

function changeBg() {
	if(input.checked == true) {
		switchText.textContent = "Laptop";
		block1.classList.add("block_active");
	} else {
		switchText.textContent = "Nature"
		block1.classList.remove("block_active");
	}
};

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// <<<<<<<<<<<<<<<<<<<<<<<<< Calc >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
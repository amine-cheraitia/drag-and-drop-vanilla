let p = document.getElementsByTagName("p");
let choice = document.getElementsByClassName("choice");
console.log(choice);
let dragItem = null;

for (const i of p) {
	i.addEventListener("dragstart", function () {
		dragItem = this;
		setTimeout(() => (this.style.display = "none"), 0);
	});
	i.addEventListener("dragend", function () {
		setTimeout(() => (this.style.display = "block"), 0);
		dragItem = null;
	});
}

for (const j of choice) {
	j.addEventListener("dragover", function (e) {
		e.preventDefault();
		this.style.border = " 2px dotted cyan";
	});
	j.addEventListener("dragenter", function (e) {
		e.preventDefault();
	});
	j.addEventListener("dragleave", function () {
		this.style.border = "none";
	});
	j.addEventListener("drop", function () {
		this.append(dragItem);
	});
}

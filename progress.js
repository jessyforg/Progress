function getProgress() {
	return document.getElementById("progressbar").getAttribute("aria-valuenow");
	return document.getElementById("progressbar").getAttribute("style", "width");
	return document.getElementById("progressbar").innerHTML;
}

function setProgress(value) {
	document.getElementById("progressbar").setAttribute("aria-valuenow", value);
	document
		.getElementById("progressbar")
		.setAttribute("style", "width: " + value + "%");
	document.getElementById("progressbar").innerHTML = value + "%";
}

function first() {
	var x = getProgress();
	setProgress((x = 33));
}

function second() {
	var x = getProgress();
	setProgress((x = 66));
}

function third() {
	var x = getProgress();
	setProgress((x = 100));
}

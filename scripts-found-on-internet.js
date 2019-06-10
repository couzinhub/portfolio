function copyText() {
	var copyText = document.getElementById("myInput");
	copyText.select();
	document.execCommand("copy");
	document.getSelection().removeAllRanges();

	
	var tooltip = document.getElementById("myTooltip");
	tooltip.innerHTML = "<strong>Copied:</strong> " + copyText.value;
}

function outFunc() {
	var tooltip = document.getElementById("myTooltip");
	tooltip.innerHTML = "Copy to clipboard";
}
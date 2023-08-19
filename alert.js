function showAlert() {
	alert("¡“ú‚àŠy‚µ‚­ŠJ”­‚µ‚æ‚¤I");
}
chrome.action.onClicked.addListener((tab) => {
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: showAlert
	});
});
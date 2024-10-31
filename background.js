chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: pageActionClicked,
    });
});

function pageActionClicked() {
    alert('Page action clicked!');
}

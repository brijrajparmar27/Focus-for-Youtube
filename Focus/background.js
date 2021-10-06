console.log("background script initiated");

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    var tabStatus = changeInfo.status;

    if (tabStatus == 'complete') {
        console.log("navigation trigerred");
        chrome.tabs.sendMessage(tabId, {
            text: 'changed'
        });
    }

});
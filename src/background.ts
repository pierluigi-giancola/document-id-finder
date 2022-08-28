// background.js
// chrome.action.onClicked.addListener((tab) => {
//   chrome.scripting.executeScript({
//     target: {tabId: tab.id},
//     files: ['content.js']
//   });
// });


chrome.tabs.onUpdated.addListener(function (tabId, info) {
    if (info.status === 'complete') {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['content.js']
      });
      chrome.scripting.insertCSS(
        {
          target: { tabId: tabId },
          files: ['content.css']
        })
    }
  });
chrome.contextMenus.remove('copyText', function() {
  chrome.contextMenus.create({
    contexts: ['all'],
    title: '复制文字',
    id: 'copyText'
  })
})
chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if(info.menuItemId === 'copyText') {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {greeting: "copy"}, function(response) {
        console.log(response)
      });
    });
  }
});
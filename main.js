let text = ''
document.addEventListener('mousedown', function(e) {
  if(e.button === 2) {
    text = e.target.innerText
  }
})
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting === "copy") {
      const div = document.createElement('div')
      div.innerText = `${text}`
      div.style.position = 'fixed'
      div.style.top = '10%'
      div.style.left = '50%'
      div.style.transform = 'translateX(-50%)'
      div.style.padding = '10px'
      div.style.borderRadius = '5px'
      div.style.backgroundColor = 'rgba(237, 237, 237, 0.8)'
      div.style.transition = 'all 0.5s'
      document.body.appendChild(div)
      setTimeout(() => {
        div.style.opacity = '0'
      }, 1000)
      setTimeout(() => {
        div.style.display = 'none'
      }, 1500)
      navigator.clipboard.writeText(text)
      text = ''
      sendResponse('复制成功')
    }
  }
);
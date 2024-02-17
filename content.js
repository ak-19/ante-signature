chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.messageInject === true) {
      const messageBody = document.querySelector("[role='textbox']");
      if (messageBody) {
        messageBody.innerHTML = request.top + messageBody.innerHTML + request.tail
        sendResponse({ farewell: "Inserted!" });
      } else {
        sendResponse({ farewell: "Message body not found!" });
      }
    }
  });
  
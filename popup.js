document.addEventListener('DOMContentLoaded', function() {
    document
    .getElementById('insertButton')
    .addEventListener('click', function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { 
          messageInject: true, 
          top: "Hi, <br/><br/>", 
          tail: '<br/><br/>Best Regards, Ante Kotarac<br/><br/>email: ante@studiumlocus.com<br/>mobile: +385 95 123123<br/>'
        }, function(response) {
          console.log(response.farewell);
        });
      });
    });
  });
  
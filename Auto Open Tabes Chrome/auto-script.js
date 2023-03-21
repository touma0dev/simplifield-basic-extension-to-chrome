window.onload=function(){
  var manifest = chrome.runtime.getManifest();
  var version = manifest.version;
  chrome.runtime.onStartup.addListener(function() {
    chrome.tabs.create({ 
      url: 'https://youtube.com/', // URL da página que você deseja visitar
      // Define a janela como anônima
    }, function(window) {
      window.tabs[0].addEventListener("load", function() {
        var event = new KeyboardEvent("keydown", {
          key: "Enter",
          keyCode: 13,
          view: window,
          bubbles: true,
          cancelable: true
        });
        window.document.dispatchEvent(event);
      });
    });
  });
}
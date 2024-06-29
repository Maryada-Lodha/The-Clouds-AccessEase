document.addEventListener('DOMContentLoaded', function () {
  var hideImagesButton = document.getElementById('hideImagesButton');
  var enableButton = document.getElementById('enableButton');

  var colorPicker = document.getElementById('colorPicker');
  var highlightLinksButton = document.getElementById('highlightLinksButton');

  var contrastSlider = document.getElementById('contrastSlider');

  var audio = new Audio(chrome.runtime.getURL('hello there-how are you 1.wav'));

  // Play the audio as soon as the document is loaded
  audio.play();

  enableButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "enableADHDMode" });
    });
  });


  hideImagesButton.addEventListener('click', function () {
    // Send a message to content.js to hide images
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { action: 'hideImages' });
    });
  });


  highlightLinksButton.addEventListener('click', function () {
    var highlightColor = colorPicker.value;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { action: 'highlightLinks', color: highlightColor });
    });
  });


  contrastSlider.addEventListener('input', function () {
    var contrastValue = contrastSlider.value;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { action: 'changeContrast', value: contrastValue });
    });
  });


});
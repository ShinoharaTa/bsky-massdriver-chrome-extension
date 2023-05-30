document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("share-button")
    .addEventListener("click", function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const tab = tabs[0];
        const share = encodeURIComponent(tab.title + "\n" + tab.url);
        document.getElementById("app-frame").src =
          "https://mdrv.shino3.net?simple=true&intent=" + share;
      });
    });
});

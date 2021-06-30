browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    if (tab.url.includes('youtube.com')) {
      console.log('Landed on YouTube, executing removal script...');
      browser.tabs.executeScript(tabId, {
        file: '/removeYouTubeDistractions.js'
      });
    }
  }
});


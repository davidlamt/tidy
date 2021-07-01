browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'loading' || changeInfo.status === 'complete') {
    if (tab.url.includes('youtube.com')) {
      console.log(`YouTube detected. Executing removal script when status is ${changeInfo.status}...`);
      browser.tabs.executeScript(tabId, {
        file: '/removeYouTubeDistractions.js',
        runAt: 'document_start',
      });
    }
  }
});


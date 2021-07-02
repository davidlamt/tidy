function removeRedditDistractions() {
  const elementSelectorsToRemove = ['._30BbATRhFv3V83DHNDjJAO', '._19oWd7e3z7-ztUGzdIoCR7'];

  // Home page
  if (window.location.pathname === '/') {
    elementSelectorsToRemove.push(...['._3ozFtOe6WpJEMUtxDOIvtU']);
  }

  console.log('Reddit distraction selectors:', elementSelectorsToRemove);

  for (const elementSelector of elementSelectorsToRemove) {
    const elements = document.querySelectorAll(elementSelector);
    for (const element of elements) {
      console.log('Removing element', element);
      element.remove();
    }
  }
}

removeRedditDistractions();

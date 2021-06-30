function removeYouTubeDistractions() {
  const elementSelectorsToRemove = ['#start', '#end', '#voice-search-button', '#guide'];

  // Home page
  if (window.location.pathname === '/') {
    elementSelectorsToRemove.push(...['.ytd-browse[page-subtype=home]', 'ytd-mini-guide-renderer']);
  }

  // Watching video page
  if (window.location.pathname === '/watch') {
    elementSelectorsToRemove.push(...['#related', '#comments'])
  }

  console.log('Removing YouTube element selectors: ', elementSelectorsToRemove);

  for (const elementSelector of elementSelectorsToRemove) {
    const elements = document.querySelectorAll(elementSelector);
    for (const element of elements) {
      console.log('removing element', element);
      element.remove();
    }
  }
}

removeYouTubeDistractions();

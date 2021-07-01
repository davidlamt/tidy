function removeYouTubeDistractions() {
  const elementSelectorsToRemove = ['#start', '#end', '#voice-search-button', '#guide'];

  // Home page
  if (window.location.pathname === '/') {
    elementSelectorsToRemove.push(...['.ytd-browse[page-subtype=home]', 'ytd-mini-guide-renderer']);
  }

  // Watching video page
  if (window.location.pathname === '/watch') {
    elementSelectorsToRemove.push(...['#related', '#comments', '#comment-teaser', '#ticket-shelf', '#merch-shelf'])
  }

  console.log('YouTube distraction selectors:', elementSelectorsToRemove);

  for (const elementSelector of elementSelectorsToRemove) {
    const elements = document.querySelectorAll(elementSelector);
    for (const element of elements) {
      console.log('Removing element', element);
      element.remove();
    }
  }
}

removeYouTubeDistractions();

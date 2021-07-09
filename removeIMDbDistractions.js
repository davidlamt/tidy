function removeIMDbDistractions() {
  const elementSelectorsToRemove = ['footer'];

  // Home page
  if (window.location.pathname === '/') {
    elementSelectorsToRemove.push(...['main']);
  }

  // Title page
  if (window.location.pathname.startsWith('/title/')) {
    elementSelectorsToRemove.push(...[])
  }

  console.log('IMDb distraction selectors:', elementSelectorsToRemove);

  for (const elementSelector of elementSelectorsToRemove) {
    const elements = document.querySelectorAll(elementSelector);
    for (const element of elements) {
      console.log('Removing element', element);
      element.remove();
    }
  }
}

removeIMDbDistractions();

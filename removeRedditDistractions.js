function removeRedditDistractions() {
  const elementSelectorsToRemove = [
    'a[aria-label="Home"]', // Logo
    '._19oWd7e3z7-ztUGzdIoCR7', // Login buttons home
    '._1JBkpB_FOZMZ7IPr3FyNfH' // Login buttons search
  ];

  // Home page
  if (window.location.pathname === '/') {
    elementSelectorsToRemove.push(...['._3ozFtOe6WpJEMUtxDOIvtU']); // Home page content
  }

  // Subreddit community page / post
  if (window.location.pathname.startsWith('/r/')) {
    elementSelectorsToRemove.push(
      ...[
        '._2l7c_Oz0UVsamALvPrlznq', // Recommended posts 
        '.promotedlink', // Promotions
      ]); 
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

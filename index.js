const elementSelectorsToHide = ['#masthead-ad', '#related', '#comments'];

for (const elementSelector of elementSelectorsToHide) {
  const elements = document.querySelectorAll(elementSelector);
  for (const element of elements) {
    console.log('removing element', element);
    element.remove();
  }
}

const UtmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

window.addEventListener('load', (_event) => {
  console.group('UTM Finder: Sneaky links');
  document.querySelectorAll('a').forEach(link => {
    const url = new URL(link.href);

    if (!url.search) { return; }

    const search = url.searchParams;

    if (UtmParams.some(paramName => search.has(paramName))) {
      console.info(`Found a link with UTM params: ${link.href}`)
      link.style.border = "5px solid yellow";
    }
  });
  console.groupEnd();
});

function operator(proxies, targetPlatform) {
  const superscriptMap = {
    '0': '⁰',
    '1': '¹',
    '2': '²',
    '3': '³',
    '4': '⁴',
    '5': '⁵',
    '6': '⁶',
    '7': '⁷',
    '8': '⁸',
    '9': '⁹',
  };

  return proxies.map(proxy => {
    proxy.name = proxy.name.replace(/[0-9]/g, d => superscriptMap[d]);
    return proxy;
  });
}

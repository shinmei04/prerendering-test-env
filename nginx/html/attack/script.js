function blockPause(milliseconds) {
  const start = performance.now();
  let lastCheck = start;
  let lastTime = 0;
  while (performance.now() - start < milliseconds) {
    lastTime = performance.now() - lastCheck;
    if (lastTime >= 1000) {
      console.log(
        `Still blocking ${Math.round(performance.now() - start)} ms out of ${milliseconds} ms`
      );
      lastCheck = performance.now();
    }
  }
}

var script = document.createElement("script");
script.src = "https://unpkg.com/web-vitals@3/dist/web-vitals.attribution.iife.js";
script.onload = function () {
  window.webVitals.onLCP(
    ({ value }) => {
      console.log(`LCP time: ${Math.round(value)} ms`);
    },
    { reportAllChanges: true }
  );
};
document.head.appendChild(script);

document.addEventListener("prerenderingchange", () => {
  console.log(`The page has been activated!`);
  const activationStart = Math.round(
    performance.getEntriesByType("navigation")[0].activationStart
  );
  console.log(`The page was activated at: ${activationStart}`);
});

console.log("Simulate slow loading page by blocking page;");
blockPause(3000);
console.log("Page loaded");
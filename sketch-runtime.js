// Runs only in the isolated sketch document, before p5 starts global mode.
(() => {
  const originalSetup = window.setup;
  window.setup = function () {
    pixelDensity(1);
    originalSetup?.();
    frameRate(30);
    // Fit fixed-size canvases as well as viewport-sized canvases into their frame.
    const canvas = document.querySelector('canvas');
    if (canvas) {
      const scale = Math.min(innerWidth / width, innerHeight / height);
      canvas.style.width = `${width * scale}px`;
      canvas.style.height = `${height * scale}px`;
    }
  };
})();

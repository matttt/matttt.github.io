(() => {
  const gallery = document.querySelector('[data-sketchbook]');
  if (!gallery) return;
  const tiles = [...gallery.querySelectorAll('[data-sketch]')];
  const toggle = document.querySelector('#toggle-sketches');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let paused = motion.matches;
  const visible = new Set();
  const scale = tile => tile.style.setProperty('--sketch-scale', tile.querySelector('.sketch-stage').clientWidth / 640);
  function sync(tile) {
    const stage = tile.querySelector('.sketch-stage');
    const shouldRun = visible.has(tile) && !tile.hidden && !paused && !document.hidden;
    const frame = stage.querySelector('iframe');
    if (shouldRun && !frame) {
      scale(tile);
      const iframe = document.createElement('iframe');
      iframe.title = tile.dataset.title;
      iframe.setAttribute('sandbox', 'allow-scripts');
      iframe.setAttribute('allow', "camera 'none'; microphone 'none'; geolocation 'none'");
      iframe.src = tile.dataset.url;
      stage.append(iframe);
      tile.dataset.running = 'true';
    } else if (!shouldRun && frame) {
      // Removing the browsing context stops its timers, animation loops, and WebGL work.
      frame.remove();
      tile.dataset.running = 'false';
    }
  }
  function syncAll() {
    tiles.forEach(sync);
    toggle.textContent = paused ? 'Play previews' : 'Pause previews';
    toggle.setAttribute('aria-pressed', String(paused));
  }
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      const tile = entry.target.closest('[data-sketch]');
      if (entry.isIntersecting && entry.intersectionRatio > 0) visible.add(tile);
      else visible.delete(tile);
      sync(tile);
    }
  }, { rootMargin: '0px', threshold: [0, 0.001] });
  const resize = new ResizeObserver(entries => {
    for (const entry of entries) scale(entry.target.closest('[data-sketch]'));
  });
  for (const tile of tiles) {
    const stage = tile.querySelector('.sketch-stage');
    observer.observe(stage);
    resize.observe(stage);
  }
  toggle.addEventListener('click', () => { paused = !paused; syncAll(); });
  document.addEventListener('visibilitychange', syncAll);
  window.addEventListener('pagehide', () => tiles.forEach(tile => tile.querySelector('iframe')?.remove()));
  window.addEventListener('pageshow', syncAll);
  motion.addEventListener('change', event => { paused = event.matches; syncAll(); });
  document.querySelectorAll('[data-sketch-controls]').forEach(el => el.hidden = false);
  syncAll();
})();

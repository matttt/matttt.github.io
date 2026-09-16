const filters = document.querySelectorAll('[data-filter]');
const search = document.querySelector('#search');
const entries = [...document.querySelectorAll('[data-entry]')];
let category = 'All';
function update() {
  const query = (search?.value || '').trim().toLowerCase();
  let count = 0;
  for (const entry of entries) {
    entry.hidden = !(category === 'All' || entry.dataset.category === category) || !entry.dataset.search.includes(query);
    if (!entry.hidden) count++;
  }
  const status = document.querySelector('#results');
  if (status) status.textContent = `${count} ${count === 1 ? 'entry' : 'entries'}`;
  const empty = document.querySelector('#empty');
  if (empty) empty.hidden = count > 0;
}
for (const button of filters) button.addEventListener('click', () => {
  category = button.dataset.filter;
  for (const filter of filters) filter.setAttribute('aria-pressed', String(filter === button));
  update();
});
search?.addEventListener('input', update);
document.querySelector('#clear-search')?.addEventListener('click', () => {
  search.value = '';
  filters[0].click();
  search.focus();
});
document.querySelectorAll('[data-enhanced]').forEach(element => element.hidden = false);
if (search) update();

// Play project recordings only while visible; native controls remain available.
(() => {
  const videos = [...document.querySelectorAll('[data-project-video]')];
  const visible = new Set();
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const sync = video => {
    if (!visible.has(video) || document.hidden || video.closest('[hidden]')) video.pause();
    else if (!motion.matches) video.play().catch(() => {});
  };
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) visible.add(entry.target);
      else visible.delete(entry.target);
      sync(entry.target);
    }
  });
  videos.forEach(video => observer.observe(video));
  document.addEventListener('visibilitychange', () => videos.forEach(sync));
  motion.addEventListener('change', () => {
    if (motion.matches) videos.forEach(video => video.pause());
    else videos.forEach(sync);
  });
})();

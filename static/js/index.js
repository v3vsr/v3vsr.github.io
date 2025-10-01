window.HELP_IMPROVE_VIDEOJS = false;


document.querySelectorAll('.stack.speed video').forEach(v => {
  v.playbackRate = 2.0;
  v.addEventListener('loadedmetadata', () => {
      v.playbackRate = 2.0;
    });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.compare').forEach(initStack);
});

function initStack(root) {
  const vids = Array.from(root.querySelectorAll('.stack video'));
  const pick = root.querySelector('.pick');
  if (!pick || vids.length === 0) return;

  pick.addEventListener('click', (e) => {
    const link = e.target.closest('[data-i]');
    if (!link || !pick.contains(link)) return;
    e.preventDefault();

    const i = Number(link.dataset.i);
    if (!Number.isInteger(i) || i < 0 || i >= vids.length) return;

    vids.forEach((v, idx) => v.classList.toggle('active', idx === i));
    pick.querySelectorAll('[data-i]').forEach(a => a.classList.toggle('is-active', a === link));
  });
}

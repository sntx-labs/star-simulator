(() => {
  // The shell calls this instead of starting its iframe or mobile notice.
  window.SyntaxLabsEntry = { choose(source, start) {
    const entry = document.querySelector('.graphics-entry');
    const bar = document.querySelector('.labs-bar');
    const controls = bar.querySelector('.labs-controls-toggle');
    const mobile = matchMedia('(max-width:680px)').matches || matchMedia('(pointer:coarse)').matches;
    const warning = entry.querySelector('.graphics-mobile-note');
    const noticeKey = 'syntax-labs-mobile-performance-ack-v1';
    let acknowledged = false;
    try { acknowledged = sessionStorage.getItem(noticeKey) === 'true'; } catch {}
    warning.hidden = !mobile || acknowledged;
    document.body.classList.add('is-choosing-graphics');
    bar.inert = false;
    bar.removeAttribute('aria-hidden');
    controls.hidden = true;
    let chosen = false;
    for (const button of entry.querySelectorAll('[data-quality]')) {
      button.addEventListener('click', () => {
        if (chosen) return;
        const level = button.dataset.quality;
        if (!['high', 'medium', 'low'].includes(level)) return;
        chosen = true;
        source.searchParams.set('graphics', level);
        if (mobile) try { sessionStorage.setItem(noticeKey, 'true'); } catch {}
        entry.hidden = true;
        document.body.classList.remove('is-choosing-graphics');
        bar.inert = true;
        bar.setAttribute('aria-hidden', 'true');
        controls.hidden = false;
        // Loading starts only after an explicit choice, including on repeat visits.
        start();
      });
    }
    entry.querySelector('[data-quality="' + (mobile ? 'low' : 'medium') + '"]').focus({ preventScroll: true });
  } };
})();

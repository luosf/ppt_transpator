document.addEventListener('DOMContentLoaded', () => {
  const backToTop = document.getElementById('back-to-top');
  const hero = document.querySelector('.hero');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        backToTop.classList.remove('hidden');
      } else {
        backToTop.classList.add('hidden');
      }
    });
  }, { threshold: 0 });

  if (hero) {
    observer.observe(hero);
  }

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

const links = document.querySelectorAll('.testimonial__link');
const panels = document.querySelectorAll('.comment');

links.forEach(link => {
  link.addEventListener('click', () => {

    const id = link.dataset.id;

    // 左のactive切り替え
    links.forEach(l => l.classList.remove('testimonial__link-active'));
    link.classList.add('testimonial__link-active');

    // 右の表示切り替え
    panels.forEach(panel => {
      panel.classList.remove('is-active');
      if (panel.dataset.id === id) {
        panel.classList.add('is-active');
      }
    });

  });
});
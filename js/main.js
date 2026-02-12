const tabs = document.querySelectorAll('.testimonial-tab');
const cards = document.querySelectorAll('.testimonial-card');

// link部分のそれぞれにクリックイベントを設定
tabs.forEach(tab => {
  tab.addEventListener('click', () => {

    // クリックされた要素のdata-idを取得
    const id = tab.dataset.id;

    // 左のactive切り替え
    // activeを消して、クリックされたものにactiveをつける
    tabs.forEach(l => l.classList.remove('testimonial-tab--active'));
    tab.classList.add('testimonial-tab--active');

    // 右の表示切り替え
    // is-activeを消して、data-idが一致したものにis-activeをつける
    cards.forEach(card => {
      card.classList.remove('is-active');
      if (card.dataset.id === id) {
        card.classList.add('is-active');
      }
    });
  });
});
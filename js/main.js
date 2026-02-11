const links = document.querySelectorAll('.testimonial__link');
const comments = document.querySelectorAll('.comment');

// link部分のそれぞれにクリックイベントを設定
links.forEach(link => {
  link.addEventListener('click', () => {

    // クリックされた要素のdata-idを取得
    const id = link.dataset.id;

    // 左のactive切り替え
    // activeを消して、クリックされたものにactiveをつける
    links.forEach(l => l.classList.remove('testimonial__link-active'));
    link.classList.add('testimonial__link-active');

    // 右の表示切り替え
    // is-activeを消して、data-idが一致したものにis-activeをつける
    comments.forEach(comment => {
      comment.classList.remove('is-active');
      if (comment.dataset.id === id) {
        comment.classList.add('is-active');
      }
    });
  });
});
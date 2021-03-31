const buttons = document.querySelectorAll('.tab-button');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(event) {
  const tabId = event.target.dataset.id;
  if(tabId) {
    //Remove active from other buttons
    buttons.forEach(function(btn) {
      btn.classList.remove('active');
      event.target.classList.add('active');
    });

    //hide other articles
    articles.forEach(function(article) {
      article.classList.remove('active');
    });

    const articleElement = document.getElementById(tabId);
    articleElement.classList.add('active');
  }
});
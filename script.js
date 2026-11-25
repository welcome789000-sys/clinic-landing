var items = document.querySelectorAll('.faq .item');

items.forEach(function (item) {
  var btn = item.querySelector('.q');
  btn.addEventListener('click', function () {
    var wasOpen = item.classList.contains('open');
    items.forEach(function (i) { i.classList.remove('open'); });
    if (!wasOpen) item.classList.add('open');
  });
});

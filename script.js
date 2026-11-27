var items = document.querySelectorAll('.faq .item');

items.forEach(function (item) {
  var btn = item.querySelector('.q');
  btn.addEventListener('click', function () {
    var wasOpen = item.classList.contains('open');
    items.forEach(function (i) { i.classList.remove('open'); });
    if (!wasOpen) item.classList.add('open');
  });
});

var range = document.getElementById('baRange');
var before = document.getElementById('baBefore');
var box = document.getElementById('ba');
function moveBA() {
  var v = range.value;
  // الشريط من اليسار لليمين، وصورة "قبل" بتظهر من اليسار
  before.style.clipPath = 'inset(0 ' + (100 - v) + '% 0 0)';
  box.style.setProperty('--pos', v + '%');
}
if (range) { range.addEventListener('input', moveBA); moveBA(); }
// حط رقم الواتساب الحقيقي هنا بالصيغة الدولية من غير + (مثال: 20 + الرقم من غير الصفر)
var WHATSAPP_NUMBER = "";

(function () {
  var a = document.getElementById('wa');
  if (!a) return;
  if (!WHATSAPP_NUMBER) {
    a.classList.add('off');
    a.textContent = 'الطلب بالواتساب قريبًا';
    a.setAttribute('aria-disabled', 'true');
    a.setAttribute('tabindex', '-1');
    a.addEventListener('click', function (e) { e.preventDefault(); });
    return;
  }
  a.href = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(a.dataset.text);
})();

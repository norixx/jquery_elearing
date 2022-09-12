// const cars = [
//   {
//     "name": "カローラ",
//     "type": "セダン",
//     "brand": "TOYOTA"
//   },
//   {
//     "name": "フィット",
//     "type": "コンパクト",
//     "brand": "HONDA"
//   },
//   {
//     "name": "ハイゼット",
//     "type": "軽貨物車",
//     "brand": "ダイハツ"
//   }
// ];

const btn = document.querySelector('#btn');
const info = document.querySelector('#car-info');
const request = new XMLHttpRequest();

btn.addEventListener('click', () => {

  request.open('GET', 'https://norixx.github.io/jquery_elearing/cars.json');
  request.onload = () => {
    const data = JSON.parse(request.responseText);
    outputHtml(data);
  };
  request.send();
});

function outputHtml(data) {
  let htmlStr = '';
  data.forEach( car => {
    htmlStr += `<p>${car.name}は${car.brand}の${car.type}タイプの車です。</p>`;
  });
  info.insertAdjacentHTML('beforeend', htmlStr);
}

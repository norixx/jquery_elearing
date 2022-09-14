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
let counter = 1;

btn.addEventListener('click', () => {
  request.open('GET', `https://norixx.github.io/jquery_elearing/cars${counter}.json`);
  request.onload = () => {
    if(request.status >= 200 && request.status < 400) {
      const data = JSON.parse(request.responseText);
      outputHtml(data);
    } else {
      console.log('サーバに接続できましたが、エラーになりました')
    }
    
  };
  request.onerror = () => {
    console.log('接続エラーです');
  }
  request.send();
  counter++;
  if(counter > 3) {
    btn.setAttribute('disabled', 'disabled');
  }
});

function outputHtml(data) {
  let htmlStr = '';
  data.forEach( car => {
    let colorStr = car.colors.join();
    htmlStr += `<p>${car.name}は${car.brand}の${car.type}タイプの車です。<br>色の展開: ${colorStr}</p>`;
  });
  info.insertAdjacentHTML('beforeend', htmlStr);
}

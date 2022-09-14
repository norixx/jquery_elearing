// サンプル解答
const request = new XMLHttpRequest();
const list = document.querySelector('#list');

request.open('GET', 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5');
request.onload = () => {
  const data = JSON.parse(request.responseText);
  let htmlStr = '';
  data.forEach( item => {
    htmlStr += `<div class="list-item">
      <p>${item.id}</p>
      <div><img src="${item.thumbnailUrl}"></div>
      <p>${item.title}</p>
    </div>`
  });
  list.insertAdjacentHTML('beforeend', htmlStr);
};

request.send();
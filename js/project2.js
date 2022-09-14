// サンプル解答
const request = new XMLHttpRequest();
const form = document.querySelector('#contact-form');
const btn = document.querySelector('#search-btn');

btn.addEventListener('click', () => {
  if(form.zipcode.value === '') {
    alert('郵便番号が入力されていません');
    return;
  }
  const zipcode = form.zipcode.value;
  request.open('GET', `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`);
  request.onload = () => {
    const address = JSON.parse(request.responseText);
    console.log(address);
    if(address.results === null) {
      alert('住所が見つかりませんでした')
      return;
    }
    form.pref.value = address.results[0].address1;
    form.city.value = address.results[0].address2 + address.results[0].address3;
  };

  request.send();
});

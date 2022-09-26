// jQuery 2
// =======================================================
// $(document).ready(function() {
//   alert('jQuery動作テスト');
// });

// jQuery 3
// =======================================================
// $('.site-header-nav li a').css('color', 'green');

// jQuery 4
// =======================================================
// $('.mv-copy').next().css('text-decoration', 'underline');

// $('.mv-subcopy').prev().css('font-weight', 'bold');

// $('.service-card').parent().css('border', '2px solid orange');

// $('.site-footer-sns').children().css('color', 'orange');

// $('.works-panel').find('.works-title').css('border-bottom', '2px solid #000');

// $('.contact-logo').closest('div').css('background', '#eee');

// jQuery 5
// =======================================================
// $('.works-container')
//   .css('border', '4px dotted orange')
//   .find('.works-thumb')
//   .css('opacity', '0.5')
//   .next()
//   .css('background-color', 'rgba(255 220 0)')
//   .children()
//   .css('text-decoration', 'underline');

// jQuery 6
// =======================================================
const tweet = '<div class="tweet-content">イエローマジックデザインワークショップを開催しました。「普段何気なく使っているモノの見方を変えて見る」をテーマに、参加者のいろんなアイデアと作品が生まれました。</div>';

const $tweetContainer = $('.tweet-container');

// $tweetContainer.append(tweet);

// $tweetContainer.prepend(tweet);

// $tweetContainer.before(tweet);

// $tweetContainer.after(tweet);

// $tweetContainer.html(tweet);

// $tweetContainer.text(tweet);

// jQuery 7
// =======================================================
let display = true;
$('#quick-news-btn').on('click', e => {
  if(display) {
    $('.quick-news-content').wrap('<div class="hidden">');
    $(e.target).text('＋ ニュースを開く');
    display = false;
  } else {
    $('.quick-news-content').unwrap();
    $(e.target).text('× ニュースを閉じる');
    display = true;
  }
});

// jQuery 8
// =======================================================

// $('.works-desc').empty();

// $('.works-desc').remove();


// jQuery 9
// =======================================================
// $('.works-thumb img').removeAttr('alt');

// console.log( $('.works-thumb img').attr('alt') );

// $('.works-thumb img').attr('alt', 'アンティーク家具ショップ');

// $('.works-thumb img').attr('id', 'works-antique');

// jQuery 10
// =======================================================
// console.log( $('.service-icon').css('font-size') );

// $('.service-icon').css('color', 'red');

// $('.service-icon').css({
//   'color': 'green',
//   'font-size': '120px',
//   'opacity': '0.8'
// });


// jQuery 11
// =======================================================

// $('.faq-openclose').addClass('is-open');

// $('.faq-openclose').removeClass('faq-openclose');

// console.log( $('.faq-openclose').hasClass('faq-openclose') );

// jQuery 12
// =======================================================
// $('.faq-openclose').on('click', e => {
//   // console.log('クリックしました');
//   // $(e.target).off('click');

//   $(e.target).toggleClass('is-open');

// });
// $('.faq-openclose').click( e => {
//   $(e.target).toggleClass('is-open');
// });

// jQuery 13
// =======================================================
// headタグに移動
// $(document).ready(function(){
//   $('.site-header-logo').css('border-bottom', '2px solid #000');
// });

// $(window).on('load', function(){});
// $(window).load(function(){});

// jQuery 14
// =======================================================
// $('.faq-list *').on('click', e => {
//   console.dir(e);
//   e.stopPropagation();
//   // console.log(e.target);
//   // console.log(e.type);
//   // console.log(e.pageX, e.pageY);
//   // console.log(e.pageX, e.pageY);
//   // console.log(e.clientX, e.clientY);
// });

// const mouseFollow = $('.mouse-follow');
// $(window).on('mousemove', e => {
//   // console.log(e.clientX, e.clientY);
//   mouseFollow.css({
//     'left': e.clientX,
//     'top': e.clientY,
//   })
// });


// jQuery 15
// =======================================================
// $('.mv-copy').on('click', e => {
//   $(e.target).animate({'font-size': '40px'})
// });

$('.mv-copy').on('click', e => {
  $(e.target)
		.animate({'font-size': '40px'})
		.animate({'font-weight': 700}, 'slow')
    .animate({'height': 'hide'})
});

$('.pagetop').on('click', () => {
  $('html').animate({'scrollTop': 0});
});

console.log($('html'));


// jQuery 16
// =======================================================
$('.tweet-show').on('click', () => {
  $('.tweet-content-ls16').fadeIn(1000);
});

$('.tweet-hide').on('click', () => {
  $('.tweet-content-ls16').fadeOut();
});

// jQuery 17
// =======================================================
// $('.faq-openclose').on('click', e => {
//   const dd = $(e.target).parent().next();

//   dd.toggle( !dd.is(':visible') );

// });

// jQuery 18
// =======================================================
$('.faq-openclose').on('click', e => {
  const dd = $(e.target).parent().next();
  $(e.target).toggleClass('is-open');
  dd.slideToggle( !dd.is(':visible') );

});

// jQuery 19
// =======================================================
const tweets = [
  '「DX支援」に当社のサービスがお役に立てるかもしれません。',
  '良いデザインはどっち？ クイズを解くだけで、デザインの知識がどんどん身につく画期的なデザイン手法を紹介',
  '現場監督からWebデザイナーに転職。建築現場責任者として活躍されていた川本さんのキャリアチェンジの理由は？',
  'Webデザインの勉強やトレンドキャッチに役立つSNSアカウントおすすめ25選'
];

const tweetContent = $('.tweet-content-ls19');
let counter = 0;
tweetContent.text(tweets[counter]).fadeIn();
setInterval(() => {
  tweetContent.fadeOut(400, () => {
    counter++;
    if( counter === tweets.length ) {
      counter = 0;
    }
    tweetContent.text(tweets[counter]).fadeIn();
  });
}, 3000);
// setInterval(() => {
//   tweetContent.text(tweets[counter]).fadeOut(400, () => {
//     counter++;
//     if( counter === tweets.length ) {
//       counter = 0;
//     }
//     tweetContent.text(tweets[counter]).fadeIn();
//   });
// }, 3000);

// jQuery 20
// =======================================================

const $serviceList =  $('.service-list');
$(window).on('scroll', () => {
  const isInView = $serviceList.inView('topOnly', 150);
  console.log(isInView);
  // アニメーションは1回のみ
  if(isInView && !$serviceList.hasClass('in-view')) {
    $serviceList.addClass('in-view');
  }
  // $serviceCards.each((i,card) => {
  //   const $card = $(card);
  //   const isInView = $card.inView('topOnly', 150);
  //   if( isInView && !$card.hasClass('in-view') ) {
  //     $card.addClass('in-view');
  //   }
  // });
});

// slick
$('.works-container').slick({
  autoplay: true,
  dots: true,
});


// ハンバーガーメニュー
// =======================================================
$('.site-header-navbtn').on('click', () => {
  $('body').toggleClass('is-nav-open');
});

// リンクをクリックするとメニューを閉じる
$('.site-header-nav').on('click', 'a', () => {
  $('body').removeClass('is-nav-open');
});
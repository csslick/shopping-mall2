// main.js
$(function(){

  var item_list = $('.item_list');
  var list = '';

  for(var i = 0; i < 5; i++) {
    list += '<li>';
    list += '<a href="#">';
    list += '<img src="' + product_data[i].img_url + '" alt="노카라 트위드 자켓">';
    list += '<span class="title">' + product_data[i].title + '</span>';
    list += '<span class="name">' + product_data[i].name + '</span>'
    list += '<del class="origin_price">' + product_data[i].origin_price + '원</del>';
    list += '<ins class="sale_price"><strong>' + product_data[i].sale_price + '원</strong></ins>';
  }
  item_list.append(list);

  $('.bx-slider').bxSlider({
    // 여기에 옵션 설정
    mode: 'horizontal',     // 효과설정
    auto: false,             // 자동재생
    easing: "ease-in-out",  // 가속도(timing-function)
    pause: 4000,            // 정지시간(대기)
    controls: false,        // prev, next 표시/비표시
    pager: true,           // 하단 인디케이터 표시/비표시
    responsive: false,
  });

});
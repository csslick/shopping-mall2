// main.js
$(function(){

  // 상품리스트 추가
  var item_list = $('.item_list');
  var list = '';
  var list_num = 5;
  var kwd = '원';
  var origin_price = '';

  for(var i = 0; i < list_num; i++) {
    list += '<li>';
    list += '<a href="#">';
    list += '<img src="' + product_data[i].img_url + '" alt="노카라 트위드 자켓">';
    list += '<span class="title">' + product_data[i].title + '</span>';
    list += '<span class="name">' + product_data[i].name + '</span>'

    if(product_data[i].origin_price == "") {
      kwd = "&nbsp;";
      origin_price = "";
    } else { origin_price = product_data[i].origin_price;}

    list += '<del class="origin_price">' + origin_price + kwd + '</del>';
    list += '<ins class="sale_price"><strong>' + product_data[i].sale_price + '원</strong></ins>';
  }

  item_list.append(list);


  // bx slider
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

  $('#category_btn').click(function(){
    $('#category').toggleClass('show');
  })
  $('header, section').click(function(){
    $('#category').removeClass('show');
  })

}); // end$
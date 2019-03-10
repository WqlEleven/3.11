	//左右按钮隐藏
$('.minlogo_l').hide();
$('.minlogo_r').hide();
	//轮播图 ，左右按钮
$('.bg_img').hover(function () {
	$('.minlogo_l').show();
	$('.minlogo_r').show();	
	//停止轮播
	$('.bg_img').jcarouselAutoscroll('stop');

},function () {
	$('.minlogo_l').hide();
	$('.minlogo_r').hide();
	$('.bg_img').jcarouselAutoscroll('start');
	
});

   // 实现轮播图的功能
    $('.bg_img').jcarousel({
      wrap: 'circular'
    })
    .jcarouselAutoscroll({
        interval: 1500,
        target: '+=1',
        autostart: true
    });

    // 点击上一张
    $('.minlogo_l')
        .jcarouselControl({
            target: '-=1'
        });

    // 下一张
    $('.minlogo_r')
        .jcarouselControl({
            target: '+=1'
        });
//  $('.yuan')
//      // 当显示当前页码的时候，设置类样式
//      .on('jcarouselpagination:active', 'a', function() {
//          $(this).addClass('active');
//      })
//      // 当不是当前页码的时候，移除类样式
//      .on('jcarouselpagination:inactive', 'a', function() {
//          $(this).removeClass('active');
//      })
//      .jcarouselPagination();


// 页面滚动的时候，获取到页面滚动出去的距离
$(window).scroll(function () {
  // 获取到页面滚动出去的距离
  var scrollTop = $(window).scrollTop();
  // 1. 当页面滚动出去的距离 > 0 显示 导航
  //    当页面滚动出去的距离 == 0 隐藏 导航
  if (scrollTop > 0) {
    $('.subnav').show();
  } else {
    $('.subnav').hide();
  }
   // 2. 当页面滚动到指定楼层，让导航中对应的楼层高亮显示，其它楼层取消高亮显示
  // 获取每个楼层距离文档的纵坐标
  // $().offset().top;

  // 150
  // 一层  100   二层 200    400

  // 判断滚动出去的距离  大于指定楼层的距离  高亮显示
  // 四层
  if (scrollTop >= $('.goods_bottom').offset().top) {
    // 找到导航对应的楼层，高亮
    $('.subnav ul li:eq(2)')
      .addClass('current')
      .siblings()
      .removeClass('current');
  } else if (scrollTop >= $('.goods_bottoms').offset().top) {
    // 三层
    $('.subnav ul li:eq(1)')
      .addClass('current')
      .siblings()
      .removeClass('current');
  } else if (scrollTop >= $('.miaosha').offset().top) {
    // 二层
    $('.subnav ul li:eq(0)')
      .addClass('current')
      .siblings()
      .removeClass('current');
  } else {
    // 如果不在楼层的位置，去掉高亮
    $('.subnav ul li').removeClass('current');
  }
});
// 3. 点击导航的时候，动画的方式，让页面滚动到对应的楼层
$('.subnav ul li:eq(0)').click(function () {
  // 让页面滚动到对应的楼层
  $('html,body').animate({
    scrollTop: $('.miaosha').offset().top
  })
});
$('.subnav ul li:eq(1)').click(function () {
  // 让页面滚动到对应的楼层
  $('html,body').animate({
    scrollTop: $('.goods_bottoms').offset().top
  })
});
$('.subnav ul li:eq(2)').click(function () {
  // 让页面滚动到对应的楼层
  $('html,body').animate({
    scrollTop: $('.goods_bottom').offset().top
  })
});
$('.back').click(function () {
  $('html,body').animate({
    scrollTop: 0
  }, 200);
});

$('.listall ul li a').mouseover(function (){
	$('.neirong').show();
	$('.neirong').text($(this).text());
});
$('.listall ul li a').mouseleave(function (){
	$('.neirong').hide();
});
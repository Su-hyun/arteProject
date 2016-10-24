'use strict';
define(['sub'], function (sub) {

  console.log("sub");

  var $tabsLink = $('.tabsLink'),
      $tabs = $('.tabs'),
      $listWrap = $('.listWrap'),
      $modalPage = $('.modalPage'),
      $forTop = $('.forTop'),
      $inquiry = $('.inquiry'),
      tabsTop = [];

  $tabs.each(function () {
    tabsTop.push($(this).offset().top)
  });

  $(window).scroll(function () {
    var $this = $(this),
        winHEI = $this.height(),
        scrTop = $this.scrollTop(),
        $tabsSection = $('.tabsSection'),
        $tabsNav = $('.tabsNav'),
        tabsSectionOffsetTop = $tabsSection.offset().top;

    if(scrTop >= tabsSectionOffsetTop){
      $tabsNav.css('position', 'fixed');
      $forTop.css('display','block').stop().animate({top:scrTop + winHEI * 0.7},700);
      $forTop.children('a').stop().animate({opacity:1},1200);
    }
    else if(scrTop <= tabsSectionOffsetTop){
      $tabsNav.css('position', 'absolute');
      $forTop.css({display:'none', top:0}).children('a').css({opacity:0})
    }
  });

  $tabsLink.on('click', 'li', function () {
    var $this = $(this);
    idx = $this.index();
    $this.addClass('on').siblings().removeClass('on');
    $('html,body').stop().animate({scrollTop:tabsTop[idx]});
  });

  $forTop.click(function () {
    $('html,body').stop().animate({scrollTop:0});
  });

  $listWrap.on('click', 'li', function () {
    var $this = $(this),
        changeHEI = $this.find('.noticeContext > *').innerHeight();
    $this.addClass('on').find('.noticeContext').stop().animate({height:changeHEI})
    .parent().siblings().removeClass('on').find('.noticeContext').stop().animate({height:0});
    if($this.parent().is('.galleryWrap')){
      $modalPage.show();
    }
  });

  $inquiry.on('click', function () {
    $modalPage.show();
  });
});
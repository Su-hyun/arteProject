'use strict';
define(['main'], function (main) {
  idx = 0;

  var $btnGroup = $('.btnGroup'),
      $mainSlide = $('.mainVisual article'),
      $prevText = $('.prev .btnText'),
      $nextText = $('.next .btnText'),
      $modalPage = $('.modalPage'),
      $btnSubMenu = $('.btnSubMenu'),
      $subMenu = $('.subMenu'),
      $subMenuClose = $('.subMenuClose'),
      textArry = [];

  $mainSlide.each(function(i,e){
    var titText = $mainSlide.eq(i).find('h1').text();
    textArry.push(titText)
  });

  $btnSubMenu.on('click', function () {
    if(urlPath == '/') arte.subMenuMovement($subMenu, "100%", "340px",300, true);
    arte.subMenuBg(300);

  });
  $subMenuClose.on('click', function () {
    if(urlPath == '/') arte.subMenuMovement($subMenu, "340px", "100%",300, false);
    $('.blind').fadeOut(300, function () {
      $(this).remove()
    })
  });

  $btnGroup.on('click', 'button', function(){
    var $this = $(this);
    if($this.is('.next')){
      if(flag == true){
        flag = false;
        arte.slideMovement($mainSlide, idx, 0, "-100%");
        idx++;
        arte.slideMovement($mainSlide, idx, "100%", 0);
        arte.btnText(textArry, $prevText, $nextText, idx);
      }
    }else if($this.is('.prev')){
      if(flag == true){
        flag = false;
        arte.slideMovement($mainSlide, idx, 0, "100%");
        idx --;
        arte.slideMovement($mainSlide, idx, "-100%", 0);
        arte.btnText(textArry, $prevText, $nextText, idx);
      }
    }else if($this.is('.btnModal')) $modalPage.show()
  });

  $modalPage.on('click', 'button', function () {
    var $this = $(this),
        $parentsDiv = $this.parents('div'),
        $siblingsLi = $parentsDiv.find('li');
    idx = $parentsDiv.find('li.on').index();
    if($this.is('.next')){
      idx ++;
      arte.onMovement($siblingsLi, idx);
    }else if($this.is('.prev')){
      idx --;
      arte.onMovement($siblingsLi, idx);
    }else if($this.is('.modalPageClose')) $modalPage.hide();
  });
});
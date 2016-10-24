'use strict';
define(['arteProject'], function (arteProject) {

  console.log(urlPath);

  var $body = $('body'),
      $mainSlide = $('.mainVisual article'),
      $btnGroup = $('.btnGroup'),
      $prevImg = $('.prev img'),
      $nextImg = $('.next img'),
      $modalPage = $('.modalPage'),
      $btnSubMenu = $('.btnSubMenu'),
      $subMenu = $('.subMenu'),
      $subMenuClose = $('.subMenuClose'),
      $toggleMune = $('.toggleMenu'),
      $familyList = $('.familyList'),
      textImgArray = ['./main/img/arteValor.png','./main/img/arteNormal.png','./main/img/arteConcierto.png'];
  idx = 0;

  $(window).on({
    resize : function(){
     var winHEI = $(this).height(),
         $article = $('#article');

      if(urlPath === '/') $article.css('height',winHEI - 90);

    }
  });
  $(window).trigger("resize");

  var interValFn = function () {
    if(flag == true){
      flag = false;
      arte.slideMovement($mainSlide, idx, 0, "-100%");
      idx++;
      arte.slideMovement($mainSlide, idx, "100%", 0);
      if(urlPath === '/') arte.btnText(textImgArray, $prevImg, $nextImg, idx);
    }
  };

  if(urlPath === '/') var rel = setInterval(interValFn,5000);

  $body.on('click', 'a', function (e) {
    var $this = $(this);
    if($this.attr('href') === "#"){
      e.preventDefault();
      return false;
    }else{ }
  });

  $toggleMune.on('click', function () {
    $familyList.slideToggle();
  });

  $btnSubMenu.on('click', function () {
    arte.subMenuMovement($subMenu, "100%", "340px" ,300, true);
    //if(urlPath == '/') arte.subMenuMovement($subMenu, "100%", "340px" ,300, true);
    //else if(urlPath || '/') arte.subMenuMovement($subMenu, "100%", arte.subMuneSize(windowWID) ,300, true);
    arte.subMenuBg(300);
  });
  $subMenuClose.on('click', function () {
    arte.subMenuMovement($subMenu, "340px", "100%" ,300, false);
    //if(urlPath == '/') arte.subMenuMovement($subMenu, "340px", "100%" ,300, false);
    //else if(urlPath || '/') arte.subMenuMovement($subMenu, arte.subMuneSize(windowWID), "100%" ,300, false);
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
        if(urlPath === '/') arte.btnText(textImgArray, $prevImg, $nextImg, idx);
      }
    }else if($this.is('.prev')){
      if(flag == true){
        flag = false;
        arte.slideMovement($mainSlide, idx, 0, "100%");
        idx --;
        arte.slideMovement($mainSlide, idx, "-100%", 0);
        if(urlPath === '/') arte.btnText(textImgArray, $prevImg, $nextImg, idx);
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
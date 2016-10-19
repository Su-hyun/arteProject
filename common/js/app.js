'use strict';
var idx,
    multiIdx = [],
    flag = true,
    urlPath = location.pathname,
    arte = {
      slideMovement : function (select, index, start, end) {
        var leng = select.length;
        select.eq(index).addClass('on').siblings().removeClass('on');
        select.eq(index).css({display: 'block', left: start})
          .stop().animate({left: end}, function () { flag = true; });
        if (index == leng) {
          idx = 0;
          this.slideMovement(select, idx, "100%", 0);
        } else if (index < 0) {
          idx = leng - 1;
          this.slideMovement(select, idx, "-100%", 0);
        }
      },
      btnText : function(select, pText, nText, index){
        var leng = select.length,
          prevIndex = index - 1,
          nextIndex = index + 1,
          prevInnerText = select[prevIndex],
          nextInnerText = select[nextIndex];
        pText.text(prevInnerText);
        nText.text(nextInnerText);
        if (index == leng - 1) {
          nextIndex = 0;
          nextInnerText = select[nextIndex];
          nText.text(nextInnerText);
        } else if (index == 0) {
          prevIndex = leng - 1;
          prevInnerText = select[prevIndex];
          pText.text(prevInnerText);
        }
      },
      onMovement : function(select, index){
        var leng = select.length;
        select.eq(index).addClass('on').siblings().removeClass('on');
        if(index >= leng){
          idx = leng-1;
          this.onMovement(select, idx);
          alert("마지막입니다");
        }else if(index < 0) {
          idx = 0;
          this.onMovement(select, idx);
          alert("처음입니다.")
        }
      },
      subMenuMovement : function(select, start, end, sec, call){
        flag = call;
        select.css({display:'block', left:start})
          .stop().animate({ left : end}, sec, function(){
            if(flag == false)select.hide();
        });
      },
      subMenuBg : function (sec) {
        $('body').append('<div class="blind"></div>');
        $('.blind').fadeTo(sec,0.7);
      },
      multiSlideMovement : function(select, index, start, end){
        var leng = select.length;
        select.eq(index).addClass('on').siblings().removeClass('on');
        select.eq(index).css({display: 'block', left: start})
          .stop().animate({left: end}, function () { flag = true; });
        if (index == leng) {
          idx = 0;
          this.multiSlideMovement(select, idx, "100%", 0);
        } else if (index < 0) {
          idx = leng - 1;
          this.multiSlideMovement(select, idx, "-100%", 0);
        }
      }
    };
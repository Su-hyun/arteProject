'use strict';
var urlPath = location.pathname,
    idx,
    multiIdx = [],
    flag = true,
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
      btnText : function(select, pSelect, nSelect, index){
        var leng = select.length,
          prevIndex = index - 1,
          nextIndex = index + 1,
          prevInnerUrl = select[prevIndex],
          nextInnerUrl = select[nextIndex];
        pSelect.attr('src',prevInnerUrl);
        nSelect.attr('src',nextInnerUrl);
        if (index == leng - 1) {
          nextIndex = 0;
          nextInnerUrl = select[nextIndex];
          nSelect.attr('src',nextInnerUrl);
        } else if (index == 0) {
          prevIndex = leng - 1;
          prevInnerUrl = select[prevIndex];
          pSelect.attr('src',prevInnerUrl);
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
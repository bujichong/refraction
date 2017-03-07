define({
      init : function () {
        var me = this;
        window.console && console.log('index js init');
        // me.exScreen();//全屏
        me.exSide();//收缩侧边栏
        me.setIframeH();//设置iframeH
        me.sideSlide();//侧边栏点击展开
        me.sideNavE();//侧边导航点击链接事件
      },
      exScreen : function () {
        $('.s-exScreen').click(function () {
          if ($(this).hasClass('s-inScreen')) {
            $.fullscreen(false);
            $(this).removeClass('s-inScreen');
          }else {
            $.fullscreen(true);
            $(this).addClass('s-inScreen');
          }
        });
      },
      exSide : function () {
        $('.extendSide').click(function() {
          var _self = $(this);
          var showMenu=_self.hasClass('intendSide');
          if(showMenu){
            $(".mainCont").animate({left:'202px'});
            $(".sidebar").animate({marginLeft:'0px'});
            _self.removeClass('intendSide');
          }else{
            $(".mainCont").animate({left:'16px'});
            $(".sidebar").animate({marginLeft:'-186px'});
            _self.addClass('intendSide');
          }
        });
      },
      _setIframeH : function () {
          var iframeH = $('.mainCont').height();
          $('#mainIframe').height(iframeH);
      },
      setIframeH : function () {
        var me = this;
        me._setIframeH();
        $(window).resize(function() {
          me._setIframeH();
        });
      },
      sideSlide : function () {
        $('.li-sidenav').click(function() {
          var _self = $(this);
          if (!_self.hasClass('li-sidenav-now')) {
              $('.li-sidenav-now').removeClass('li-sidenav-now').find('.ul-subnav:first').slideUp('fast');
              _self.addClass('li-sidenav-now');
              _self.find('.ul-subnav:first').slideDown('fast');
            };
        });
      },
      sideNavE : function () {
        $('.s-subnav').click(function() {
          var url = $(this).attr('rel');
          if (url) {
            $('.s-subnav').removeClass('s-subnav-now');
            $(this).addClass('s-subnav-now');
            $('#mainIframe').attr('src',url);
          };
        });
      }
});
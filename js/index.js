var eyeIndex = {
      init : function () {
        var me = this;
        window.console && console.log('index js init');
        // me.exScreen();//全屏
        me.exSide();//收缩侧边栏
        me.setIframeH();//设置iframeH
        // me.sideSlide();//侧边栏点击展开
        me.sideNavE();//侧边导航点击链接事件
        me.loginOut();//退出登录
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
      loginOut : function () {
        $('.a-loginOut').click(function () {
          layer.confirm('你确定退出系统吗？', {
              icon: 0, title:false,btnAlign: 'c'
              }, function(){
                window.location.href="login.html";
          });
          return false;
        });

      },
      exSide : function () {
        window.indexInSide =  function () {
            $(".mainCont").animate({left:'0px'});
            $(".sidebar").animate({marginLeft:'-188px'});
        }
        window.indexExSide=  function () {
            $(".mainCont").animate({left:'188px'});
            $(".sidebar").animate({marginLeft:'0px'});
            $('.li-sidenav').removeClass('li-sidenav-now').eq(0).addClass('li-sidenav-now');
            $('.s-sidenav').removeClass('s-sidenav-now');
            $('.s-subnav').removeClass('s-subnav-now');
        }
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
              $('.li-sidenav-now').removeClass('li-sidenav-now');
              // .find('.ul-subnav:first').slideUp('fast');
              _self.addClass('li-sidenav-now');
              // _self.find('.ul-subnav:first').slideDown('fast');
            };
        });
      },
      sideNavE : function () {
        $('.s-subnav,.s-sidenav').click(function() {
          var url = $(this).attr('rel');
          if (url) {
            $('.s-subnav-now').removeClass('s-subnav-now');
            $('.s-sidenav-now').removeClass('s-sidenav-now');
            $(this).addClass('s-subnav-now');
            $('#mainIframe').attr('src',url);
          };
        });
        $('.s-sidenav').click(function() {
          var url = $(this).attr('rel');
          if (url) {
            $('.s-subnav-now').removeClass('s-subnav-now');
            $('.s-sidenav-now').removeClass('s-sidenav-now');
            $(this).addClass('s-sidenav-now');
            $('#mainIframe').attr('src',url);
          };
        });
      }
};

$(function () {
  eyeIndex.init();
});
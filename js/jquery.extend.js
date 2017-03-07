/**--jQuery.json-2.3.js--**/
(function($){var escapeable=/["\\\x00-\x1f\x7f-\x9f]/g,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};$.toJSON=typeof JSON==='object'&&JSON.stringify?JSON.stringify:function(o){if(o===null){return'null';}
    var type=typeof o;if(type==='undefined'){return undefined;}
    if(type==='number'||type==='boolean'){return''+o;}
    if(type==='string'){return $.quoteString(o);}
    if(type==='object'){if(typeof o.toJSON==='function'){return $.toJSON(o.toJSON());}
        if(o.constructor===Date){var month=o.getUTCMonth()+1,day=o.getUTCDate(),year=o.getUTCFullYear(),hours=o.getUTCHours(),minutes=o.getUTCMinutes(),seconds=o.getUTCSeconds(),milli=o.getUTCMilliseconds();if(month<10){month='0'+month;}
            if(day<10){day='0'+day;}
            if(hours<10){hours='0'+hours;}
            if(minutes<10){minutes='0'+minutes;}
            if(seconds<10){seconds='0'+seconds;}
            if(milli<100){milli='0'+milli;}
            if(milli<10){milli='0'+milli;}
            return'"'+year+'-'+month+'-'+day+'T'+
                hours+':'+minutes+':'+seconds+'.'+milli+'Z"';}
        if(o.constructor===Array){var ret=[];for(var i=0;i<o.length;i++){ret.push($.toJSON(o[i])||'null');}
            return'['+ret.join(',')+']';}
        var name,val,pairs=[];for(var k in o){type=typeof k;if(type==='number'){name='"'+k+'"';}else if(type==='string'){name=$.quoteString(k);}else{continue;}
            type=typeof o[k];if(type==='function'||type==='undefined'){continue;}
            val=$.toJSON(o[k]);pairs.push(name+':'+val);}
        return'{'+pairs.join(',')+'}';}};$.evalJSON=typeof JSON==='object'&&JSON.parse?JSON.parse:function(src){return eval('('+src+')');};$.secureEvalJSON=typeof JSON==='object'&&JSON.parse?JSON.parse:function(src){var filtered=src.replace(/\\["\\\/bfnrtu]/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,'');if(/^[\],:{}\s]*$/.test(filtered)){return eval('('+src+')');}else{throw new SyntaxError('Error parsing JSON, source is not valid.');}};$.quoteString=function(string){if(string.match(escapeable)){return'"'+string.replace(escapeable,function(a){var c=meta[a];if(typeof c==='string'){return c;}
        c=a.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+(c%16).toString(16);})+'"';}
    return'"'+string+'"';};})(jQuery);

//jQuery.cookie
jQuery.cookie=function(a,b,c){var d,e,f,g,h,i,j,k,l;if("undefined"==typeof b){if(i=null,document.cookie&&""!=document.cookie)for(j=document.cookie.split(";"),k=0;k<j.length;k++)if(l=jQuery.trim(j[k]),l.substring(0,a.length+1)==a+"="){i=decodeURIComponent(l.substring(a.length+1));break}return i}c=c||{},null===b&&(b="",c.expires=-1),d="",c.expires&&("number"==typeof c.expires||c.expires.toUTCString)&&("number"==typeof c.expires?(e=new Date,e.setTime(e.getTime()+1e3*60*60*24*c.expires)):e=c.expires,d="; expires="+e.toUTCString()),f=c.path?"; path="+c.path:"",g=c.domain?"; domain="+c.domain:"",h=c.secure?"; secure":"",document.cookie=[a,"=",encodeURIComponent(b),d,f,g,h].join("")};

//jQuery.color
(function(d){d.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(f,e){d.fx.step[e]=function(g){if(!g.colorInit){g.start=c(g.elem,e);g.end=b(g.end);g.colorInit=true}g.elem.style[e]="rgb("+[Math.max(Math.min(parseInt((g.pos*(g.end[0]-g.start[0]))+g.start[0]),255),0),Math.max(Math.min(parseInt((g.pos*(g.end[1]-g.start[1]))+g.start[1]),255),0),Math.max(Math.min(parseInt((g.pos*(g.end[2]-g.start[2]))+g.start[2]),255),0)].join(",")+")"}});function b(f){var e;if(f&&f.constructor==Array&&f.length==3){return f}if(e=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(f)){return[parseInt(e[1]),parseInt(e[2]),parseInt(e[3])]}if(e=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(f)){return[parseFloat(e[1])*2.55,parseFloat(e[2])*2.55,parseFloat(e[3])*2.55]}if(e=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(f)){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}if(e=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(f)){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}if(e=/rgba\(0, 0, 0, 0\)/.exec(f)){return a.transparent}return a[d.trim(f).toLowerCase()]}function c(g,e){var f;do{f=d.css(g,e);if(f!=""&&f!="transparent"||d.nodeName(g,"body")){break}e="backgroundColor"}while(g=g.parentNode);return b(f)}var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]}})(jQuery);

/* soChange 1.6.2 - simple object change with jQuery */
(function(a){a.fn.extend({soChange:function(b){b=a.extend({thumbObj:null,btnPrev:null,btnNext:null,changeType:"fade",thumbNowClass:"now",thumbOverEvent:true,slideTime:1000,autoChange:true,clickFalse:true,overStop:true,changeTime:5000,delayTime:300,callback:function(){}},b||{});var h=a(this);var i;var k=h.size();var e=0;var g;var c;var f;function d(){if(e!=g){if(b.thumbObj){a(b.thumbObj).removeClass(b.thumbNowClass).eq(g).addClass(b.thumbNowClass)}if(b.slideTime<=0){h.eq(e).hide();h.eq(g).show()}else{if(b.changeType=="fade"){h.eq(e).fadeOut(b.slideTime);h.eq(g).fadeIn(b.slideTime)}else{h.eq(e).slideUp(b.slideTime);h.eq(g).slideDown(b.slideTime)}}if(b.callback){b.callback(e,g)}e=g}}function j(){g=(e+1)%k;d()}h.hide().eq(0).show();if(b.thumbObj){i=a(b.thumbObj);i.removeClass(b.thumbNowClass).eq(0).addClass(b.thumbNowClass);i.click(function(){g=i.index(a(this));d();if(b.clickFalse){return false}});if(b.thumbOverEvent){i.hover(function(){g=i.index(a(this));f=setTimeout(d,b.delayTime)},function(){clearTimeout(f)})}}if(b.btnNext){a(b.btnNext).click(function(){if(h.queue().length<1){j()}return false})}if(b.btnPrev){a(b.btnPrev).click(function(){if(h.queue().length<1){g=(e+k-1)%k;d()}return false})}if(b.autoChange){c=setInterval(j,b.changeTime);if(b.overStop){h.hover(function(){clearInterval(c)},function(){c=setInterval(j,b.changeTime)})}}}})})(jQuery);

    $.extend({

        /**
         * 地址转换 tree:dept -> /base/treeUrl?_code=dept
         */
        url : function(url) {
            var rst = '';
            if (url.indexOf('/') == -1) {
                var ar = url.split(":");
                rst+=$p[ar[0] + "Url"];
                if(ar[1]) rst+= "?_code=" + ar[1];
            } else {
                rst = url;
            }
            return rst;
        },
        /**
         * 统一的后台ajax请求
         */
        reqUrl : function(url, data, success,maskOpt) {
            var ajaxLoading = null;
            $.ajax({
                url:url,
                type:'post',
                beforeSend:function(jqXHR, settings){
                    maskOpt = $.extend({showMask:false},maskOpt||{});
                    ajaxLoading = $.sobox.loading(maskOpt);
                    //显示"操作中"提示
                },
                complete:function(jqXHR, textStatus){
                    //根据textStatus修改提示
                    //2秒后去掉提示
                },
                data:data,
                dataType:'json',
                success:function (rst) {
                    if(rst&&rst.result){
                        ajaxLoading.close();
                    }
                    success&&success(rst);
                },
                error : function (XMLHttpRequest, textStatus, errorThrown) {
                    ajaxLoading.close();
                    $.sobox.pop({
                        cls : 'so-popError',
                        title : '错误提示',
                        width : 310,
                        showTitle : false,
                        content : '<p class="p-popError">对不起，数据请求失败！</p>请检查网络或联系管理员...',
                        btn :[{text:'确定'}]
                    });
                }
            });
            return ajaxLoading;
        },
        /**
         * 统一的后台ajax请求增强版,增加确认提示技术后台交互提示
         */
        reqUrlEx : function(url, data, sucess, msg,noConfirm) {
            data=data||{};
            var ajaxLoading = null;
            if (noConfirm) {
                ajaxEvent();
            }else {
                $.sobox.confirm("提示",msg||$p.submitTip,function(){
                    ajaxEvent();
                });
            }
            function ajaxEvent() {
                $.ajax({
                    url:url,
                    type:'post',
                    beforeSend:function(jqXHR, settings){
                        ajaxLoading = $.sobox.loading({cls:'so-ajaxLoading',width:158,content : '提交中，请稍候...'});
                        //显示"操作中"提示
                    },
                    complete:function(jqXHR, textStatus){
                        //根据textStatus修改提示
                        //2秒后去掉提示
                    },
                    data:data,
                    dataType:'json',
                    success:function(rst){
                        if(rst){
                            var msg="信息提交成功";
                            if(rst.tip==1){
                                msg=rst.msg;
                            }
                            ajaxLoading.close();
                            if(rst.result){
                                ajaxLoading = $.sobox.loading({cls:'so-ajaxSuccess',width:143,content : msg,stayTime : 1200});
                            }else{
                                $.sobox.pop({
                                    cls : 'so-popError',
                                    title : '错误提示',
                                    width : 310,
                                    showTitle : false,
                                    content : '<p class="p-popError">对不起，提交数据失败！</p>'+msg,
                                    btn :[{text:'确定'}]
                                });
                            }
                            //提示操作成功
                        }
                        if(sucess)sucess(rst);
                    },
                    error : function (XMLHttpRequest, textStatus, errorThrown) {
                        ajaxLoading.close();
                        $.sobox.pop({
                            cls : 'so-popError',
                            title : '错误提示',
                            width : 310,
                            showTitle : false,
                            content : '<p class="p-popError">对不起，提交数据失败！</p>请检查网络或联系管理员...',
                            btn :[{text:'确定'}]
                        });
                    }
                });
            }
        },
        /**
         * 默认值赋值
         * @param o 目标对象
         * @param c 默认值
         * @returns
         */
        applyIf : function(o, c) {
            if (o && c) {
                for ( var p in c) {
                    if (typeof o[p] == "undefined") {
                        o[p] = c[p];
                    }
                }
            }
            return o;
        },
        getFullDate : function (date,type) {// Date,'long/short'
            var that = this;
            if (!(date instanceof Date)) {
                date = new Date(date);
            }
            var year = date.getFullYear();
            var month = date.getMonth()+1;
            var day = date.getDate();
            var hh = date.getHours();// 时
            var mm = date.getMinutes();// 分
             var ss = date.getSeconds();//秒

            month = ('0'+month).slice(-2);
            day = ('0'+day).slice(-2);
            hh = ('0'+hh).slice(-2);
            mm = ('0'+mm).slice(-2);
            ss = ('0'+ss).slice(-2);
            if (type=='short') {
                //return year+'-'+month+'-'+day;
                return month+'-'+day+' '+hh+':'+mm+':'+ss;
            }else {
                return year+'-'+month+'-'+day+' '+hh+':'+mm;
            }
        },
        arrHasVal : function (arr,val) {
            var l = arr.length;
            for (i = 0; i < l; i++) {
                if (arr[i] === val) {
                    return i;
                }
            }
            return -1;
        },
        getLocalTime :function (nS) {// 转时间戳为本地时间
            return new Date(nS*1).toLocaleString().replace(/年|月/g, "-").replace(/日/g," ");
        },
        getTimeLong : function (s) {
            var h = Math.floor(s/3600);
            h = h>9?h:('0'+h);
            var m = Math.floor(s%3600/60);
            m = m>9?m:('0'+m);
            var s = s%3600%60;
            s = s>9?s:('0'+s);
            return h==0?(m+':'+s):(h+':'+m+':'+s);
        },
        fullscreen : function (tofull) {
                if(tofull){
                    var docElm = document.documentElement;
                    if (docElm.requestFullscreen) {
                        window.console && console.log(11);
                        docElm.requestFullscreen();
                    }
                    else if (docElm.mozRequestFullScreen) {
                        window.console && console.log(12);
                        docElm.mozRequestFullScreen();
                    }
                    else if (docElm.webkitRequestFullScreen) {
                        window.console && console.log(13);
                        docElm.webkitRequestFullScreen();
                    }
                }else{
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    }
                    else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    }
                    else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    }
                }
        },
        winW : $(window).width(),
        winH :$(window).height()
    });


    /**
     * 扩充方法
     */
    $.fn.extend({
        hoverClass:function(b){var a=this;a.each(function(c){a.eq(c).mouseenter(function(){$(this).addClass(b)});a.eq(c).mouseleave(function(){$(this).removeClass(b)})});return a},
        focusChangeStyle : function(b){var a=this;var b=(b==null)?"txt_focus":b;a.focus(function(){$(this).addClass(b)});a.blur(function(){$(this).removeClass(b)});return a},
        placeholder : function () {
            return this.each(function () {
                var _this = $(this);
                var holdTxt = _this.attr("placeholder");
                _this.addClass('txtNoVal').val(holdTxt).focus(function () {
                    if (_this.val() === holdTxt) {
                        _this.val("");
                    }
                }).blur(function () {
                    if ($.trim(_this.val().length === 0)) {
                        _this.val(holdTxt).addClass('txtNoVal');
                    }
                }).keyup(function () {
                    if (_this.val()!==holdTxt) {
                        _this.removeClass('txtNoVal');
                    };
                });
            });
        },
        tabChange:function (o) {
            o= $.extend({
                thumbObj:null,//导航对象
                thumbNowClass:'now',//导航对象当前的class,默认为now
                eventClass:'eventStat',
                defaultEvent:function(){},
                callback:function () {},
                oneback:function(){}
            }, o || {});
            var _self = $(this);
            var size = _self.size();
            var thumbObj = $(o.thumbObj);
            _self.removeClass(o.eventClass).eq(0).addClass(o.eventClass);
            thumbObj.eq(0).addClass(o.thumbNowClass);
            o.defaultEvent();

            thumbObj.click(function () {
                var indx = thumbObj.index($(this));
                thumbObj.removeClass(o.thumbNowClass);
                $(this).addClass(o.thumbNowClass);
                _self.removeClass(o.eventClass).eq(indx).addClass(o.eventClass);
                return o.callback(indx);
            });
            thumbObj.each(function (i) {
                if (i>0) {
                    $(this).one('click',function () {
                        return o.oneback(i);
                    });
                }
            });
        },
        switchShow:function(cls,scope){
            $(this).click(function(){
                var $scope=scope?$(scope):$("body");
                $scope.find(cls).hide();
                var vl=$(this).val()||$(this).attr("data-value");
                $scope.find(cls+"_"+vl).show();
            });
            return $(this);
        },
        /**
         * 取ID范围内所有值 $('#id').vals(空或true) -->{xx:yy} $('#id').vals(flase)
         * -->xx=yy 赋值 $('#id').vals({xx:yy})
         */
        vals : function(param) {
            if (typeof (param) == 'boolean' || param === undefined) {
                var c = {};// 暂存checkbox,选中的值用逗号隔开
                this.each(function() {
                    if(/input/i.test(this.tagName)){
                        if(this.type=='button'||this.type=='submit'){
                            return;
                        }

                        var key = this.name || this.id;
                        if (/checkbox/i.test(this.type)) {
                            var val = this.checked ? (this.value || 'on') : '';
                            if(val!=''){
                                if (c[key]) {
                                    c[key] = c[key] + "," + val;
                                } else {
                                    c[key] = val;
                                }
                            }
                        } else if (/radio/i.test(this.type)) {
                            if (this.checked){
                                c[key] = $.trim($(this).val());
                            }
                        } else {
                            c[key] = $.trim($(this).val());
                        }
                    } else if (/select/i.test(this.tagName)) {
                        var key = this.name || this.id;
                        c[key] = $.trim($(this).val()) + "";
                    } else if ($(this).has(":input").length) {
                        var sub = $(":input", this).vals();
                        $.extend(c, sub);
                    } else {
                        if(this.type=='button'||this.type=='submit'){
                            return;
                        }
                        var key = this.name || this.id;
                        c[key] = $.trim($(this).val());
                    }
                    //console.timeEnd(xx);
                });
                return param !== false ? c : $.param(c);
            } else if (typeof (param) == 'object') {
                this.each(function() {
                    if (/div|span|table|form|ul|li/i.test(this.tagName)) {
                        $(":input,label,b", this).vals(param);
                    } else {
                        var nm = this.name || this.id;
                        if(nm){
                            var vl    = param[nm],
                              arr  = nm.match(/(\w*)\[(\d*)\]/),
                              obj  = nm.match(/(\w*)\.(\w*)/);
                        if(arr&&arr.length==3){
                            vl=param[arr[1]][arr[2]];
                        }
                        if(obj&&obj.length==3){
                            vl=param[arr[1]][arr[2]];
                        }
                        if (vl !== undefined && vl !== null) {
                            if (/label|b/i.test(this.tagName)) {
                                $(this).text(vl);
                            }else if(/checkbox/i.test(this.type)){
                                if(vl===true) {
                                    $(this).attr("checked","checked");
                                }else{
                                    $(this).removeAttr("checked");
                                }
                            }else if(/radio/i.test(this.type)){
                                if(vl===true){
                                    if($(this).val()==='true'||$(this).val()==='1'){
                                        $(this).attr("checked","checked");
                                    }
                                }else{
                                    if($(this).val()==='false'||$(this).val()==='0'){
                                        $(this).attr("checked","checked");
                                    }
                                }
                            }else  {
                                $(this).val(vl);
                            }
                        }
                        }
                    }
                });
            }
        },
        clear : function(data) {
            $(":input:not(:submit)", this).val("");
            if (data)
                $(this).vals(data);
        }
    });

var $T = {
    getCookie : function (key,co) {
        var co = co||'aso',$co = $.cookie(co);
        if ($co!==null) {
            var coArr = $co.split('||');
            var coLen = coArr.length;
            for (i = 0; i < coLen; i++) {
                var vk = coArr[i].split(':=');
                if (vk[0] === key) {
                    return vk[1];
                }
            }
        }else {
            return null;
        }
    },
    setCookie : function (key,value,co,root) {
        root = root==undefined?true:root;
        var co = co||'aso',$co = $.cookie(co);
        var coVal;
        if ($co!==null) {
            if ($co.indexOf(key)>-1) {
                var coArr = $co.split('||');
                var coLen = coArr.length;
                for (i = 0; i < coLen; i++) {
                    var vk = coArr[i].split(':=');
                    if (vk[0] === key) {
                        coArr[i] = key+':='+value;
                    }
                }
                coVal = coArr.join('||');
            }else {
                coVal = $co+'||'+key+':='+value;
            }
        }else {
            coVal = key+':='+value;
        }
        if (root) {
            $.cookie(co,coVal,{ path: '/'});
        }else {
            $.cookie(co,coVal);
        }
        window.console && console.log('cooke中 '+co+'更新为 " '+$.cookie(co)+' " ');
    }
}

$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [ o[this.name] ];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    $.each(o,function (k,v) {
        if (v.push) {
            o[k] = v.join(',');
        }
    });
    return o;
}
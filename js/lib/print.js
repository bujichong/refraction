var CreatedOKLodop7766=null;
var $print={
    tip:function (msg) {
        $.sobox.alert("提示",msg);
    },
    needCLodop:function () {
        try{
            var ua=navigator.userAgent;
            if (ua.match(/Windows\sPhone/i) !=null) return true;
            if (ua.match(/iPhone|iPod/i) != null) return true;
            if (ua.match(/Android/i) != null) return true;
            if (ua.match(/Edge\D?\d+/i) != null) return true;
            if (ua.match(/QQBrowser/i) != null) return false;
            var verTrident=ua.match(/Trident\D?\d+/i);
            var verIE=ua.match(/MSIE\D?\d+/i);
            var verOPR=ua.match(/OPR\D?\d+/i);
            var verFF=ua.match(/Firefox\D?\d+/i);
            var x64=ua.match(/x64/i);
            if ((verTrident==null)&&(verIE==null)&&(x64!==null))
                return true; else
            if ( verFF !== null) {
                verFF = verFF[0].match(/\d+/);
                if ( verFF[0] >= 42 ) return true;
            } else
            if ( verOPR !== null) {
                verOPR = verOPR[0].match(/\d+/);
                if ( verOPR[0] >= 32 ) return true;
            } else
            if ((verTrident==null)&&(verIE==null)) {
                var verChrome=ua.match(/Chrome\D?\d+/i);
                if ( verChrome !== null ) {
                    verChrome = verChrome[0].match(/\d+/);
                    if (verChrome[0]>=42) return true;
                };
            };
            return false;
        } catch(err) {return true;};
    },
    init:function () {
        if(this.needCLodop()){
            var head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
            var oscript = document.createElement("script");
            oscript.src ="http://localhost:8000/CLodopfuncs.js?priority=1";
            head.insertBefore( oscript,head.firstChild );
            //本机云打印的后补端口8001：
            oscript = document.createElement("script");
            oscript.src ="http://localhost:8001/CLodopfuncs.js?priority=2";
            head.insertBefore( oscript,head.firstChild );
        }
    },
    getLodop:function (oOBJECT,oEMBED) {
        var strHtmInstall="打印控件未安装!点击这里<a href='/down/install_lodop32.exe' target='_self'>执行安装</a>,安装后请刷新页面或重新进入。";
        var strHtmUpdate="打印控件需要升级!点击这里<a href='/down/install_lodop32.exe' target='_self'>执行升级</a>,升级后请重新进入。";
        var strHtm64_Install="打印控件未安装!点击这里<a href='/down/install_lodop64.exe' target='_self'>执行安装</a>,安装后请刷新页面或重新进入。";
        var strHtm64_Update="打印控件需要升级!点击这里<a href='/down/install_lodop64.exe' target='_self'>执行升级</a>,升级后请重新进入。";
        var strHtmFireFox="（注意：如曾安装过Lodop旧版附件npActiveXPLugin,请在【工具】->【附加组件】->【扩展】中先卸它）";
        var strHtmChrome="(如果此前正常，仅因浏览器升级或重安装而出问题，需重新执行以上安装）";
        var strCLodopInstall="打印控件未安装!<a class='red' href='/down/CLodop_Setup_for_Win32NT.exe' target='_self'>点击安装</a>,安装后请刷新页面。";
        var strCLodopUpdate="打印控件需升级!<a class='red' href='/down/CLodop_Setup_for_Win32NT.exe' target='_self'>点击升级</a>,升级后请刷新页面。";
        var LODOP;
        try{
            var isIE = (navigator.userAgent.indexOf('MSIE')>=0) || (navigator.userAgent.indexOf('Trident')>=0);
            if (this.needCLodop()) {
                try{ LODOP=getCLodop();} catch(err) {console.log(err)};
                if (!LODOP && document.readyState!=="complete") {alert("C-Lodop没准备好，请稍后再试！"); return;};
                if (!LODOP) {
                    this.tip(strCLodopInstall);
                    return;
                } else {
                    if (CLODOP.CVERSION<"2.0.6.2") {
                        this.tip(strCLodopUpdate);
                    };
                    if (oEMBED && oEMBED.parentNode) oEMBED.parentNode.removeChild(oEMBED);
                    if (oOBJECT && oOBJECT.parentNode) oOBJECT.parentNode.removeChild(oOBJECT);
                };
            } else {
                var is64IE  = isIE && (navigator.userAgent.indexOf('x64')>=0);
                //=====如果页面有Lodop就直接使用，没有则新建:==========
                if (oOBJECT!=undefined || oEMBED!=undefined) {
                    if (isIE) LODOP=oOBJECT; else  LODOP=oEMBED;
                } else if (CreatedOKLodop7766==null){
                    LODOP=document.createElement("object");
                    LODOP.setAttribute("width",0);
                    LODOP.setAttribute("height",0);
                    LODOP.setAttribute("style","position:absolute;left:0px;top:-100px;width:0px;height:0px;");
                    if (isIE) LODOP.setAttribute("classid","clsid:2105C259-1E0C-4534-8141-A753534CB4CA");
                    else LODOP.setAttribute("type","application/x-print-lodop");
                    document.documentElement.appendChild(LODOP);
                    CreatedOKLodop7766=LODOP;
                } else LODOP=CreatedOKLodop7766;
                //=====Lodop插件未安装时提示下载地址:==========
                if ((LODOP==null)||(typeof(LODOP.VERSION)=="undefined")) {
                    if (navigator.userAgent.indexOf('Chrome')>=0)
                        this.tip(strHtmChrome);
                    if (navigator.userAgent.indexOf('Firefox')>=0)
                        this.tip(strHtmFireFox);
                    if (is64IE) this.tip(strHtm64_Install); else
                    if (isIE)   this.tip(strHtmInstall);    else
                        this.tip(strHtmInstall);
                    return LODOP;
                };
            };
            if (LODOP.VERSION<"6.2.0.5") {
                if (this.needCLodop())
                    this.tip(strCLodopUpdate); else
                if (is64IE) this.tip(strHtm64_Update); else
                if (isIE) this.tip(strHtmUpdate); else
                    this.tip(strHtmUpdate);
                return LODOP;
            };
            //===如下空白位置适合调用统一功能(如注册语句、语言选择等):===
            LODOP.SET_LICENSES("\u6e56\u5357\u4e09\u4e00\u667a\u80fd\u63a7\u5236\u8bbe\u5907\u6709\u9650\u516c\u53f8", "956677782747490857294958093190","", "");
            //===========================================================
            return LODOP;
        } catch(err) {alert("getLodop出错:"+err);};
    },
    printHtml:function(html,auto){
        var num=0,LODOP=this.getLodop();
        LODOP.SET_PRINT_STYLE("FontSize",18);
        LODOP.SET_PRINT_STYLE("Bold",1);
        LODOP.ADD_PRINT_HTM(0,0,'210mm','297mm',html);
        if (auto){
            num=LODOP.PRINT();
        }else{
            num=LODOP.PREVIEW();
        }
        return num;
    },
    print : function(typeCode, data, auto,callback) {
        if($.isFunction(auto)){
            callback=auto;
            auto=false;
        }
        var params={typeCode : typeCode},LODOP = this.getLodop();
        if($.isPlainObject(data)){
            params.stationId=data.station_id;
            $ajax.post("/sys/widget/printTpl",params).done(function (rst) {
                var strArr = rst.data.codes.split(';');
                var newStr = $.map(strArr, function(str) {
                    return str.replace(/(.*)\{(.*)\}(.*)".*"(.*)/, function(v0, v1,
                                                                            v2, v3, v4) {
                        return (v1 + v3 + '"' + (data[v2]||'') + '"' + v4);
                    });
                });
                eval(newStr.join(';'));
                var num=0;
                var printer=rst.data.printer;
                if(printer){
                    LODOP.SET_PRINTER_INDEXA(printer);
                }
                if (auto){
                    num=LODOP.PRINT()?1:0;
                }else{
                    num=LODOP.PREVIEW();
                }
                if(callback)callback(num,data);
            });
        }else{
            params.dataId=data;
            $ajax.post("/sys/widget/print",params).done(function (rst) {
                var strArr = rst.data.printBills[0].codes.split(';');
                var param = rst.data.printDatas!=null?rst.data.printDatas[0]:data;
                var newStr = $.map(strArr, function(str) {
                    return str.replace(/(.*)\{(.*)\}(.*)".*"(.*)/, function(v0, v1,
                                                                            v2, v3, v4) {
                        return (v1 + v3 + '"' + (param[v2]||'') + '"' + v4);
                    });
                });
                eval(newStr.join(';'));
                var num=1;
                var printer=rst.data.printBills[0].printer;
                if(printer){
                    LODOP.SET_PRINTER_INDEXA(printer);
                }
                if (auto){
                    num=LODOP.PRINT()?1:0;
                }else{
                    num=LODOP.PREVIEW();
                }
                if(callback)callback(num,data);
            });
        }
    }
};
$print.init();
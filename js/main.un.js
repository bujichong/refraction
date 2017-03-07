/**console.log **/
(function(){var method;var noop=function(){};var methods=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"];var length=methods.length;var console=(window.console=window.console||{});while(length--){method=methods[length];if(!console[method]){console[method]=noop}}}());

var v=".js?v="+(new Date()).getTime();
require.config({
    map: {
        '*': {'css': 'css.min'}
    },
    paths: {
        "my97":"lib/my97/WdatePicker",
        "jquery": "jquery-1.8.3.min",
        "jquery.validate": "lib/jquery.validate",
        "jquery.extend": "jquery.extend",
        "bootstrap": "bootstrap.min",
        "easyui":"lib/easyui/jquery.easyui.min",
        // "jquery.jdirk": "lib/easyui/jquery.jdirk",
        "easyui.extend":"lib/easyui/jquery.easyui.extend",
        "md5":"lib/md5",
        "param":"lib/param",
        "pub":"lib/pub"+v,
        "print":"lib/print",
        "layer.min":"lib/layer/layer.min",
        "pinyin_dict":"lib/pinyinjs/dict/pinyin_dict",
        "pinyin":"lib/pinyinjs/pinyinUtil",
        "template":"lib/template",
        "echarts":"lib/echarts/echarts",
        "echartsMap":"lib/echarts/echarts-map",
        "chinaMap":"lib/echarts/china",
        "WebUploader":"lib/webuploader/webuploader.min",
        "myupload":"lib/webuploader/MyAmdWebUpload",
        'baidueditor': 'lib/ueditor1.4.3.3-utf8-jsp/myue',
        'bdlang': 'lib/ueditor1.4.3.3-utf8-jsp/lang/zh-cn/zh-cn',
        'zeroclipboard': 'lib/ueditor1.4.3.3-utf8-jsp/third-party/zeroclipboard/ZeroClipboard.min'
    },
    shim:{
        "jquery.validate":['jquery'],
        "layer.min":['jquery'],
        "jquery.extend":['param','layer.min','jquery.validate','my97'],
        "easyui":['jquery'],
        // "jquery.jdirk":['jquery'],
        "easyui.extend":['easyui'],
        "bootstrap":['jquery'],
        'pinyin': ['pinyin_dict'],
        'template': {exports: 'template'},
        "chinaMap":['echarts','echartsMap'],
        "pub":['jquery.extend','easyui.extend'],
        'baidueditor': {deps: ['lib/ueditor1.4.3.3-utf8-jsp/ueditor.config', 'css!lib/ueditor1.4.3.3-utf8-jsp/themes/default/css/ueditor']},
        'bdlang':{deps: ['baidueditor']}
    }
});

require(["pub"],function(){
    var crumb=$('body').attr("data-js");
    if(crumb){
        var crumbArr = crumb.split(":");
        var modId = crumbArr[0] , funcId = crumbArr[1]||'init';
        window.console && console.log('page执行 app/'+modId+'.js中的'+funcId+'方法');
        require(['app/'+modId],function(mod){
        // require(['app/'+modId],function(mod){
            if(mod){
                var init=mod[funcId];
                if(init&&$.isFunction(init)){
                    mod[funcId](window);
                }else{
                    window.console && console.log("请在"+modId+".js文件中定义"+funcId+"方法");
                }
            }
        });
    }
});
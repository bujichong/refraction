require.config({
    map: {
        '*': {'css': 'css.min'}
    },
    paths: {
        "jquery": "jquery-1.11.3.min",
        'baidueditor': 'lib/ueditor1.4.3.3-utf8-jsp/myue',
        'bdlang': 'lib/ueditor1.4.3.3-utf8-jsp/lang/zh-cn/zh-cn',
        'zeroclipboard': 'lib/ueditor1.4.3.3-utf8-jsp/third-party/zeroclipboard/ZeroClipboard.min'
    },
    shim:{
        'baidueditor': {deps: ['lib/ueditor1.4.3.3-utf8-jsp/ueditor.config', 'css!lib/ueditor1.4.3.3-utf8-jsp/themes/default/css/ueditor']},
        'bdlang':{deps: ['baidueditor']}
    }
});
require(['baidueditor', 'zeroclipboard', 'bdlang'], function(UE, zcl){
    window.console && console.log(11);
    window.ZeroClipboard = zcl;
    var ue = UE.getEditor('editor');
});
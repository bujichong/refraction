//node r.js -o build-bmap.js
require.config({
    // baseUrl: "/",
    paths: {
        "my97":"lib/my97/WdatePicker",
        "jquery": "jquery-1.8.3.min",
        "jquery.validate": "lib/jquery.validate",
        "jquery.extend": "jquery.extend",
        "bootstrap": "bootstrap.min",
        "easyui":"lib/easyui/jquery.easyui.min",
        "easyui.extend":"lib/easyui/jquery.easyui.extend",
        "md5":"lib/md5",
        "param":"lib/param",
        "pub":"lib/pub",
        "print":"lib/print",
        "layer.min":"lib/layer/layer.min",
        "template":"lib/template",
        "echarts":"lib/echarts/echarts",
        "echartsMap":"lib/echarts/echarts-map",
        "chinaMap":"lib/echarts/china",
        "WebUploader":"lib/webuploader/webuploader.min",
        "myupload":"lib/webuploader/MyAmdWebUpload",
        "baidueditor": "lib/ueditor1.4.3.3-utf8-jsp/myue",
        "bdlang": "lib/ueditor1.4.3.3-utf8-jsp/lang/zh-cn/zh-cn",
        "zeroclipboard": "lib/ueditor1.4.3.3-utf8-jsp/third-party/zeroclipboard/ZeroClipboard.min"
    },
    shim:{
        "jquery.validate":["jquery"],
        "layer.min":["jquery"],
        "jquery.extend":["param","layer.min","jquery.validate","my97"],
        "easyui":["jquery"],
        "easyui.extend":["easyui"],
        "bootstrap":["jquery"],
        "template": {"exports": "template"},
        "chinaMap":["echarts","echartsMap"],
        "pub":["jquery.extend","easyui.extend"],
        "baidueditor": {"deps": ["lib/ueditor1.4.3.3-utf8-jsp/ueditor.config", "css!lib/ueditor1.4.3.3-utf8-jsp/themes/default/css/ueditor"]},
        "bdlang":{"deps": ["baidueditor"]}
    }
});
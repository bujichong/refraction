define(['baidueditor', 'zeroclipboard', 'bdlang'], function(UE, zcl){
    return function(){
        window.ZeroClipboard = zcl;
        if ($('.hk_editor').length) {
          $('.hk_editor').each(function () {
            var ueName = $(this).attr('class').match(/editorkey_.+/g)||['editorkey_eyeUe'];
            ueName = ueName[0].split(/ |_/)[1];
            window[ueName] = UE.getEditor('editor');
          });
        };
    }
});
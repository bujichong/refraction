define(['pinyin'],function () {
    var back  ={
      baseInfo : function () {
        window.console && console.log('baseInfo init');
        $(function () {

          $('#userName').keyup(function () {
            var txt = $(this).val();
            $('#namePinyin').val(pinyinUtil.getPinyin(txt, '', false, false));
          });
        })

      },
    diagnosed : function () {
      window.console && console.log('diagnosed init');

    $('#doctor').combogrid({
        panelWidth:260,
        // panelHeight:300,
        delay: 500,
        mode: 'remote',
        url:'json/list.js',
        idField: 'realName',
        striped : true,
        fitColumns : true,
        textField: 'realName',
        columns: [[
           {title:'id',field:'id',width:80}
          ,{title:'姓名',field:'realName',width:100}
          ,{title:'性别',field:'sex',sortable:true,width:80}
        ]]
    });


      $('.s-opDel').click(function () {
        $(this).parents('.tr-op').remove();
      });
      $('.s-opTr').click(function () {
        $('.tbody-op').append('<tr class="tr-op"><td><select class="drop form-control needinput" name="drop"><option value="" selected="selected">请选择</option><option value="1">药品1号</option></select></td><td><select class="drop form-control needinput" name="drop"><option value="" selected="selected">请选择</option><option value="1">右眼</option><option value="2">左眼</option><option value="3" >双眼</option></select></td><td><select class="drop form-control needinput" name="drop"><option value="" selected="selected">请选择</option><option value="1">Bid</option><option value="2">qid</option><option value="3">tid</option><option value="4">qd</option></select></td><td><input class="form-control pInt" type="text" name="day" value="" maxlength="20" placeholder="" /></td><td class="td-op"><span class="s-opDel">-</span></td></tr>');
        $('.tbody-op').find('.s-opDel:last').click(function () {
          $(this).parents('.tr-op').remove();
        });
      });
    },
    flapreview : function (ulId) {
      window.updateMenu = function (data) {
        // window.console && console.log(data);
        var $ul = $(parent.window.document).find(ulId);
        window.console && console.log($ul);
        $ul.append('<li class="li-subnav"><span class="s-subnav" rel="'+data.url+'">'+data.title+'</span></li>');
      }
    }
  }
  return back;
});
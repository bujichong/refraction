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
      $('.s-opDel').click(function () {
        $(this).parents('.tr-op').remove();
      });
      $('.s-opTr').click(function () {
        $('.tbody-op').append('<tr class="tr-op"><td><select class="drop form-control needinput" name="drop"><option value="" selected="selected">请选择</option><option value="1">药品1号</option></select></td><td><select class="drop form-control needinput" name="drop"><option value="" selected="selected">请选择</option><option value="1">右眼</option><option value="2">左眼</option><option value="3" >双眼</option></select></td><td><select class="drop form-control needinput" name="drop"><option value="" selected="selected">请选择</option><option value="1">Bid</option><option value="2">qid</option><option value="3">tid</option><option value="4">qd</option></select></td><td><input class="form-control pInt" type="text" name="day" value="" maxlength="20" placeholder="" /></td><td class="td-op"><span class="s-opDel">-</span></td></tr>');
        $('.tbody-op').find('.s-opDel:last').click(function () {
          $(this).parents('.tr-op').remove();
        });
      });
    }
  }
  return back;
});
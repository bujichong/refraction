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
        $('.tbody-op').append('<tr class="tr-op"><td><select class="drop form-control" name="drop"><option value="" selected="selected">药品1号</option></select></td><td><select class="drop form-control" name="drop"><option value="1" selected="selected">左眼</option><option value="2" >右眼</option></select></td><td><select class="drop form-control" name="drop"><option value="1" selected="selected">qid</option></select></td><td><input class="form-control" type="text" name="day" value="" maxlength="20" placeholder="" /></td><td class="td-op"><span class="s-opDel">-</span></td></tr>');
        $('.tbody-op').find('.s-opDel:last').click(function () {
          $(this).parents('.tr-op').remove();
        });
      });
    }
  }
  return back;
});
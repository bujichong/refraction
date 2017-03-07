define({
  init : function () {
      window.console && console.log('listTest init');
      $grid.newGrid("#gridBox",{
        // toolbar:'#baseToobar',
        tools:[
          {iconCls:'plus',btnCls:'info',text:'新增',url:'addUserForm.html',popHeight:210,popWidth:480,title:'用户信息-新增'}
          // ,{iconCls:'pencil',btnCls:'warning',text:'修改',onlyOne:true,popHeight:390,url:'form.html?id={id}',title:'用户信息-修改',notNull:'请选择你要修改的记录!'}
          ,{iconCls:'trash',btnCls:'info',text:'删除',check:true,url:'json/true.js?id={id}',notNull:'请 <strong class="red">勾选</strong> 需要删除的一项或多项！', ajax:true,ajaxMsg:'你确定删除选中的用户记录吗？'}
        ],
        rownumbers : false,
        fitColumns : false,
        // singleSelect : false,
        checkOnSelect : false,
        selectOnCheck : false,
        columns:[[
           {title:'id',field:'id',checkbox:true}
          ,{title:'操作',field:'op',width:80,formatter: function(value,row,index){
             return '<a class="a-op a-opEdit" href="userIndex.html?id='+row.id+'" target="_parent">编辑</a><a class="a-op a-opDel" href="json/true.js?id='+row.id+'">删除</a>'
          }}
          ,{title:'完整度',field:'degree',sortable:true,width:100,formatter : function (value,row,index) {
            return '<span class="'+(value=='100%'?'orange':'blue')+'">'+value+'</span>';
          }}
          ,{title:'姓名',field:'realName',sortable:true,width:100}
          ,{title:'性别',field:'sex',sortable:true,width:60
          // ,formatter:function(r){
          //       return ['','男','女'][r];
          //     }
            }
          ,{title:'年龄',field:'age',sortable:true,width:60}
          ,{title:'电话号码',field:'phone',width:100}
          ,{title:'手术日期',field:'opDate',width:120,format:'yyyy-MM-dd'}
          ,{title:'手术类型',field:'opType',width:140}
          ,{title:'初诊日期',field:'firstVisitDate',width:120,format:'yyyy-MM-dd'}
          ,{title:'证件号码',field:'cardNO',width:160}
          ,{title:'复查',field:'review',width:100}
          ,{title:'门诊号',field:'outpatient',width:100}
        ]],
        url:'json/list.js',
        onLoadSuccess : function (data) {
          $('.a-opDel').click(function () {
            var url  = $(this).attr('href');
            $ajax.post(url,{}, '确定删除这条用户记录？').done(function (rst) {
                if (rst.state) {
                    $grid.reload('#gridBox');
                }
            });
            return false;
          });
        }
        // ,offset : -50
      });



  }
});
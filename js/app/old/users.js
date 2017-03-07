define(function () {
    var back  ={
    init : function () {
      $grid.newGrid("#gridBox",{
        toolbar:[
          {iconCls:'icon-add',text:'新增',url:'userForm.html',noMax: true,popHeight:350,title:'用户信息-新增',rowNullMsg:'请选择你要修改的记录!'}
          ,{iconCls:'icon-del',text:'删除',onlyOne:true,url:'json/true.js?id={id}',rowNullMsg:'请选择你要删除的记录!',ajax:true}
        ],
        columns:[[
           {title:'id',field:'id',hidden:true}
          ,{title:'用户名',field:'userName',width:100}
          ,{title:'姓名',field:'realName',width:100}
          ,{title:'性别',field:'sex',width:60,formatter:function(r){
                return ['','男','女'][r];
              }
            }
          ,{title:'部门',field:'orgName',width:60}
          ,{title:'手机号',field:'mobile',width:100}
          ,{title:'Email',field:'email',width:100}
          ,{title:'QQ',field:'QQ',width:100}
          ,{title:'微信号',field:'weChat',width:100}
          ,{title:'最后登录时间',field:'lastLoginTime',width:120}
          ,{title:'最后登录IP',field:'lastLoginIp',width:100}
          ,{title:'状态',field:'state',width:60,formatter:function(r){
            var stateHtml = ['','<span class="green">正常</span>','<span class="orange">停用</span>'];
                // window.console && console.log(r);
                return stateHtml[r];
              }
            }
          ,{title:'创建日期',field:'createTime',width:120}
          ,{title:'最后修改时间',field:'lastModifyTime',width:120}
        ]],
        url:'json/users.js'
      });
    }
  }
  return back;
});
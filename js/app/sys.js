define(function () {
    var back  ={
    users : function () {
      $grid.newGrid("#gridBox",{
        // toolbar:'#baseToobar',
        tools:[
        [{iconCls:'plus',text:'新增',url:'userForm.html',popHeight:400,popWidth:560,title:'用户信息-新增'}
          ,{iconCls:'pencil',btnCls:'warning',text:'修改',onlyOne:true,popHeight:400,popWidth:560,popMax:true,url:'userForm.html?id={id}',title:'用户信息-修改',notNull:'请选择你要修改的记录!'}
          ,{iconCls:'trash',btnCls:'danger',text:'删除',check:true,url:'json/true.js?id={id}',notNull:'请 <strong class="red">勾选</strong> 需要删除的一项或多项！', ajax:true,ajaxMsg:'你确定提交此删除操作吗？'}]
          ,[{iconCls:'refresh',btnCls:'warning',text:'重置密码',check:true,url:'json/true.js?id={id}',notNull:'请 <strong class="red">勾选</strong> 需要重置密码的一项或多项！', ajax:true,ajaxMsg:'你确定重置密码为 <strong class="orange">123456</strong> 吗？'}
          ,{iconCls:'repeat',btnCls:'warning',text:'更新状态',check:true,url:'json/true.js?id={id}',notNull:'请 <strong class="red">勾选</strong> 需要更新状态的一项或多项！', ajax:true,ajaxMsg:'你确定提交此更新操作吗？'}]
          ,[{iconCls:'pushpin',text:'分配角色',url:'userRole.html?id={id}',onlyOne:true,popHeight:380,popWidth:360,title:'用户信息-分配角色',notNull:'请选择你要分配角色的用户！'}]
          // ,{iconCls:'share-alt',text:'撤销角色',url:'userRole.html?id={id}',onlyOne:true,popHeight:380,popWidth:360,title:'用户信息-撤销角色',notNull:'请选择你要撤销角色的用户！'}
        ],
        rownumbers : false,
        fitColumns : false,
        // singleSelect : false,
        checkOnSelect : false,
        selectOnCheck : false,
        columns:[[
           {title:'id',field:'id',checkbox:true}
          ,{title:'用户名',field:'userName',sortable:true,width:100}
          ,{title:'姓名',field:'realName',sortable:true,width:100}
          ,{title:'性别',field:'sex',sortable:true,width:100,formatter:function(r){
                return ['','男','女'][r];
              }
            }
          ,{title:'部门',field:'orgName',sortable:true,width:120}
          ,{title:'手机号',field:'mobile',width:120}
          ,{title:'Email',field:'email',width:120}
          ,{title:'QQ',field:'QQ',width:140}
          ,{title:'微信号',field:'weChat',width:140}
          ,{title:'最后登录时间',field:'lastLoginTime',width:150}
          ,{title:'最后登录IP',field:'lastLoginIp',width:130}
          ,{title:'状态',field:'state',width:100,formatter:function(r){
            var stateHtml = ['','<span class="green">正常</span>','<span class="orange">停用</span>'];
                // window.console && console.log(r);
                return stateHtml[r];
              }
            }
          ,{title:'创建日期',field:'createTime',width:150,format:'yyyy-MM-dd hh:mm:ss'}
          ,{title:'最后修改时间',field:'lastModifyTime',width:150}
        ]],
        url:'json/users.js'
        // ,offset : -50
      });
    },
    role : function () {
      $grid.newGrid("#gridBox",{
        tools:[
          [{iconCls:'plus',text:'新增',url:'roleForm.html',noMax: true,popHeight:240,popWidth:420,title:'角色信息-新增'}
          ,{iconCls:'trash',btnCls:'danger',text:'删除',check:true,url:'json/true.js?id={id}',notNull:'请 <strong class="red">勾选</strong> 需要删除的一项或多项！', ajax:true}]
          ,[{iconCls:'user',btnCls:'primary',text:'查看权限',url:'rolePower.html?id={id}',onlyOne:true,popHeight:380,popWidth:360,title:'角色信息-查看权限',notNull:'请选择你要查看权限的用户行！'}
          ,{iconCls:'user',btnCls:'warning',text:'设置权限',url:'setRolePower.html?id={id}',onlyOne:true,popMax:true,popHeight:420,popWidth:700,title:'角色信息-设置权限',notNull:'请选择你要设置权限的用户行！'}]
        ],
        rownumbers : false,
        // singleSelect : false,
        checkOnSelect : false,
        selectOnCheck : false,
        columns:[[
           {title:'id',field:'id',checkbox:true}
          ,{title:'角色名称',field:'name',width:100}
          // ,{title:'状态',field:'realName',width:100}
          ,{title:'状态',field:'state',width:60,formatter:function(r){
                return ['','启动','停用'][r];
              }
            }
          ,{title:'描述',field:'desc',width:60}
          ,{title:'创建时间',field:'createTime',width:140}
        ]],
        url:'json/role.js'
        // ,offset : -50
      });
    },
    dict : function () {
      $grid.newGrid("#gridBox",{
        tools:[
          [{iconCls:'plus',text:'新增',url:'dictAdd.html',popHeight:330,title:'数据字典-新增'}
          ,{iconCls:'pencil',btnCls:'warning',text:'修改',onlyOne:true,popHeight:330,url:'dictAdd.html?id={id}',title:'数据字典-修改',notNull:'请选择你要修改的记录!'}
          ,{iconCls:'trash',btnCls:'danger',text:'删除',check:true,url:'json/true.js?id={id}',notNull:'请 <strong class="red">勾选</strong> 需要删除的一项或多项！', ajax:true}]
        ],
        fitColumns : true,
        rownumbers : false,
        // singleSelect : false,
        checkOnSelect : false,
        selectOnCheck : false,
        columns:[[
           {title:'id',field:'id',checkbox:true}
          ,{title:'组别',field:'group',width:90}
          ,{title:'类别',field:'type',width:90}
          ,{title:'字典项标识',field:'key',width:120}
          ,{title:'字典项值',field:'value',width:100}
          ,{title:'排序',field:'sort',width:100}
          ,{title:'状态',field:'status',width:70,formatter:function(r){
                return ['','<span class="green">启动</span>','<span class="red">停用</span>'][r];
              }
            }
          ,{title:'描述',field:'desc',width:100}
          ,{title:'更新时间',field:'modifyDate',width:140}
          ,{title:'更新人',field:'modifyer',width:100}
        ]],
        url:'json/dict.js'
        // ,offset : -50
      });
    },
    userRole : function () {
      $('#ul-roleTree').tree({
        animate : true,
        url : 'json/roleTree.js',
        // onlyLeafCheck : true,
        checkbox : true,
        lines : true,
        flatData : true,//采用扁平化数据[{"pid":null,"id":1,"text": "角色列表"},{"pid":1,"id":11,"text": "管理员"},{"pid":1,"id":13,"text": "营销人员"}]
        onClick : function (node) {
          window.console && console.log(node);
        }
      });

      $('.btn-submit').click(function () {
        var checked = $('#ul-roleTree').tree('getChecked');
        var chkIdArr = [];
        $.each(checked,function (i,v) {
          if (!v.children) {chkIdArr.push(v.id)};
        });
        window.console && console.log(chkIdArr);
        $('#roleId').val(chkIdArr.join(','));
      });

    },
    rolePower : function () {
      $('#ul-powerTree').tree({
        animate : true,
        url : 'json/powerTree.js',
        // onlyLeafCheck : true,
        checkbox : true,
        lines : true,
        onClick : function (node) {
          window.console && console.log(node);
        }
      });

      $('.btn-submit').click(function () {
        var checked = $('#ul-powerTree').tree('getChecked');
        window.console && console.log(checked);
      });

    },
    group : function () {
      $grid.newGrid("#gridBox",{
        tools:[
          [{iconCls:'plus',text:'新增',url:'groupAdd.html',popHeight:260,popWidth:450,title:'组织管理-新增'}
          ,{iconCls:'pencil',btnCls:'warning',text:'修改',onlyOne:true,popHeight:330,popWidth:450,url:'groupEdit.html?id={id}',title:'组织管理-修改',notNull:'请选择你要修改的记录!'}
          ,{iconCls:'trash',btnCls:'danger',text:'删除',check:true,url:'json/true.js?id={id}',notNull:'请 <strong class="red">勾选</strong> 需要删除的一项或多项！', ajax:true}]
          ,[{iconCls:'user',btnCls:'warning',text:'分配角色',url:'userRole.html?id={id}',onlyOne:true,popHeight:380,popWidth:360,title:'组织管理-分配角色',notNull:'请选择你要分配角色的行！'}]
        ],
        fitColumns : true,
        rownumbers : false,
        // singleSelect : false,
        checkOnSelect : false,
        selectOnCheck : false,
        columns:[[
           {title:'id',field:'id',checkbox:true}
          ,{title:'名称',field:'name',width:90}
          ,{title:'拥有角色',field:'role',width:90}
          ,{title:'描述',field:'desc',width:120}
          ,{title:'父组织',field:'parentGroup',width:100}
        ]],
        url:'json/group.js'
        ,offset : -35
      });

      $('#ul-groupTree').tree({
        animate : true,
        lines : true,
        url:'json/groupTree.js',
        flatData: true,
        onClick : function (node) {
          // window.console && console.log(node);
          var id = node.id;
          $grid.load('#gridBox',{id:id});
        }
      });
    },
    module : function () {
      $grid.newGrid("#gridBox",{
        tools:[
          [{iconCls:'eye-open',text:'查看',url:'moduleAdd.html?id={id}',onlyOne:true,popHeight:530,popWidth:660,title:'模块管理-查看',notNull:'请 <strong class="red">勾选</strong> 需要删除的一项或多项！'}
          ,{iconCls:'plus',text:'新增',url:'moduleAdd.html',popHeight:530,popWidth:660,title:'模块管理-新增'}
          ,{iconCls:'pencil',btnCls:'warning',text:'修改',onlyOne:true,popHeight:530,popWidth:660,url:'moduleAdd.html?id={id}',title:'模块管理-修改',notNull:'请选择你要修改的记录!'}
          ,{iconCls:'trash',btnCls:'danger',text:'删除',check:true,url:'json/true.js?id={id}',notNull:'请 <strong class="red">勾选</strong> 需要删除的一项或多项！', ajax:true}]
        ],
        fitColumns : true,
        rownumbers : false,
        // singleSelect : false,
        checkOnSelect : false,
        selectOnCheck : false,
        columns:[[
           {title:'id',field:'id',checkbox:true}
          ,{title:'名称',field:'name',width:90}
          ,{title:'优先级',field:'level',width:90}
          ,{title:'授权名称',field:'niceName',width:120}
          ,{title:'父模块',field:'parentModule',width:100}
          ,{title:'模块地址',field:'url',width:100,align:'left'}
        ]],
        url:'json/module.js'
        ,offset : -35
      });

      $('#ul-moduleTree').tree({
        animate : true,
        lines : true,
        url:'json/moduleTree.js',
        flatData: true,
        onClick : function (node) {
          // window.console && console.log(node);
          var id = node.id;
          $grid.load('#gridBox',{id:id});
        }
      });


    },
    moduleAdd : function () {
      $('#fieldset-new-0').find('.s-closeFieldset').click(function() {
        $('#fieldset-new-0').remove();
      });

      var num = 1;
      $('.btn-addNewFunc').click(function () {
        $('.addNewFuncBox').append(template('addNewFunc',{id:num}));
        window.console && console.log($('#fieldset-new-'+num).find('.s-closeFieldset').length);
        $('#fieldset-new-'+num).find('.s-closeFieldset').click(function() {
          $(this).parent('.fieldset-new').remove();
        });
        num++;
        return false;
      });

    },
    log : function () {
      $grid.newGrid("#gridBox",{
        tools:[
          {iconCls:'trash',btnCls:'danger',text:'删除',check:true,url:'json/true.js?id={id}',notNull:'请 <strong class="red">勾选</strong> 需要删除的一项或多项！', ajax:true}
        ],
        fitColumns : true,
        rownumbers : false,
        // singleSelect : false,
        checkOnSelect : false,
        selectOnCheck : false,
        columns:[[
           {title:'id',field:'id',checkbox:true}
          ,{title:'登录名',field:'username',width:90}
          ,{title:'登录IP',field:'ip',width:90}
          ,{title:'等级',field:'rank',width:120}
          ,{title:'日志内容',field:'content',width:200,align:'left'}
          ,{title:'创建时间',field:'creatTime',width:140}
        ]],
        url:'json/log.js'
        // ,offset : -50
      });
    },
    setRolePower : function () {
      $('#setPowerTree').treegrid({
          url:'json/roleTreeGrid2.js',
          idField:'id',
          treeField:'name',
          // checkbox : true,
          fitColumns : true,
          // lines : true,
          flatData : true,
          columns:[[
              {title:'模块名称',field:'name',width:120},
              {title:'操作权限',field:'power',width:250,formatter: function (value,row) {
                // window.console && console.log(row.power);
                var roleRowHtml = '';
                if(row.power){
                  roleRowHtml += '<div class="roleRow">';
                  $.each(row.power,function (i,v) {
                    roleRowHtml += '<label class="mar-r10"><input type="checkbox" class="chk'+(v.state?" chked":"")+'" name="'+v.id+'" '+(v.state?"checked":"")+' /> '+v.text+'</label>';
                  });
                  roleRowHtml += '</div>';
                }
                return roleRowHtml;
              }},
              {title:'全选',field:'id',width:40,align:'center',formatter: function (value,row) {
                  return '<label class="pad-l10 pad-r10"><input type="checkbox" class="chk-all" /></label>';
              }}
          ]],
          onCheckNode : function (a,b) {
            window.console && console.log(a,b);
          },
          onLoadSuccess : function (row,data) {
            checkChkState();
            // window.console && console.log(data);
          }
      });

      function rowChkChked () {
        $('.datagrid-row').each(function () {
            var _self = $(this);
            if (_self.find('.chk').length) {
              var $allChk = _self.find('.chk-all');
              var chked = _self.find('.chk').length == _self.find('.chked').length;
              $allChk[chked?'addClass':'removeClass']('allChked').prop('checked',chked);
            };
        });
      }
      function treeChkChked () {
        $('.treegrid-tr-tree').each(function () {
            var _self = $(this);
              var chked = _self.find('.chk-all').length == _self.find('.allChked').length;
              _self.prev('.datagrid-row').find('.chk-all')[chked?'addClass':'removeClass']('allChked').prop('checked',chked);;
        });
      }
      function checkChkState () {
        window.console && console.log($('.datagrid-row').length);
        rowChkChked();
        treeChkChked();
        $('.chk-all').click(function () {
          var _self = $(this);
          var chked = _self.prop('checked');
          _self[chked?'addClass':'removeClass']('allChked');
          window.console && console.log(chked);
          var $thisRow = _self.parents('.datagrid-row');
          var $treeRow = $thisRow.next('.treegrid-tr-tree');
          // window.console && console.log($treeRow);
          var $chks_a = $thisRow.find('.chk');//当前节点下
          var $chks_b = $treeRow.find('.chk');//子节点下
          var $chks_c = $treeRow.find('.chk-all');//子节点下
          $chks_a.prop('checked',chked);
          $chks_b.prop('checked',chked);
          $chks_c.prop('checked',chked);
          $chks_c[chked?'addClass':'removeClass']('allChked');
          treeChkChked();
        });

        $('.chk').click(function() {
          var _self = $(this);
          var chked = _self.prop('checked');
          _self[chked?'addClass':'removeClass']('chked');
          var $thisRow = _self.parents('.datagrid-row');
          var $treeRow = _self.parents('.treegrid-tr-tree');
          var $rowAllChk = $thisRow.find('.chk-all');
          var $moAllChk = $treeRow.prev('.datagrid-row').find('.chk-all');
          var rowAllchked = $thisRow.find('.chk').length == $thisRow.find('.chked').length;
          var moAllchked = $treeRow.find('.chk').length == $treeRow.find('.chked').length;
          $rowAllChk.prop('checked',rowAllchked);
          $moAllChk.prop('checked',moAllchked);
          treeChkChked();
        });
      }



    }
  }

  return back;
});
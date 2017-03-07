/**
 * 存放页面公用变量
 */
var $p = {
	treeUrl : '/cmn/tree.htm',
	comboUrl : '/cmn/combo.htm',
	selectUrl : '/cmn/select.htm',
	gridUrl : '/cmn/grid.htm',
	cmp:'爱尔',
	submitTip : '您确定要提交吗?',
	exportMax : 6000
}

//公共表格列定义
var $cols={
	GridOrg:[[
		{title:'公司名称',field:'text',width:80},
		{title:'联系人',field:'linkman',width:80},
		{title:'联系方式',field:'linkway',width:100}
	]],
    GridGoods:[[
         {checkbox:true,field:'chk'}
        ,{title:'商品名称',field:'text'}
        ,{title:'商品分类',field:'classifyName'}
        ,{title:'商品编码',field:'goodsCode'}
        ,{title:'商品海关编码',field:'hsCode'}
        ,{title:'电子帐册项号',field:'eno'}
        ,{title:'品牌',field:'brandName'}
        ,{title:'规格型号',field:'spec'}
        ,{title:'计量单位',field:'unit'}
    ]],
	Goods:[[
		{title:'商品名称',field:'goodsName'}
		,{title:'商品分类',field:'classifyName'}
		,{title:'商品编码',field:'goodsCode'}
		,{title:'商品海关编码',field:'hsCode'}
		,{title:'电子帐册项号',field:'eno'}
		,{title:'品牌',field:'brandName'}
		,{title:'规格型号',field:'spec'}
		,{title:'计量单位',field:'unitName'}
	]],
	funcGrid:[[
		 {title:'功能名称',field:'text',width:150}
		,{title:'功能简称',field:'shortName',width:100}
		,{title:'功能编码',field:'resCode',align:'left'}
	]],
    BrandGrid:[[
         {title:'品牌名称',field:'text'}
        ,{title:'厂家',field:'companyName'}
        ,{title:'备注',field:'remark'}
    ]],
	GridSupplier:[[
		 {title:'企业编码',field:'text'}
		,{title:'企业名称',field:'supplier_name'}
		,{title:'地址',field:'addr'}
		,{title:'国家',field:'nation'}
		,{title:'备注',field:'remark'}
	]],
	BuyGoods:[[
		 {title:'商品名称',field:'goodsName',width:250}
		,{title:'商品分类',field:'classifyName',width:200}
		,{title:'商品编码',field:'goodsCode'}
		,{title:'商品海关编码',field:'hsCode',width:100}
		,{title:'电子帐册项号',field:'eno'}
		,{title:'品牌',field:'brandName'}
		,{title:'规格型号',field:'spec'}
		,{title:'计量单位',field:'unit'}
		,{title:'备注',field:'remark'}
	]],
	Customer:[[
		{title:'企业编码',field:'customer_code'}
		,{title:'企业名称',field:'customer_name'}
		,{title:'地址',field:'addr'}
		,{title:'备注',field:'remark'}
	]],
	SaleGoods:[[
		{title:'商品名称',field:'goodsName',width:250}
		,{title:'商品分类',field:'classifyName',width:200}
		,{title:'商品编码',field:'goodsCode'}
		,{title:'商品海关编码',field:'hsCode',width:100}
		,{title:'电子帐册项号',field:'eno'}
		,{title:'品牌',field:'brandName'}
		,{title:'规格型号',field:'spec'}
		,{title:'计量单位',field:'unit'}
		,{title:'备注',field:'remark'}
	]],
	StockForSale:[[
		{title: '货物自然序号', field: 'batchNo',width:110}
		, {title: '供货企业', field: 'supplierName',width:150}
		, {title: '商品名称', field: 'goodsName'}
		, {title: '规格型号', field: 'spec'}
		, {title: '数量', field: 'total', align: 'right'}
		, {title: '计量单位', field: 'unitName'}
		//, {title: '单价', field: 'price', align: 'right'}
		, {title: '总价(元)', field: 'amount', align: 'right'}
		, {title: '件数', field: 'totalPkg', align: 'right'}
		//, {title: '报关单号', field: 'hsBill'}
		//, {title: '电子帐册项号', field: 'eno'}
		//, {title: '商品海关编码', field: 'hsCode'}
		, {title: '原产国', field: 'originPlace'}
		, {title: '仓库', field: 'storeName'}
		, {title: '货位', field: 'storeLocName'}
		, {title: '进仓日期', field: 'billDate', width: 125, format: 'yyyy-MM-dd hh:mm'}
	]]
}
require.config({
    paths: {
        echarts: 'js/lib/echarts'
    }
});

// 使用
require(['echarts','echarts/chart/map'],function (ec) {
        var provinceArr = [
            {name: '北京',id: 1},{name: '天津',id: 2},
            {name: '上海',id: 3},{name: '重庆',id: 4},{name: '河北',id: 5},{name: '河南',id: 6},
            {name: '云南',id: 7},{name: '辽宁',id: 8},{name: '黑龙江',id: 9},{name: '湖南',id: 10},
            {name: '安徽',id: 11},{name: '山东',id: 12},{name: '新疆',id: 13},{name: '江苏',id: 14},
            {name: '浙江',id: 15},{name: '江西',id: 16},{name: '湖北',id: 17},{name: '广西',id: 18},
            {name: '甘肃',id: 19},{name: '山西',id: 20},{name: '内蒙古',id: 21},{name: '陕西',id: 22},
            {name: '吉林',id: 23},{name: '福建',id: 24},{name: '贵州',id: 25},{name: '广东',id: 26},
            {name: '青海',id: 27},{name: '西藏',id: 28},{name: '四川',id: 29},{name: '宁夏',id: 30},
            {name: '海南',id: 31},{name: '台湾',id: 32},{name: '香港',id: 33},{name: '澳门',id: 34}
        ];
        var hpmMap = {
            init : function () {
                var me = this;
                me.tranData();//转化取得 maxV与delayArr
                me.getMapOpt();//得到map的设置参数option
                me.renderMap();//渲染地图
            },
            maxV : 0,//最大医院数量值
            delayArr : [],//延迟列表，用散开红圈标注
            mapData : mapHosData,//map医院所有数据
            mapOpt : null,//map设置参数对象
            $mapO : null,//页面中的map对象
            renderMap : function () {//渲染地图
                var me = this;
                // setTimeout(function () {
                var $map =  $('#map');
                var wh = $(window).height();
                $map.height(wh);
                me.$mapO = ec.init($map.get(0));
                me.$mapO.setOption(me.mapOpt, true);
                me.mapClick();
                // window.console && console.log(me.$mapO);
                // },200);
            },
            mapClick : function () {//地图点击事件
                var me = this;
                var demoJsonEnd = 1;
                //加载map事件文件（其实不存在？反正删除有错误，echart这个地方莫名其妙）
                var ecConfig = require('echarts/config');
                var zrEvent = require('zrender/tool/event');
                me.$mapO.on(ecConfig.EVENT.MAP_SELECTED, function (param){
                    // window.console && console.log(param);
                    var target = param.target.split('(')[0];
                    window.console && console.log(target);
                    var provinceId = null;
                    $.each(provinceArr, function (i,v) {
                        if (v.name==target) {
                            window.console && console.log('bingo',v.name,v.id);
                            provinceId = v.id;
                            return false;
                        };
                    });

                    $.getJSON('json/homeHosInfo'+demoJsonEnd+'.js?provinceId='+provinceId,function (data) {
                        demoJsonEnd = (demoJsonEnd===1?2:1);
                        window.console && console.log(demoJsonEnd);
                        var info = template('popHosInfo',data);
                        $('.hosInfoBox').show().html(info);
                        $('.table-hosInfo tr').click(function () {
                            $.sobox.pop({
                                    cls: 'pop-iframePage',
                                    type: 'iframe',
                                    iframe: 'itemsListView.html',
                                    width: $(window).width(),
                                    height : $(window).height(),
                                    offset : [0, 12],
                                    showTitle : false,
                                    drag : false,
                                    // reloadGrid : false,//重载父页面的grid
                                    closePop: function () {}
                                });
                            window.console && console.log(11);
                        });
                    });

                });
            },
            tranData : function () {
                var me = this;
                var maxV = 0;
                var delayArr = [];
                var mapData = $.map(me.mapData, function(obj){
                    return $.extend(true,{},obj);//返回对象的深拷贝
                });
                $.each(mapData,function (i,v) {
                    maxV = maxV>v.value? maxV : v.value;
                    if (v.delay>0) {
                        v.value = v.delay;
                        delayArr.push(v);
                    };
                });
                // delayArr = [];
                me.maxV = Math.ceil(maxV/10)*10;
                me.delayArr = delayArr;
            },
            getMapOpt :function () {
                var me = this;
                me.mapOpt = {
                    // backgroundColor : '#ffffff',
                    title: {
                        text : '中国',
                        x : 'right',
                        show : false
                        // subtext : '中国'
                    },
                    dataRange: {
                        min : 0,
                        max : me.maxV,
                        splitNumber: 5,
                        precision: 0,
                        // range : {start: 0, end: 50},
                        // calculable : true,
                        precision : 0,
                        // color :['#006EDD','#E0FFFF'],
                        color: ['#029AFF', '#7CCBFF','#E7EFF1'],
                        // color: ['maroon','purple','red','orange','yellow','lightgreen'],
                        x: 'right',
                        y: 'center',
                        text:['多','少'], // 文本，默认为数值文本
                        textStyle:{
                          fontFamily: 'Microsoft YaHei,Arial, sans-serif'
                        },
                        padding: [5,30,5,5],
                        itemGap:2,
                        // itemHeight: 15,
                        calculable : false//false 为块状
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: function (param){
                                //return param[1];
                                var selectedName = param.data.name;
                                var selectedData = null;
                                // window.console && console.log(me.mapData);
                                $.each(me.mapData,function (i,v) {
                                    if (v.name == selectedName) {
                                        selectedData = me.mapData[i];
                                        return false;
                                    };
                                });
                                return '<strong>'+selectedName+'</strong><p class="p-state"><span class="s-state s-state-green"></span>正常:'+selectedData.normal+'&nbsp;&nbsp;<span class="s-state s-state-red"></span>延迟:'+selectedData.delay+'</p>';
                            }
                    },
                    series : [{
                        name: '中国地图',
                        type: 'map',
                        mapType: 'china',
                        // hoverable : false,
                        selectedMode : 'single',
                        // nameMap : {'四川' : '四川省','广东' : '广东省'},
                        nameMap : function () {
                            // window.console && console.log(option);
                            var data = me.mapData;
                             // window.console && console.log(me.mapData);
                            var nameMap={};
                            $.each(data, function (i,v) {
                                nameMap[v.name] = v.name+'('+v.value+')';
                            });
                            // window.console && console.log(nameMap);
                            return nameMap;
                        }(),
                        itemStyle: {
                            normal: {
                                borderColor: '#ffffff',
                                borderWidth: 1,
                                areaStyle: {
                                    color: '#ccc'
                                },
                                label: {
                                    show: true,
                                    // formatter : function (label) {
                                    //     window.console && console.log(label);
                                    //     var data = me.mapData;
                                    //     var txt = label;
                                    //     $.each(data, function (i,v) {
                                    //         if (v.name == label) {
                                    //             txt += '('+v.value+')';
                                    //             return false;
                                    //         };
                                    //     });
                                    //     return txt;
                                    // },
                                    textStyle: {
                                        color: '#002040',
                                        fontFamily: 'Microsoft YaHei,Arial, sans-serif'
                                    }
                                }
                            },
                            emphasis: {
                                borderColor: '#ffffff',
                                borderWidth: 1,
                                areaStyle: {
                                    color: '#FFAF68',
                                },
                                label: {
                                    show: true,
                                //     formatter : function (label) {
                                //         window.console && console.log(label);
                                //         var data = me.mapData;
                                //         var txt = label;
                                //         $.each(data, function (i,v) {
                                //             if (v.name == label) {
                                //                 txt += '('+v.value+')';
                                //                 return false;
                                //             };
                                //         });
                                //         return txt;
                                //     },
                                    textStyle: {
                                        color: '#ffffff',
                                        fontFamily: 'Microsoft YaHei,Arial, sans-serif',
                                        fontSize : 14,
                                        fontWeight:'bold'
                                    }
                                }
                            }
                        },
                        data:me.mapData,
                        markPoint : {
                            clickable : false,
                            symbol:'circle',
                            symbolSize : function (v){
                                return 6 + v/10
                            },
                            effect : {
                                show: true,
                                period : 10,
                                color : '#FB3504',
                                // scaleSize : 3,
                                shadowColor : '#FF7F50',
                                // shadowColor : ['#cc0000'],
                                shadowBlur : 4
                            },
                            itemStyle:{
                                normal:{
                                    color : '#FF8000',
                                    // borderColor : '#F04835',
                                    label:{show:true}
                                }
                            },
                            data : me.delayArr
                            // [
                            //     {name: "河北", value: 193},
                            //     {name: "安徽", value: 229},
                            //     {name: "湖北", value: 273},
                            //     {name: "辽宁", value: 279}
                            // ]
                        },
                        geoCoord: {
                            "西藏":[91.11,29.97],
                            "上海":[121.48,31.22],
                            "福建":[119.3,26.08],
                            "广西":[108.33,22.84],
                            "广东":[113.23,23.16],
                            "山西":[112.53,37.87],
                            "云南":[102.73,25.04],
                            "海南":[110.35,20.02],
                            "辽宁":[123.38,41.8],
                            "吉林":[125.35,43.88],
                            "宁夏":[106.27,38.47],
                            "江西":[115.89,28.68],
                            "青海":[101.74,36.56],
                            "内蒙古":[111.65,40.82],
                            "四川":[104.06,30.67],
                            "陕西":[108.95,34.27],
                            "重庆":[106.54,29.59],
                            "江苏":[118.78,32.04],
                            "贵州":[106.71,26.57],
                            "北京":[116.46,39.92],
                            "新疆":[87.68,43.77],
                            "浙江":[120.19,30.26],
                            "山东":[117,36.65],
                            "甘肃":[103.73,36.03],
                            "天津":[117.2,39.13],
                            "河南":[113.65,34.76],
                            "黑龙江":[126.63,45.75],
                            "河北":[114.48,38.03],
                            "湖南":[113,28.21],
                            "安徽":[117.27,31.86],
                            "湖北":[114.31,30.52]
                        }
                    }
                    ]
                }
            }
        }




$(function () {
    var  helper = {
        state : function (value) {
            var state = ['','green','red'];
            return state[value];
        },
        trOdd : function (index) {
            return (index%2===0)?'tr-odd':'';
        }
    };
    for(h in helper){
        template.helper(h,helper[h]);
    }

    hpmMap.init();

});



});
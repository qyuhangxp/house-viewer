webpackJsonp([1],{"+cgv":function(t,e){},"+dSI":function(t,e,a){t.exports=a.p+"static/img/error-404.94756dc.svg"},"/yBk":function(t,e,a){var n=a("VU/8")(a("AY6l"),a("aj31"),function(t){a("AdWQ")},"data-v-d844823a",null);t.exports=n.exports},"018l":function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Button",{attrs:{size:"large",type:"text"},on:{click:this.backHome}},[this._v("返回首页")]),this._v(" "),e("Button",{attrs:{size:"large",type:"text"},on:{click:this.backPrev}},[this._v("返回上一页("+this._s(this.second)+"s)")])],1)},staticRenderFns:[]}},"0GHE":function(t,e){},"3f40":function(t,e){},"4qOc":function(t,e){},"5Slr":function(t,e,a){var n=a("VU/8")(a("zvOq"),a("wB4Q"),function(t){a("YV4S")},"data-v-b766499e",null);t.exports=n.exports},"5fac":function(t,e){},"6pyQ":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("FkJB"),i=a.n(n);e.default={data:function(){return{loading2:i.a,currentPagePath:"/",loginInfo:null}},methods:{handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)}},mounted:function(){console.log(this.$route.path),this.loginInfo||(this.loginInfo=JSON.parse(window.localStorage.getItem("userInfo")||null))}}},"71A+":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-page"},[a("div",{staticClass:"content-nav"},[a("el-breadcrumb",{staticClass:"breadcrumb",attrs:{separator:"/"}},[a("el-breadcrumb-item",[t._v("成交价格曲线")])],1),t._v(" "),t._m(0)],1),t._v(" "),a("div",{staticClass:"content-main"},[a("div",{staticClass:"filter-box"},[a("el-cascader",{attrs:{props:t.props,placeholder:"请选择区县",clearable:!0},on:{change:t.handleChange,"expand-change":t.handleExpandChange}})],1),t._v(" "),a("div",{staticClass:"form-table-box"},[a("ve-line",{attrs:{data:t.chartData,settings:t.chartSettings,extend:t.extend}})],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"operation-nav"},[e("div",{staticStyle:{"margin-left":"10px"}})])}]}},"8f2j":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("VsUZ");e.default={data:function(){return this.extend={},this.chartSettings={axisSite:{right:["dealNum"]},xAxisType:"time",yAxisType:["KMB","normal"],yAxisName:["元/平米","成交套数"],labelMap:{listPriceAvg:"挂牌均价",dealPriceAvg:"成交均价",dealNum:"成交数"}},{countyId:0,props:{lazy:!0,lazyLoad:function(t,e){var a=t.level,i=t.value,s=[];0===a?Object(n.a)("/county/queryInitCityList",{}).then(function(t){200==t.code&&(s=t.data.map(function(t){return{value:t.code,label:t.name}})),e(s)}):1===a?Object(n.a)("/county/queryInitCountyList",{cityCode:i}).then(function(t){200==t.code&&(s=t.data.map(function(t){return{value:t.code,label:t.name}})),e(s)}):2===a&&Object(n.a)("/county/queryInitStreetList",{countyCode:i}).then(function(t){200==t.code&&(s=t.data.map(function(t){return{value:t.code,label:t.name,leaf:!0}})),e(s)})}},chartData:{columns:["yearMonth","listPriceAvg","dealPriceAvg","dealNum"],rows:[]},cityCode:"bj",countyCode:"",streetCode:"",communityCode:""}},methods:{handleChange:function(t){this.streetCode=t[2],this.getList()},handleExpandChange:function(t){2===t.length&&(this.countyCode=t[1],this.getList())},getList:function(){var t=this;Object(n.a)("/chart/priceChange",{cityCode:this.cityCode,countyCode:this.countyCode,streetCode:this.streetCode,communityCode:this.communityCode,fromDate:"2008-01-01"}).then(function(e){200===e.code?t.chartData.rows=e.data:t.$message({type:"error",message:"查询价格数据失败！！！"})})}},components:{},mounted:function(){this.getList()}}},"8jgd":function(t,e,a){var n=a("VU/8")(a("6pyQ"),a("X2Dp"),function(t){a("jsoQ")},null,null);t.exports=n.exports},AY6l:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("VsUZ");e.default={data:function(){return{chartSettings:{key:"oBvDtR6nzWtVchkY4cLHtnah1VVZQKRK",bmap:{center:[113.665412,34.757975],zoom:12,roam:!0},type:"bmap"},chartData:{columns:["lat","lng"],rows:[]},cityList:[],city:{label:"郑州",value:"zz"},fromDate:new Date,toDate:new Date,dateRange:["",""]}},methods:{getCityList:function(){var t=this;Object(n.a)("/county/queryInitCityList",{}).then(function(e){200===e.code?t.cityList=e.data.map(function(t){return{value:t.code,label:t.name,position:[t.longitude,t.latitude]}}):t.$message({type:"error",message:"获取城市列表失败!"})})},onCityChange:function(t){this.chartSettings.bmap.center=this.city.position,this.getDealPosition()},onDateChange:function(){this.fromDate=this.dateRange[0],this.toDate=this.dateRange[1],this.getDealPosition()},getDealPosition:function(){var t=this;Object(n.a)("/chart/dealPosition",{cityCode:this.city.value,fromDate:this.fromDate,toDate:this.toDate}).then(function(e){200===e.code?t.chartData.rows=e.data.map(function(t){return{lng:t.latitude,lat:t.longitude}}):t.$message({type:"error",message:"查询价格数据失败！！！"})})}},components:{},mounted:function(){this.getCityList(),this.toDate=(new Date).toLocaleDateString();var t=new Date((new Date).getTime()-5184e6);this.fromDate=t.toLocaleDateString(),this.dateRange=[this.fromDate,this.toDate],this.getDealPosition()}}},AdWQ:function(t,e){},BZQm:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("VsUZ");e.default={data:function(){return this.extend={},this.chartSettings={axisSite:{right:["dealNum"]},xAxisType:"time",yAxisType:["KMB","normal"],yAxisName:["元/平米","成交套数"],scale:[!0,!1],labelMap:{listPriceAvg:"挂牌均价",dealPriceAvg:"成交均价",dealNum:"成交数"}},{chartData:{columns:["yearMonth","listPriceAvg","dealPriceAvg","dealNum"],rows:[]},cityList:[],countyList:[],streetList:[],communityList:[],city:{label:"北京",value:"bj"},county:{},street:{},community:{},infoData:{},fromDate:"2008-01-01",loading:!1,loadingText:"加载中"}},methods:{getCityList:function(){var t=this;Object(n.a)("/county/queryInitCityList",{}).then(function(e){200==e.code?t.cityList=e.data.map(function(t){return{value:t.code,label:t.name}}):t.$message({type:"error",message:"获取城市列表失败!"})})},getCountyList:function(t){var e=this;t?Object(n.a)("/county/queryInitCountyList",{cityCode:t}).then(function(t){200==t.code?e.countyList=t.data.map(function(t){return{value:t.code,label:t.name}}):e.$message({type:"error",message:"获取区县列表失败!"})}):this.$message({type:"error",message:"请先选择城市!"})},getStreetList:function(t){var e=this;t?Object(n.a)("/county/queryInitStreetList",{countyCode:t}).then(function(t){200==t.code?e.streetList=t.data.map(function(t){return{value:t.code,label:t.name}}):e.$message({type:"error",message:"获取街区列表失败!"})}):this.$message({type:"error",message:"请先选择区县!"})},getCommunityList:function(t){var e=this;this.loading=!0,Object(n.a)("/community//fuzzy/list",{cityCode:this.city.value,countyCode:this.county.value,streetCode:this.street.value,communityName:t}).then(function(t){200==t.code?e.communityList=t.data.map(function(t){return{value:t.lianjiaId,label:t.name}}):e.$message({type:"error",message:"获取小区列表失败!"})}),this.loading=!1},onCityChange:function(t){this.getCountyList(t.value),this.county={},this.street={},this.community={},this.communityList=[],this.getChartData()},onCountyChange:function(t){this.getStreetList(t.value),this.street={},this.community={},this.communityList=[],this.getChartData()},onStreetChange:function(t){this.community={},this.communityList=[],this.getChartData()},onCommunityChange:function(t){this.getChartData()},handleClick:function(t){console.log(t),"first"===t.name&&(this.fromDate="2008-01-01"),"second"===t.name&&(this.fromDate=(new Date).getFullYear()-3+"-01-01"),"third"===t.name&&(this.fromDate=(new Date).getFullYear()-2+"-01-01"),"fourth"===t.name&&(this.fromDate=(new Date).getFullYear()-1+"-01-01"),this.getChartData()},getChartData:function(){var t=this;Object(n.a)("/chart/priceChange",{cityCode:this.city.value,countyCode:this.county.value,streetCode:this.street.value,communityCode:this.community.value,fromDate:this.fromDate}).then(function(e){if(200===e.code){t.chartData.rows=e.data;var a=new Date,n=a.getFullYear(),i=a.getMonth();0===i&&(n-=1,i=12);var s=e.data.filter(function(t){return t.dealYear===n&&t.dealMonth===i});console.log(s),t.infoData=s.length>0?s[0]:{}}else t.$message({type:"error",message:"查询价格数据失败！！！"})})}},components:{},mounted:function(){this.getCityList(),this.getChartData()}}},ETXx:function(t,e,a){var n=a("VU/8")(a("gYfT"),a("018l"),function(t){a("0GHE")},null,null);t.exports=n.exports},FkJB:function(t,e,a){t.exports=a.p+"static/img/loading2.4dd4b88.gif"},GLS7:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-page"},[e("div",{staticClass:"content-nav"},[e("el-breadcrumb",{staticClass:"breadcrumb",attrs:{separator:"/"}},[e("el-breadcrumb-item",[this._v("增加区县")])],1),this._v(" "),this._m(0)],1),this._v(" "),e("div",{staticClass:"content-main"},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:20}},[e("el-cascader",{attrs:{props:this.props,placeholder:"请选择要初始化的区县",clearable:!0},on:{change:this.handleChange}})],1),this._v(" "),e("el-col",{attrs:{span:4}},[e("el-button",{attrs:{type:"primary"},on:{click:this.handleAdd}},[this._v("增加区县")])],1)],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"operation-nav"},[e("div",{staticStyle:{"margin-left":"10px"}})])}]}},JIR6:function(t,e){},JPme:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-page"},[a("div",{staticClass:"content-nav"},[a("el-breadcrumb",{staticClass:"breadcrumb",attrs:{separator:"/"}},[a("el-breadcrumb-item",[t._v("当前位置："+t._s(t.city.label)+"\n        "),t.county.label?a("span",[t._v(" / "+t._s(t.county.label))]):t._e(),t._v(" "),t.street.label?a("span",[t._v(" / "+t._s(t.street.label))]):t._e()])],1)],1),t._v(" "),a("div",{staticClass:"content-main clearfix"},[a("div",{staticClass:"header"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:4}},[a("el-select",{attrs:{placeholder:"请选择城市"},on:{change:t.onCityChange},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}},t._l(t.cityList,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t}})}))],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-select",{attrs:{placeholder:"请选择区县"},on:{change:t.onCountyChange},model:{value:t.county,callback:function(e){t.county=e},expression:"county"}},t._l(t.countyList,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t}})}))],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-select",{attrs:{placeholder:"请选择街区"},on:{change:t.onStreetChange},model:{value:t.street,callback:function(e){t.street=e},expression:"street"}},t._l(t.streetList,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t}})}))],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-select",{attrs:{filterable:"",remote:"",placeholder:"请选择小区","remote-method":t.getCommunityList,loading:t.loading,"loading-text":t.loadingText},on:{change:t.onCommunityChange},model:{value:t.community,callback:function(e){t.community=e},expression:"community"}},t._l(t.communityList,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t}})}))],1)],1)],1),t._v(" "),a("div",{staticClass:"header clearfix"},[a("el-card",{staticClass:"box-card card-red"},[a("router-link",{staticClass:"link-color",attrs:{to:{path:"/dashboard/order"}}},[a("h1",[t._v(t._s(t.infoData.dealNum))]),t._v(" "),a("div",{staticClass:"text item"},[t._v("上月成交")])])],1),t._v(" "),a("el-card",{staticClass:"box-card card-green"},[a("router-link",{staticClass:"link-color",attrs:{to:{path:"/dashboard/goods"}}},[a("h1",[t._v(t._s(t.infoData.listPriceAvg))]),t._v(" "),a("div",{staticClass:"text item"},[t._v("挂牌均价")])])],1),t._v(" "),a("el-card",{staticClass:"box-card card-black"},[a("router-link",{staticClass:"link-color",attrs:{to:{path:"/dashboard/user",query:{city:t.city,county:t.county,street:t.street}}}},[a("h1",[t._v(t._s(t.infoData.dealPriceAvg))]),t._v(" "),a("div",{staticClass:"text item"},[t._v("成交均价")])])],1)],1),t._v(" "),a("div",{staticClass:"main"},[a("el-tabs",{staticClass:"o-tab",attrs:{type:"card"},on:{"tab-click":t.handleClick}},[a("el-tab-pane",{attrs:{label:"全部",name:"first"}}),t._v(" "),a("el-tab-pane",{attrs:{label:"最近三年",name:"second"}}),t._v(" "),a("el-tab-pane",{attrs:{label:"最近两年",name:"third"}}),t._v(" "),a("el-tab-pane",{attrs:{label:"最近一年",name:"fourth"}})],1),t._v(" "),a("div",{staticClass:"tab-content clearfix"},[a("ve-line",{attrs:{data:t.chartData,settings:t.chartSettings,extend:t.extend}})],1),t._v(" "),a("div",{staticClass:"line clearfix"})],1)])])},staticRenderFns:[]}},JbU7:function(t,e,a){var n=a("VU/8")(a("YPQ1"),a("idJN"),function(t){a("JIR6")},"data-v-a2fc57aa",null);t.exports=n.exports},M93x:function(t,e,a){var n=a("VU/8")(a("xJD8"),a("bhXO"),function(t){a("kbmV")},null,null);t.exports=n.exports},MxwL:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-page"},[a("div",{staticClass:"content-nav"},[a("el-breadcrumb",{staticClass:"breadcrumb",attrs:{separator:"/"}},[a("el-breadcrumb-item",[t._v("初始化列表")])],1),t._v(" "),t._m(0)],1),t._v(" "),a("div",{staticClass:"content-main"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:20}},[a("div",{staticClass:"filter-box"},[a("el-select",{attrs:{placeholder:"请选择城市",clearable:""},on:{change:t.onSubmitFilter},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}},t._l(t.cityList,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t}})}))],1)]),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-button",{attrs:{type:"primary"},on:{click:t.handleAdd}},[t._v("增加区县")])],1)],1),t._v(" "),a("div",{staticClass:"form-table-box"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",stripe:""}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"60"}}),t._v(" "),a("el-table-column",{attrs:{prop:"provinceName",label:"省/直辖市"}}),t._v(" "),a("el-table-column",{attrs:{prop:"cityName",label:"城市"}}),t._v(" "),a("el-table-column",{attrs:{prop:"countyName",label:"区县"}}),t._v(" "),a("el-table-column",{attrs:{prop:"communityNum",label:"小区数量"}}),t._v(" "),a("el-table-column",{attrs:{prop:"communityLastUpdateTime",label:"小区最后更新时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"dealNum",label:"成交数量"}}),t._v(" "),a("el-table-column",{attrs:{prop:"dealHistoryLastUpdateTime",label:"成交最后更新时间"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"240"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.isPressing?e.row.isPressing?a("div",[a("el-button",{attrs:{disabled:"",size:"small",type:"primary",loading:!0}},[t._v("处理中")])],1):t._e():a("div",[a("el-button",{attrs:{plain:"",size:"small",type:"danger"},on:{click:function(a){t.handleUpdateCommunity(e.$index,e.row)}}},[t._v("刷新小区\n              ")]),t._v(" "),a("el-button",{attrs:{plain:"",size:"small",type:"danger"},on:{click:function(a){t.handleUpdateDeal(e.$index,e.row)}}},[t._v("刷新成交\n              ")])],1)]}}])})],1)],1),t._v(" "),a("div",{staticClass:"page-box"},[a("el-pagination",{attrs:{background:"","current-page":t.pageIndex,"page-size":t.pageSize,"page-sizes":t.pageSizes,layout:"total,sizes, prev, pager, next, jumper",total:t.total},on:{"current-change":t.handlePageChange,"update:currentPage":function(e){t.pageIndex=e},"update:pageSize":function(e){t.pageSize=e},"size-change":t.sizeChange}})],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"operation-nav"},[e("div",{staticStyle:{"margin-left":"10px"}})])}]}},NAvK:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),i=a("mtWM"),s=a.n(i),o=a("Rf8U"),r=a.n(o),c=a("M93x"),l=a.n(c),u=a("/ocq");n.default.use(u.a);var d=new u.a({mode:"history",scrollBehavior:function(){return{y:0}},routes:[{path:"/",name:"dashboard",component:a("JbU7"),children:[{path:"welcome",name:"welcome",component:a("c24d")},{path:"heatMap",name:"heatMap",component:a("/yBk")},{path:"init",name:"init",component:a("fOO7")},{path:"init_add",name:"init_add",component:a("ZV1i")},{path:"community",name:"community",component:a("5Slr")},{path:"priceChange",name:"priceChange",component:a("O7qY")}]},{path:"*",name:"/404",component:a("cL7/")}]}),m=a("zL8q"),h=a.n(m);a("tvR6"),a("e0XP");n.default.filter("formatDate",function(t){console.log("formatDate:",t);var e=new Date(t),a=e.getFullYear(),n=e.getMonth()+1,i=e.getDate();return n<10&&(n="0"+n),i<10&&(i="0"+i),a+"-"+n+"-"+i}),n.default.filter("formatDateTime",function(t){console.log("formatDateTime:",t);var e=new Date(t),a=e.getFullYear(),n=e.getMonth()+1,i=e.getDate(),s=e.getHours(),o=e.getMinutes();return n<10&&(n="0"+n),i<10&&(i="0"+i),a+"-"+n+"-"+i+" "+s+":"+o});var p=a("vXZn"),f=a.n(p),g=a("gLTQ"),v=a.n(g),y=a("qrj3"),b=a.n(y);a("3f40"),a("4qOc"),a("+cgv");n.default.use(h.a),n.default.use(r.a,s.a),[f.a,v.a,b.a].forEach(function(t){n.default.component(t.name,t)}),d.beforeEach(function(t,e,a){console.log("from:"+e.path+",to"+t.path),"/"===t.path?a({path:"/welcome",query:{redirect:t.fullPath}}):a()}),n.default.config.productionTip=!1,window.bus=new n.default,new n.default({el:"#app",router:d,template:"<App/>",components:{App:l.a}})},NhgL:function(t,e){},O7qY:function(t,e,a){var n=a("VU/8")(a("8f2j"),a("71A+"),function(t){a("NAvK")},"data-v-78137561",null);t.exports=n.exports},TnMD:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"right-box"},[e("div",{staticClass:"navbar"},[e("div",{staticClass:"menu"},[e("div",{staticClass:"menu-item"},[e("i",{staticClass:"fa fa-sign-out",on:{click:this.logout}})])])])])},staticRenderFns:[]}},UHmK:function(t,e){},VsUZ:function(t,e,a){"use strict";a.d(e,"b",function(){return c}),a.d(e,"a",function(){return l});var n=a("//Fk"),i=a.n(n),s=a("mtWM"),o=a.n(s),r=a("zL8q");a.n(r);o.a.defaults.timeout=1e4,o.a.defaults.headers.post["Content-Type"]="application/json;charset=utf-8",o.a.interceptors.request.use(function(t){return t},function(t){return i.a.reject(t)}),o.a.interceptors.response.use(function(t){return t.status&&200===t.status&&200!==t.data.code&&(r.Message.error({message:t.data.desc}),r.Message.error({message:"服务端异常( ╯□╰ )"})),t.data},function(t){return t.response.data.desc?r.Message.error({message:t.response.data.desc}):r.Message.error({message:"未知错误!"}),t.data});var c=function(t,e,a){return o()({method:"post",url:""+t,params:a,data:e})},l=function(t,e){return new i.a(function(a,n){o()({method:"get",params:e,url:""+t}).then(function(t){a(t)}).catch(function(t){n(t)})})}},X2Dp:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"left-box"},[e("div",{staticClass:"logo"},[e("img",{attrs:{src:this.loading2}})]),this._v(" "),e("el-menu",{staticClass:"sidebar",attrs:{"unique-opened":!0,"default-active":this.currentPagePath,router:!0},on:{open:this.handleOpen,close:this.handleClose}},[e("el-menu-item",{attrs:{index:"/welcome"}},[e("i",{staticClass:"fa fa-tachometer"}),this._v(" "),e("span",[this._v("房价概览")])]),this._v(" "),e("el-menu-item",{attrs:{index:"/heatMap"}},[e("i",{staticClass:"fa fa-tachometer"}),this._v(" "),e("span",[this._v("热力地图")])]),this._v(" "),e("el-submenu",{attrs:{index:"house"}},[e("template",{slot:"title"},[e("i",{staticClass:"fa fa-large fa-wrench"}),this._v(" "),e("span",[this._v("小链家")])]),this._v(" "),e("el-menu-item",{attrs:{index:"/init"}},[e("i",{staticClass:"fa fa-circle"}),this._v(" "),e("span",[this._v("初始化列表")])]),this._v(" "),e("el-menu-item",{attrs:{index:"/priceChange"}},[e("i",{staticClass:"fa fa-circle"}),this._v(" "),e("span",[this._v("价格曲线")])]),this._v(" "),e("el-menu-item",{attrs:{index:"/community"}},[e("i",{staticClass:"fa fa-circle"}),this._v(" "),e("span",[this._v("小区列表")])]),this._v(" "),e("el-menu-item",{attrs:{index:"/zzStat"}},[e("i",{staticClass:"fa fa-circle"}),this._v(" "),e("span",[this._v("郑州统计")])])],2)],1)],1)},staticRenderFns:[]}},YPQ1:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("8jgd"),i=a.n(n),s=a("p18P"),o=a.n(s);e.default={data:function(){return{}},components:{Sidebar:i.a,Navbar:o.a},methods:{handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)}}}},YV4S:function(t,e){},ZV1i:function(t,e,a){var n=a("VU/8")(a("umwT"),a("GLS7"),function(t){a("gAEF")},"data-v-7595de0e",null);t.exports=n.exports},aj31:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-page"},[a("div",{staticClass:"content-main"},[a("div",{staticClass:"header"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:4}},[a("el-select",{attrs:{placeholder:"请选择城市"},on:{change:t.onCityChange},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}},t._l(t.cityList,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t}})}))],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:t.onDateChange},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1)],1)],1),t._v(" "),a("div",[a("ve-heatmap",{attrs:{data:t.chartData,settings:t.chartSettings,height:"85vh"}})],1)])])},staticRenderFns:[]}},bhXO:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("transition",{attrs:{name:"router-fade",mode:"out-in"}},[e("router-view")],1)],1)},staticRenderFns:[]}},c24d:function(t,e,a){var n=a("VU/8")(a("BZQm"),a("JPme"),function(t){a("5fac")},"data-v-6f6e8af9",null);t.exports=n.exports},"cL7/":function(t,e,a){var n=a("VU/8")(a("xYTj"),a("cfAr"),null,null,null);t.exports=n.exports},cfAr:function(t,e){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("error-content",{attrs:{code:"404",desc:"Oh~~您的页面好像飞走了~",src:this.src}})},staticRenderFns:[]}},e0XP:function(t,e){},eJXY:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"error-page"},[e("div",{staticClass:"content-con"},[e("img",{attrs:{src:this.src,alt:this.code}}),this._v(" "),e("div",{staticClass:"text-con"},[e("h4",[this._v(this._s(this.code))]),this._v(" "),e("h5",[this._v(this._s(this.desc))])]),this._v(" "),e("back-btn-group",{staticClass:"back-btn-group"})],1)])},staticRenderFns:[]}},fOO7:function(t,e,a){var n=a("VU/8")(a("lRaJ"),a("MxwL"),function(t){a("tYR2")},"data-v-9102d094",null);t.exports=n.exports},gAEF:function(t,e){},gYfT:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"backBtnGroup",data:function(){return{second:5,timer:null}},methods:{backHome:function(){this.$router.replace({name:"welcome"})},backPrev:function(){this.$router.go(-1)}},mounted:function(){var t=this;this.timer=setInterval(function(){0===t.second?t.backPrev():t.second--},1e3)},beforeDestroy:function(){clearInterval(this.timer)}}},h8Eg:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},methods:{logout:function(){var t=this;this.$confirm("是否要退出?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){localStorage.clear(),t.$router.replace({name:"login"})})}}}},iBtw:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("ETXx"),i=a.n(n);e.default={name:"error_content",components:{backBtnGroup:i.a},props:{code:String,desc:String,src:String}}},idJN:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("sidebar"),this._v(" "),e("div",{staticClass:"content"},[e("transition",{attrs:{name:"router-fade",mode:"out-in"}},[e("router-view")],1)],1)],1)},staticRenderFns:[]}},jsoQ:function(t,e){},kbmV:function(t,e){},lRaJ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("VsUZ");e.default={data:function(){return{pageIndex:1,pageSize:10,pageSizes:[10,20,30,40,50,100],total:0,tableData:[],username:"",city:"",cityList:[]}},methods:{getCityList:function(){var t=this;Object(n.a)("/county/queryInitCityList",{}).then(function(e){200==e.code?t.cityList=e.data.map(function(t){return{value:t.code,label:t.name}}):t.$message({type:"error",message:"获取城市列表失败!"})})},handleAdd:function(){this.$router.push({path:"/init_add"})},handlePageChange:function(t){this.pageIndex=t,this.getList()},sizeChange:function(t){this.pageSize=t,this.getList()},handleRowDetail:function(t,e){this.$router.push({name:"user_add",query:{id:e.id}})},handleUpdateCommunity:function(t,e){var a=this;this.$confirm("确定要刷新该区县小区数据吗 ? 此为耗时操作！","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(n.b)("/auth/admin/updateCommunity",{},{id:e.id}).then(function(t){200===t.code?(a.$message({type:"success",message:"初始化进程已启动!"}),a.getList()):a.$message({type:"error",message:"初始化进程启动失败!"})})})},handleUpdateDeal:function(t,e){var a=this;this.$confirm("确定要刷新该区县成交记录吗 ? 此为耗时操作！","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(n.b)("/auth/admin/updateDealHistory",{},{id:e.id}).then(function(t){200===t.code?(a.$message({type:"success",message:"处理进程已启动!"}),a.getList()):a.$message({type:"error",message:"初始化进程启动失败!!"})})})},onSubmitFilter:function(){this.getList()},getList:function(){var t=this;Object(n.a)("/auth/user/queryInitPage",{pageIndex:this.pageIndex,pageSize:this.pageSize,cityName:this.city.label}).then(function(e){200===e.code?(t.tableData=e.data.records,t.total=e.data.total):t.$message({type:"error",message:"获取已初始化区县列表失败!"})})}},components:{},mounted:function(){this.getList(),this.getCityList()}}},p18P:function(t,e,a){var n=a("VU/8")(a("h8Eg"),a("TnMD"),function(t){a("UHmK")},"data-v-fc0dc588",null);t.exports=n.exports},snYV:function(t,e,a){var n=a("VU/8")(a("iBtw"),a("eJXY"),function(t){a("NhgL")},null,null);t.exports=n.exports},tYR2:function(t,e){},tvR6:function(t,e){},umwT:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("VsUZ");e.default={data:function(){return{props:{lazy:!0,lazyLoad:function(t,e){console.log(t);var a=t.level,i=t.value,s=[];0===a?Object(n.a)("/county/queryProvinceList",{}).then(function(t){200==t.code&&(s=t.data.map(function(t){return{value:t.id,label:t.name}})),e(s)}):1===a?Object(n.a)("/county/queryCityList",{provinceId:i}).then(function(t){200==t.code&&(s=t.data.map(function(t){return{value:t.id,label:t.name}})),e(s)}):2===a&&Object(n.a)("/county/queryCountyList",{cityId:i}).then(function(t){200==t.code&&(s=t.data.map(function(t){return{value:t.id,label:t.name,leaf:!0}})),e(s)})}},countyId:0}},methods:{handleAdd:function(){var t=this;Object(n.b)("/auth/admin/addInitRecord",{countyId:this.countyId}).then(function(e){200===e.code?(t.$message({type:"success",message:"添加区县成功！！！"}),t.$router.go(-1)):t.$message({type:"error",message:"添加区县失败！！！"})})},handleChange:function(t){console.log("++++++="),console.log(t),this.countyId=t[2]}},components:{},mounted:function(){}}},wB4Q:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-page"},[a("div",{staticClass:"content-nav"},[a("el-breadcrumb",{staticClass:"breadcrumb",attrs:{separator:"/"}},[a("el-breadcrumb-item",[t._v("小区列表")])],1),t._v(" "),t._m(0)],1),t._v(" "),a("div",{staticClass:"content-main"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:20}},[a("div",{staticClass:"filter-box"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:4}},[a("el-select",{attrs:{placeholder:"请选择城市"},on:{change:t.onCityChange},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}},t._l(t.cityList,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t}})}))],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-select",{attrs:{placeholder:"请选择区县"},on:{change:t.onCountyChange},model:{value:t.county,callback:function(e){t.county=e},expression:"county"}},t._l(t.countyList,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t}})}))],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-select",{attrs:{placeholder:"请选择街区"},on:{change:t.onStreetChange},model:{value:t.street,callback:function(e){t.street=e},expression:"street"}},t._l(t.streetList,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t}})}))],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-select",{attrs:{filterable:"",remote:"",placeholder:"请选择小区","remote-method":t.getCommunityList},on:{change:t.onCommunityChange},model:{value:t.community,callback:function(e){t.community=e},expression:"community"}},t._l(t.communityList,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t}})}))],1)],1)],1)])],1),t._v(" "),a("div",{staticClass:"form-table-box"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",stripe:""}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"60"}}),t._v(" "),a("el-table-column",{attrs:{prop:"street.provinceName",label:"省/直辖市"}}),t._v(" "),a("el-table-column",{attrs:{prop:"street.cityName",label:"城市"}}),t._v(" "),a("el-table-column",{attrs:{prop:"street.countyName",label:"区县"}}),t._v(" "),a("el-table-column",{attrs:{prop:"street.name",label:"街区"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"小区名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"referencePrice",label:"参考价"}}),t._v(" "),a("el-table-column",{attrs:{prop:"onSaleNum",label:"在售数"}}),t._v(" "),a("el-table-column",{attrs:{prop:"onRentNum",label:"在租数"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(a){t.handleWatch(e.$index,e.row)}}},[t._v("关注\n            ")])]}}])})],1)],1),t._v(" "),a("div",{staticClass:"page-box"},[a("el-pagination",{attrs:{background:"","current-page":t.pageIndex,"page-size":t.pageSize,"page-sizes":t.pageSizes,layout:"total,sizes, prev, pager, next, jumper",total:t.total},on:{"current-change":t.handlePageChange,"update:currentPage":function(e){t.pageIndex=e},"update:pageSize":function(e){t.pageSize=e},"size-change":t.sizeChange}})],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"operation-nav"},[e("div",{staticStyle:{"margin-left":"10px"}})])}]}},xJD8:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},xYTj:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("+dSI"),i=a.n(n),s=a("snYV"),o=a.n(s);e.default={name:"error_404",components:{errorContent:o.a},data:function(){return{src:i.a}}}},zvOq:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("VsUZ");e.default={data:function(){return{pageIndex:1,pageSize:10,pageSizes:[10,20,30,40,50,100],total:0,cityList:[],countyList:[],streetList:[],communityList:[],city:{},county:{},street:{},tableData:[],community:{},username:""}},methods:{getCityList:function(){var t=this;Object(n.a)("/county/queryInitCityList",{}).then(function(e){200==e.code?t.cityList=e.data.map(function(t){return{value:t.code,label:t.name}}):t.$message({type:"error",message:"获取城市列表失败!"})})},getCountyList:function(t){var e=this;t?Object(n.a)("/county/queryInitCountyList",{cityCode:t}).then(function(t){200==t.code?e.countyList=t.data.map(function(t){return{value:t.code,label:t.name}}):e.$message({type:"error",message:"获取区县列表失败!"})}):this.$message({type:"error",message:"请先选择城市!"})},getStreetList:function(t){var e=this;t?Object(n.a)("/county/queryInitStreetList",{countyCode:t}).then(function(t){200==t.code?e.streetList=t.data.map(function(t){return{value:t.code,label:t.name}}):e.$message({type:"error",message:"获取街区列表失败!"})}):this.$message({type:"error",message:"请先选择区县!"})},getCommunityList:function(t){var e=this;this.loading=!0,Object(n.a)("/community/fuzzy/list",{cityCode:this.city.value,countyCode:this.county.value,streetCode:this.street.value,communityName:t}).then(function(t){200==t.code?e.communityList=t.data.map(function(t){return{value:t.lianjiaId,label:t.name}}):e.$message({type:"error",message:"获取小区列表失败!"})}),this.loading=!1},onCityChange:function(t){this.getCountyList(t.value),this.county={},this.street={},this.community={},this.communityList=[],this.getList()},onCountyChange:function(t){this.getStreetList(t.value),this.street={},this.community={},this.communityList=[],this.getList()},onStreetChange:function(t){this.community={},this.communityList=[],this.getList()},onCommunityChange:function(t){this.getList()},handlePageChange:function(t){this.pageIndex=t,localStorage.setItem("userPageIndex",this.pageIndex),this.getList()},sizeChange:function(t){this.pageSize=t,localStorage.setItem("userPageSize",this.pageSize),this.getList()},handleWatch:function(t,e){var a=this;this.$confirm("确定要关注该小区吗 ? ","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(n.b)("/auth/user/watchCommunity",{userId:2,lianjiaCommunityId:e.lianjiaId,cityCode:e.cityCode,countyCode:e.countyCode,streetCode:e.streetCode}).then(function(t){200===t.code?(a.$message({type:"success",message:"关注成功!"}),a.getList()):a.$message({type:"error",message:"关注失败!"})})})},onSubmitFilter:function(){this.getList()},getList:function(){var t=this;Object(n.a)("/community/fuzzy/page",{pageIndex:this.pageIndex,pageSize:this.pageSize,cityCode:this.city.value,countyCode:this.county.value,communityName:this.community.label,streetCode:this.street.value}).then(function(e){200===e.code?(t.tableData=e.data.records,t.total=e.data.total):t.$message({type:"error",message:"获取小区列表失败!"})})}},components:{},mounted:function(){this.getCityList(),this.getList()}}}},["NHnr"]);
//# sourceMappingURL=app.a5f39b2fe53f39469511.js.map